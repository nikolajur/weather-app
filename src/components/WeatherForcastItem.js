import WeatherForcastIcon from "./WeatherForcastIcon";

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
      <p className="weather__property">{time.slice(-5)}</p>
      <p className="weather__property">{day}</p>
      <p>{<WeatherForcastIcon code={code} />}</p>
      <p className="weather__property">
        min:&nbsp;
        <span className="weather__property-value">{temperatureMin}°C</span>
      </p>
      <p className="weather__property">
        max:&nbsp;<span className="weather__property-value">{temperatureMax}°C</span>
      </p>
      <p className="weather__property">
        <span className="weather__property-value">
          <img
            className="weather__forecast-rain-icon"
            width="12"
            height="12"
            src="https://img.icons8.com/material-outlined/24/023047/blur.png"
            alt="blur"
          />
          {precipitation}&nbsp;mm
        </span>
      </p>
    </div>
  );
};

export default WeatherForcastItem;
