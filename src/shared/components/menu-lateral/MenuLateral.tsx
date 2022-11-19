import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../../contexts';


export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
	return (
		<>
			<Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose= {toggleDrawerOpen}>
				<Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
					<Box width="100%" height={theme.spacing(20)} display="flex" alignItems='center' justifyContent='center'>
						<Avatar sx={{ height: theme.spacing(18), width: theme.spacing(18) }}
							alt="Gisele Cortes" src="https://media-exp1.licdn.com/dms/image/C4E03AQFqXWiPOiAwKw/profile-displayphoto-shrink_800_800/0/1657586288390?e=1674086400&v=beta&t=X6o01AK7H_C-MX5j85zE7zueA1SNWMi4M3rq99548uA" />
					</Box>
					<Divider />
					<Box flex={1}>
						<List component='nav'>
							<ListItemButton>
								<ListItemIcon>
									<Icon>autostories</Icon>
								</ListItemIcon>
								<ListItemText primary="Sobre" />
							</ListItemButton>

						</List>

					</Box>
				</Box>
			</Drawer>

			<Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
				{children}
			</Box>
		</>
	);
};