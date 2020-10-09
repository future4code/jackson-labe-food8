import { createMuiTheme } from '@material-ui/core/styles'
import { grayText, neutralColor, primaryColor } from './colors'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'black',
    },
    text: {
      primary: neutralColor,
    },
  }
})

