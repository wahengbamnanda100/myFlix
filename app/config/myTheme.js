import {DefaultTheme} from '@react-navigation/native';

export default MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    background: 'black',
    text: 'white',
  },
};
