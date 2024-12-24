import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import HomePage from '../pages/HomePage';
import CustomTab from './components/CustomTab';
import MyPage from '../pages/MyPage';
import { DeviceEventEmitter } from 'react-native';

const Tab = createBottomTabNavigator();


export const defaultTabBarStyle = {
  borderTopColor: '#D4D5D8',
  borderTopWidth: 0.5,
  backgroundColor: '#ffffff',
};

const defaultOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#334568',
  tabBarInactiveTintColor: '#6F7788',
  tabBarStyle: defaultTabBarStyle,
  tabBarLabel: () => null,
  tabBarItemStyle: {
    justifyContent: 'center',
  },
};

const HomeNavigation = () => {
  const routes = [
    {
      name: 'Home',
      icon: require('./tab_fuwu.json'),
      component: HomePage
    },
    {
      name: 'My',
      icon: require('./tab_fuwu.json'),
      component: MyPage
    }
  ]
  return (
    <Tab.Navigator
      screenOptions={defaultOptions}
    >
      {routes.map(routeConfig => (
        <Tab.Screen
          key={routeConfig.name}
          name={routeConfig.name}
          options={{
            title: routeConfig.name,
            tabBarIcon: ({ focused }) =>
              <CustomTab
                focused={focused}
                icon={routeConfig.icon}
                name={routeConfig.name}
                routeName={routeConfig.name}
                tintColor={'#0942b1'}
              />
          }}
          component={routeConfig.component}
          listeners={{
            tabPress: () => {
              DeviceEventEmitter.emit('tabPress', { name: routeConfig.name });
              console.log('tabPress', routeConfig.name);
            }
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeNavigation;