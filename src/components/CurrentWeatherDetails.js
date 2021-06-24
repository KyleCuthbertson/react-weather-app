import { CSSTransition } from 'react-transition-group';

const CurrentWeatherDetails = (props) => {

  const { data, successful, location } = props;

  const date = new Date(); // New Date Object
  const currentDay = date.getUTCDay(); // Returns number of the day 0 = Sunday, 6 = Saturday
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Wind Speed conversion from Km/h to MPH
  const windSpeedConvert = () => {
    if (successful) {
      let gustSpeed = data.current.wind_gust;
      gustSpeed = (gustSpeed / 4) * 9;
      return gustSpeed;
    }
  }
  const windSpeed = windSpeedConvert();
  
  return (
    <>
      <CSSTransition in={successful} timeout={750} classNames="weatherTransition">
        <div className={successful ? "weather-details-wrapper" : "hidden"}>
          <h2 className="weather-for">{location}</h2>
          <p className="day-text">Day: {days[currentDay]}</p>
          <p className="temp-current">Currently: {successful ? Math.round(data.current.temp) + "\u00b0C (feels like " + Math.round(data.current.feels_like) + "\u00b0C)" : "N/A"}</p>
          <p className="pressure">Pressure: {successful ? Math.round(data.current.pressure) + " mb" : "N/A"} </p>
          <p className="humidity">Humidity: {successful ? Math.round(data.current.humidity) + "%" : "N/A"} </p>
          <p className="windspeed">Wind Speed: {successful ? Math.round(windSpeed) + " mph" : "N/A"} </p>
          <p className="location-text">Timezone: {data.timezone}</p>
        </div>
      </CSSTransition>
    </>
  )
}

export default CurrentWeatherDetails;