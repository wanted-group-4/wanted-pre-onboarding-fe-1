const size = {
  mobile: '767px',
  desktop: '3600px',
};

const theme = {
  device: {
    max: {
      mobile: `(max-width: ${size.mobile})`,
      desktop: `(max-width: ${size.desktop})`,
    },
    min: {
      mobile: `(min-width: ${size.mobile})`,
      desktop: `(min-width: ${size.desktop})`,
    },
  },
};

export default theme;
