export const currentWeatherVariants = {
  hidden: {
    x: "-100vw"
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.4
    }
  },
  exit: { x: "-100vw", transition: { ease: "easeOut", duration: 0.15 } }
};

export const forecastVariants = {
  hidden: {
    x: "100vw"
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.4
    }
  },
  exit: { x: "100vw", transition: { ease: "easeOut", duration: 0.15 } }
};
