
const Day = props => {

  const { dailyData, hourlyData, getDaysOfWeek, weatherIcon, conversion } = props;

  const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Creates a new array which is limited to only 24 instances instead of 47/48
  let limitedhourlyData = hourlyData.slice(0, 24);

  return (
    <>
      { 
        dailyData.map((day) => (
          day.id === 0 ? 
            <div className="today" key={day.id}>
              <p className="daily-day-text">Today</p>
              <p className="daily-icon">
                <img src={weatherIcon(day.weather[0].main)} alt={day.weather[0].main}/>
              </p>
              <p className="daily-weather-text">{day.weather[0].main}</p>
              <p className="daily-min">Min: {Math.round(day.temp.min) + "\u00b0C"}</p>
              <p className="daily-max">Max: {Math.round(day.temp.max) + "\u00b0C"}</p>
              <ul className="hour-wrapper">
                { 
                limitedhourlyData.map((hour) => (
                  <li key={hour.dt}>
                    <p className="hour-number">{conversion(hour.dt).getHours()}</p>
                    <p className="hourly-icon">
                      <img src={weatherIcon(hour.weather[0].main)} alt={day.weather[0].main}/>
                    </p>
                    <p className="hour-temp">{Math.round(hour.temp) + "\u00b0C"}</p>
                  </li>
                ))
                }
                </ul>
            </div> 
          : 
            <li className="each-day" key={day.id}>
              <p className="daily-day-text">{day.id === 1 ? "Tomorrow" : getDaysOfWeek(conversion(day.dt).getDay())}</p>
              <p className="daily-date-text">{conversion(day.dt).getDate() + " "}{ months[conversion(day.dt).getMonth()]}</p>
              <p className="daily-icon">
                <img src={weatherIcon(day.weather[0].main)} alt={day.weather[0].main}/>
              </p>
              <p className="daily-weather-text">{day.weather[0].main}</p>
              <p className="daily-min">Min: {Math.round(day.temp.min) + "\u00b0C"}</p>
              <p className="daily-max">Max: {Math.round(day.temp.max) + "\u00b0C"}</p>
            </li>
        ))
      }
    </>
  )
}


export default Day;