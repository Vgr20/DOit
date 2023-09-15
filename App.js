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
import MorningRoutine from "./Screens/MorningRoutine";
import yourHabits from "./Screens/yourHabits";
import PastReflections from "./Screens/PastReflections";
import FocusModeV2 from "./Screens/FocusModeV2";
import CountDownV2 from "./Screens/CountDownV2";
import FocusModeV3 from "./Screens/FocusModeV3";

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
    MorningRoutine: {
      screen: MorningRoutine,
    },
    yourHabits: {
      screen: yourHabits,
    },
    SelectGoals2: {
      screen: SelectGoals2,
    },
    SelectGoals2: {
      screen: SelectGoals2,
    },

    PastReflections: {
      screen: PastReflections,
    },

    CountDownV2: {
      screen: CountDownV2,
    },

    FocusModeV2: {
      screen: FocusModeV2,
    },
    FocusModeV3: {
      screen: FocusModeV3,
    },

  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOption: {
      title: "App",
    },
  }
);

const AppContainer = createAppContainer(navigator);

export default function App() {
  const fetchApi = async () => {
    try {
      // const res = await axios.get("http://10.10.23.145:4000/");
      const res = await axios.get(
        "https://gogeton-backend-c2510df4ea4b.herokuapp.com/"
      );
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
