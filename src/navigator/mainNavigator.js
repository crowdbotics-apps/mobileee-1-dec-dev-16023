import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen015234Navigator from '../features/CopyOfBlankScreen015234/navigator';
import CopyOfBlankScreen015233Navigator from '../features/CopyOfBlankScreen015233/navigator';
import CopyOfBlankScreen015224Navigator from '../features/CopyOfBlankScreen015224/navigator';
import BlankScreen015204Navigator from '../features/BlankScreen015204/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen015234: { screen: CopyOfBlankScreen015234Navigator },
CopyOfBlankScreen015233: { screen: CopyOfBlankScreen015233Navigator },
CopyOfBlankScreen015224: { screen: CopyOfBlankScreen015224Navigator },
BlankScreen015204: { screen: BlankScreen015204Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
