import { createTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import {blue} from '@material-ui/core/colors'
export const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[300],

        },
        secondary: {

            main: blue['A200'],
        },
    },
});