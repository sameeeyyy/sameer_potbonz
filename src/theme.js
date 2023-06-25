import { createTheme } from '@mui/material/styles';
import '@fontsource-variable/nunito';
import '@fontsource/lato';

const customTheme = createTheme({
  color: {
    bgPurple: '#9C5BF5',
    bgDarkPink: '#FF47A2',
    bgPink: '#FCDCB5',
    bgLightPink: '#FCDCB5',
    bgDullPink: '#FFBBDD',
    bgYellow: '#FFDA47',
    bgLightYellow: '#DCFF02',
    bgBlue: '#FFDA47',
    bgGray: '#F8F8F8',
    bgWhite: '#ffffff',
    headingColor: '#0E081E',
    paragraphColor: '#1C103B',
    tagColor: '#7C58D3',
    serviceBorderColor: "#EBE5F7",
    copyrightColor: '#675D6B'
  },
  fonts: {
    nunito: 'Nunito Variable, sans-serif',
    lato: 'Lato, sans-serif'
  }
});

export default customTheme;