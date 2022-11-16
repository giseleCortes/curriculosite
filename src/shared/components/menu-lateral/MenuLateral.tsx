import { Avatar, Box, Drawer, useTheme } from "@mui/material"


export const MenuLateral: React.FC <{ children: React.ReactNode }> = ({ children }) => {
    const theme = useTheme();
    return(
       <>
        <Drawer open={true} variant = 'permanent'>
            <Box width={theme.spacing(28)}>
                <Box width="100%" height={theme.spacing(20)} display="flex">
                    <Avatar alt="Gisele Cortes" src="https://media-exp1.licdn.com/dms/image/C4E03AQFqXWiPOiAwKw/profile-displayphoto-shrink_800_800/0/1657586288390?e=1674086400&v=beta&t=X6o01AK7H_C-MX5j85zE7zueA1SNWMi4M3rq99548uA" /> 
                </Box>
            </Box>
        </Drawer>

        <Box height = '100vh' marginLeft={theme.spacing(28)}>
         {children}
        </Box>
       </>  
    );
};