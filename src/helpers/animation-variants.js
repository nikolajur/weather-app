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
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { x: "100vw", transition: { ease: "easeOut", duration: 0.15 } }
};

export const textVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const firstRenderVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
