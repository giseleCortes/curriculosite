import { createTheme} from '@mui/material';
import { cyan, deepPurple } from '@mui/material/colors';

export const LightTheme = createTheme ({
    palette:{
        primary:{
            main: deepPurple[500],
            dark:deepPurple[600],
            light: deepPurple[300],
            contrastText:'#f5f5f5',
        },

        secondary:{
            main: cyan[500],
            dark:cyan[400],
            light: cyan[300],
            contrastText:'#f5f5f5',
        },
        background:{
            default:"#ede7f6",
            paper: '#d1c4e9',
        }
    }    
});