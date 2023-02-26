export const colors = {
  //text
  mainText: '#212121',
  auxiliaryText: '#979998',
  whiteText: '#ffffff',
  //accent
  accent: '#CE4B43',
  //background
  headerBg: '#A9ACA9',
  mainBg: '#ffffff',
  //icon
  iconDark: '#212121',
  iconLight: '#ffffff',
  //auxiliary
  auxiliary: '#E1DEE3',
};

export const fontSizes = {
  //text
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '18px',
  //title
  mobileTitle: '20px',
  tabletTitle: '26px',
  desktopTitle: '36px',
};

export const utils = {
  shadow: '0px 1px 4px rgba(0, 0, 0, 0.3)',
  shadowOfCards:
    '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '4px',
  borderRadiusOfBtn: '10px',
};

export const breakpoints = {
  mobile: '390px',
  preTablet: '767px',
  tablet: '768px',
  preDesktop: '1199px',
  desktop: '1200px',
};

//media queries
export const mq = {
  mobile: `@media (min-width: ${breakpoints.mobile})`,
  onlyMobile: `@media (max-width: ${breakpoints.preTablet})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
};