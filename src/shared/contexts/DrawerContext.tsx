import { createContext, useCallback, useContext, useState } from 'react';


interface IDrawerOption{
	icon:string;
	label: string;
	path: string;
}


interface IDrawerContextData {
	isDrawerOpen: boolean;
	toggleDrawerOpen: () => void;
	drawerOptions: IDrawerOption[];
	setDrawerOptions:(newDraweOptions: IDrawerOption[]) => void;
}

const DrawerContext = createContext({} as IDrawerContextData);


export const useDrawerContext = () => {
	return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [drawerOptions, setIsDrawerOptions] = useState<IDrawerOption[]>([]);

	const toggleDrawerOpen = useCallback(() => {
		setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
	}, []);
	const handleSetDrawerOptions = useCallback((newDraweOptions: IDrawerOption[]) => {
		setIsDrawerOptions(newDraweOptions);
	}, []);

	

	return (
		<DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
			{children}
		</DrawerContext.Provider >
	);
};