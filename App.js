import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Habits from "./Screens/Habits";
import Dashboard from "./Screens/Dashboard";
import fullscreentest from "./Screens/fullscreentest";
import NewHabits from "./Screens/NewHabits";
import SelectGoals from "./Screens/SelectGoals";
import TimerGoal from "./Screens/TimerGoal";
import SignInScreen from "./Screens/SignInScreen";
import Stats from "./Screens/Stats";
import TrendingHabits from "./Screens/TrendingHabits";
import RegisterScreen from "./Screens/RegisterScreen";
import NavigationBar from "./Screens/NavigationBar";
import FocusMode from "./Screens/FocusMode";
import CountdownPage from "./Screens/CountDownPage";
import SelectGoals2 from "./Screens/SelectGoals_drop";

//connecting backend
import axios from "axios";
import { useEffect } from "react";

const navigator = createStackNavigator(
  {
    HomeScreen: {
      screen: Dashboard,
    },
    HabitScreen: {
      screen: Habits,
    },
    NewHabitsScreen: {
      screen: NewHabits,
    },
    SignInScreen: {
      screen: SignInScreen,
    },
    RegisterScreen: {
      screen: RegisterScreen,
    },
    StatsScreen: {
      screen: Stats,
    },
    SelectGoalsScreen: {
      screen: SelectGoals,
    },
    TimerGoalScreen: {
      screen: TimerGoal,
    },
    TrendingHabitsScreen: {
      screen: TrendingHabits,
    },
    FullScreen: {
      screen: fullscreentest,
    },

    NavigationBarScreen: {
      screen: NavigationBar,
    },

    FocusMode: {
      screen: FocusMode,
    },
    CountdownPage: {
      screen: CountdownPage,
    },
    CountdownPage: {
      screen: CountdownPage,
    },
    SelectGoals2: {
      screen: SelectGoals2,
    },
  },
  {
    initialRouteName: "SignInScreen",
    defaultNavigationOption: {
      title: "App",
    },
  }
);

const AppContainer = createAppContainer(navigator);

export default function App() {
  const fetchApi = async () => {
    try {
      const res = await axios.get("http://199.36.158.100:4000/");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return <AppContainer />;
}
