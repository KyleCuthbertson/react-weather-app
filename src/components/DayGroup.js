import Day from "./Day";

// image import
import sun from '../imgs/sun.png';
import rain from '../imgs/rain.png';
import suncloud from '../imgs/suncloud.png';


const DayGroup = (props) => {

  let dailyData = props.data.daily;
  let hourlyData = props.data.hourly;

  const successful = props.successful;

  const unixConversion = (dt) => {
    const milliseconds = dt * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject;
  }

  if (successful) {
    for (let i = 0; i < dailyData.length; i++ ) {
      dailyData[i].id = i;
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
        <Day 
        dailyData={dailyData}
        hourlyData={hourlyData}
        getDaysOfWeek={getDaysOfWeek}
        weatherIcon={weatherIcon}
        conversion={unixConversion}
        />
      </ul>
      : ""
    }
    </>
  )
}


export default DayGroup;