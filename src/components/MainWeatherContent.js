import { useState } from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

// Components
import CurrentWeatherDetails from './CurrentWeatherDetails'
import DayGroup from './DayGroup';
import NewLocationMenu from './NewLocationMenu';
import FirstLocation from './FirstLocation';


const MainWeatherContent = () => {

  const [weather, setWeather] = useState([]);
  const [success, setSuccess] = useState(false); // True if the API request successful
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false); // Loading while fetching data from API
  const [locationName, setLocationName] = useState("");

  let latValue, lonValue;
  let inputValue = "";

  // Second API call to fetch the lat and long values
  const secondAPI = (lat, lon) => {
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely&units=metric&appid=a644c4e60e98896a838f0b5c00c7bfef")
    .then(res => {
      setWeather(res.data);
      setIsError(false);
      setErrorMessage(null);
      setLoading(false);
      setSuccess(true);
    })
    .catch(error => {
      if (error.request.status === 404 ) {
        setErrorMessage("Location " + inputValue + " doesn't exist");
      } else {
        setErrorMessage("Can't load weather data for this location: " + inputValue);
      }      
      setIsError(true);
      setTimeout(function() {
        setIsError(false);
      }, 5000);
      setSuccess(false);
      setLoading(false);
    })
  }

  const handleClick = (event) => {
    event.preventDefault();
    
    // Checks which form submits for API call (either first form or new location form)
    if (event.target.id.indexOf("new-location") > -1 ) {
      inputValue = document.getElementById("new-input").value;
    } else {
      inputValue = document.getElementById("first-input").value;
    }

    setLoading(true);
    if (inputValue !== "" && inputValue !== null) {
      axios.get("http://api.openweathermap.org/data/2.5/weather?q="+ inputValue + ",uk&units=metric&APPID=a644c4e60e98896a838f0b5c00c7bfef")
      .then(res => {
        latValue = res.data.coord.lat;
        lonValue = res.data.coord.lon;
        setLocationName(inputValue);
        secondAPI(latValue, lonValue);
        event.target.form.reset(); // Resets form
        setIsError(false);
      })
      .catch(error => {
        if (error.request.status === 404 ) {
          setErrorMessage("Location " + inputValue + " doesn't exist");
        } else {
          setErrorMessage("Can't load weather data for this location: " + inputValue);
        }
        setIsError(true);
        setTimeout(function() {
          setIsError(false);
        }, 5000);
        setSuccess(false);
        setLoading(false);
      })
    }
    else {
      setErrorMessage("Please enter a value!");
      setLoading(false);
      setIsError(true);
      setTimeout(function() {
        setIsError(false);
      }, 5000);
    }
  }
  
  return (
    <>
    <div className="main-wrapper">
        
        <CSSTransition in={isError} timeout={500} classNames="transition">
          <div className={isError ? "error-text" : "hidden"}>
            <p>{errorMessage}</p>
          </div>
        </CSSTransition> 

          <NewLocationMenu
            successful={success}
            loading={loading}
            handleClick={handleClick}
          />

      <div className="main-weather-content-wrapper">  
        <CSSTransition out={success} timeout={500} classNames="transition">
          <FirstLocation
            successful={success}
            loading={loading}
            handleClick={handleClick}
          />
        </CSSTransition>
        
        <CurrentWeatherDetails 
          data={weather} 
          successful={success} 
          location={locationName}
        />

        <div className="daily-weather-wrapper">
          <DayGroup 
            data={weather} 
            successful={success}/>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default MainWeatherContent;