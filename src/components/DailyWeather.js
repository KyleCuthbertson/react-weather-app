
const DailyWeather = (props) => {

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  let dailyData = props.data.daily;
  const successful = props.successful;


  const unixConversion = (dt) => {
    const milliseconds = dt * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject;
    return humanDateFormat;
  }

  if (successful) {
    for (let i = 0; i < dailyData.length; i++ ) {
      dailyData[i].id = i;
      console.log(dailyData[i]);

      const dailyDate = unixConversion(dailyData[i].dt);

      console.log(dailyDate.getUTCDay());
    }
  }


  return (
    <> 
    { successful ?
      <ul className="daily-weather-list">
        { 
          dailyData.map((day) => (
            <li className="each-day" key={day.id}>
              <p className="daily-day-text">{days[day.id]}</p>
              <p className="daily-weather-text">Weather</p>
              <p className="daily-icon">Icon</p>
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