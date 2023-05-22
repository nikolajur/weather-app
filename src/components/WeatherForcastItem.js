import ForcastWeatherIcon from "./ForcastWeatherIcon";

const WeatherForcastItem = ({ time, temperatureMin, temperatureMax, precipitation, code }) => {
  console.log(time, temperatureMin, temperatureMax, precipitation, code);
  const date = Date.parse(time);
  const dayNumber = new Date(date).getUTCDay();
  let day;
  switch (dayNumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      break;
  }

  return (
    <div className="weather__forecast-item">
      <p>{time.slice(-5)}</p>
      <p>{day}</p>
      <p>{<ForcastWeatherIcon code={code} />}</p>
      <p>{temperatureMin}</p>
      <p>{temperatureMax}</p>
      <p>{precipitation}</p>
    </div>
  );
};

export default WeatherForcastItem;
