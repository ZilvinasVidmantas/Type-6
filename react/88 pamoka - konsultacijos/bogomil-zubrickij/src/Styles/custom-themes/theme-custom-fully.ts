// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createTheme } from '@mui/material';

import background from '../../assets/images/img-background.png';

const theme = createTheme();

const createColor = (color: string) => theme.palette.augmentColor({ color: { main: color } });

const MyThemeCustomFully = createTheme(theme, {
  palette: {
    red: createColor('#FF0000'),
    black: createColor('#000000'),
    blue: createColor('#2222dd'),
    gray: createColor('#808080'),

    background: {
      default: '#fafafa',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        backgroundImage: `url(${background})`,
        hight: '100vg',
      },
    },
  },
});

export default MyThemeCustomFully;
