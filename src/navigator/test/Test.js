import {DrawerNavigator} from 'react-navigation';
import HomeNavigation from '../home/HomeNavigation';
const routeConfig = {
     HomeNavigation: {screen: HomeNavigation}
};
const navConfig = {
    initialRouteName: ""
};
export const Test = DrawerNavigator(routeConfig, navConfig);