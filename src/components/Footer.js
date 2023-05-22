const Footer = () => {
  return (
    <>
      <footer>
        <p>
          <a href="https://nikolajur.github.io/" target="_blank" rel="noreferrer">
            &copy;&nbsp;Nikola Jurková 2023
          </a>
        </p>
        <div className="footer__credits">
          <p>
            Weather data:&nbsp;
            <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
              OpenWeather
            </a>{" "}
            &{" "}
            <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">
              Open-Meteo.com
            </a>
          </p>
          <p>
            Icons by&nbsp;
            <a href="https://icons8.com" target="_blank" rel="noreferrer">
              Icons8
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
