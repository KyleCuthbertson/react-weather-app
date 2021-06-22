import sun from '../imgs/sun.png';
import rain from '../imgs/rain.png';
import suncloud from '../imgs/suncloud.png';


const DailyWeather = (props) => {

  // let dailyDate;
  let dailyData = props.data.daily

  const successful = props.successful;


  const unixConversion = (dt) => {
    const milliseconds = dt * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject;
  }

  if (successful) {
    for (let i = 0; i < dailyData.length; i++ ) {
      dailyData[i].id = i;
      // dailyDate = unixConversion(dailyData[i].dt);
    }
  }

  const weatherIcon = (icon) => {
    switch(icon) {
      case "Clear":
        return sun;
      case "Rain":
        return rain;
      case "Clouds":
        return suncloud;
      default: 
        return sun;
    }
  }

  const getDaysOfWeek = (num) => {
    switch(num) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "N/A";
    }
  }
  
  return (
    <> 
    { successful ?
      <ul className="daily-weather-list">
        { 
          dailyData.map((day) => (
            <li className="each-day" key={day.id}>
              {console.log(day)}
              <p className="daily-day-text">{day.id === 0 ? "Today" : getDaysOfWeek(unixConversion(day.dt).getDay())}</p>
              <p className="daily-weather-text">{day.weather[0].main}</p>
              <p className="daily-icon">
                <img src={weatherIcon(day.weather[0].main)} alt={day.weather[0].main}/>
              </p>
                
              <p className="daily-min">Min: {Math.round(day.temp.min) + "\u00b0C"}</p>
              <p className="daily-max">Max: {Math.round(day.temp.max) + "\u00b0C"}</p>

            </li>
          ))
        }
      </ul>
      : ""
    }
    </>
  )
}


export default DailyWeather;