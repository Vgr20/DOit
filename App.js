import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Habits from './Screens/Habits';
import Dashboard from './Screens/Dashboard';
import fullscreentest from './Screens/fullscreentest';

const navigator = createStackNavigator(
  {
    HomeScreen : {
      screen : Dashboard
    },
    SecondScreen : {
      screen : Habits
    },
    FullScreen : {
      screen : fullscreentest
    }
  },
  {
    initialRouteName : 'HomeScreen',
    defaultNavigationOption : { 
      title : 'App'
    }  
  }
);

export default createAppContainer(navigator);

// export default function App() {

//     HomeScreen : {
//       screen : Dashboard
//     }
//     SecondScreen : {
//       screen : home
//     }
//     FullScreen : {
//       screen : fullscreentest
//     }
  
//   return (
//     <Dashboard />
//   );
// }