const Day = props => {

  const { dailyData, getDaysOfWeek, weatherIcon, conversion, openDay } = props;

  return (
    <>
      { 
        dailyData.map((day) => (
          <li onClick={() => {openDay(day.id)}} className={day.id === 0 ? "today" : "each-day"} key={day.id}>
            <p className="daily-day-text">{day.id === 0 ? "Today" : getDaysOfWeek(conversion(day.dt).getDay())}</p>
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