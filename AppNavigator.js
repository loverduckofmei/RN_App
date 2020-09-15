import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
 
 
const AppNavigator = createStackNavigator({
  FirstScreen: { screen: FirstScreen },
  SecondScreen: { screen: SecondScreen }
});
 
export default createAppContainer(AppNavigator, {
  initialRouteName: 'FirstScreen',
  initialRouteName: 'SecondScreen'
});