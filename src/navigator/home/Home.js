import {DrawerNavigator} from 'react-navigation';
import TestNavigation from ',,/test/TestNavigation';
const routeConfig = {
    TestNavigation : {screen: TestNavigation}
};
const navConfig = {
    initialRouteName: ""
};
export const Home = DrawerNavigator(routeConfig, navConfig);