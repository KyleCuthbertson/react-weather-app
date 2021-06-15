
const DailyWeather = (props) => {

  const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let dailyData = props.data.daily

  const successful = props.successful;

  let today = new Date();
  today = today.getUTCDay();

  const unixConversion = (dt) => {
    const milliseconds = dt * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject;
  }

  if (successful) {
    for (let i = 0; i < dailyData.length; i++ ) {
      dailyData[i].id = i;
      const dailyDate = unixConversion(dailyData[i].dt);
    }
  }


  return (
    <> 
    { successful ?
      <ul className="daily-weather-list">
        { 
          dailyData.map((day) => (
            <li className="each-day" key={day.id}>
              <p className="daily-day-text">{day.id === today ? "Today" : days[day.id]}</p>
              <p className="daily-weather-text">{day.weather[0].main}</p>
              <p className="daily-icon">{day.weather[0].icon}</p>
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