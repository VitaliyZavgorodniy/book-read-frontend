import bgLogMb from 'assets/images/bgLogMb.jpg'
import bgRegMb from 'assets/images/bgRegMb.jpg'
import bgLogTb from 'assets/images/bgLogTb.jpg'
import bgRegTb from 'assets/images/bgRegTb.jpg'
import bgLogDs from 'assets/images/bgLogDs.jpg';
import bgRegDs from 'assets/images/bgRegDs.jpg';

export const theme = {
  colors: {
    primary: '#242A37',
    secondary: '#091E3F',
    tertiary: '#898F9F',
    authorLine: 'rgba(36, 42, 55, 0.5)',
    bgAlpha: 'rgba(9, 30, 63, 0.8)',
    btnText: '#707375',
    bgPrimary: '#F6F7FB',
    bgSecondary: '#ffffff',
    bgTertiary: '#B1B5C2',
    textLight: '#A6ABB9',
    bgLight: '#F5F7FA',
    accent: '#FF6B08',
    contrast: '#ffffff',
    heading: '#6D7A8D',
    error: '#F32424',
    hover: '#D15807',
    lineStat: '#E0E5EB'
  },
  shadows: {
    primary: '4px 4px 8px rgba(36, 42, 55, 0.15)',
    block: '0px 2px 3px rgba(9, 30, 63, 0.1)',
    button: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    innerInput: 'inset 0 1px 2px rgba(29, 29, 27, 0.15)',
    booksItem: '0px 2px 3px rgba(9, 30, 63, 0.1)',
  },
  font: {
    familyPrimary: 'Montserrat, sans-serif',
    familyLogo: 'Abril Fatface, curcive',
    familySecondary: 'Roboto, sans-serif',
  },
  backgrounds: {
    logMb: bgLogMb,
    logTb: bgLogTb,
    logDs: bgLogDs,
    regMb: bgRegMb,
    regTb: bgRegTb,
    regDs: bgRegDs,
  },
  animations: {
    primary: '250ms ease-in-out',
  },
};
