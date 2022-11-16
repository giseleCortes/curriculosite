import { Avatar, Box, Drawer, useTheme } from "@mui/material"


export const MenuLateral: React.FC <{ children: React.ReactNode }> = ({ children }) => {
    const theme = useTheme();
    return(
       <>
        <Drawer open={true} variant = 'permanent'>
            <Box width={theme.spacing(28)}>
            <Avatar alt="Gisele Cortes" src="" />   
            </Box>
        </Drawer>

        <Box height = '100vh' marginLeft={theme.spacing(28)}>
         {children}
        </Box>
       </>  
    );
};