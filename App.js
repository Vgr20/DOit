import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Habits from './Screens/Habits';
import Dashboard from './Screens/Dashboard';
import fullscreentest from './Screens/fullscreentest';
import NewHabits from './Screens/NewHabits';
import SelectGoals from './Screens/SelectGoals';
import TimerGoal from './Screens/TimerGoal';
import SignInScreen from './Screens/SignInScreen';
import Stats from './Screens/Stats';
import TrendingHabits from './Screens/TrendingHabits';
import NavigationBar from './Screens/NavigationBar';
import FocusMode from './Screens/FocusMode';
import CountdownPage from './Screens/CountDownPage';
const navigator = createStackNavigator(
  {
    HomeScreen : {
      screen : Dashboard
    },
    HabitScreen : {
      screen : Habits
    },
    NewHabitsScreen : {
      screen : NewHabits
    },
    SignInScreen : {
      screen : SignInScreen
    },
    StatsScreen : {
      screen : Stats
    },
    SelectGoalsScreen : {
      screen : SelectGoals
    },
    TimerGoalScreen : {
      screen : TimerGoal
    },
    TrendingHabitsScreen : {
      screen : TrendingHabits
    },
    FullScreen : {
      screen : fullscreentest
    },
    NavigationBarScreen : {
      screen : NavigationBar
    },
    FocusMode : {
      screen : FocusMode
    },
    CountdownPage : {
      screen : CountdownPage
    }
  },
  {
    initialRouteName : 'SignInScreen',
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