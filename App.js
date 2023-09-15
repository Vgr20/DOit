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
import AsyncStorage from "@react-native-async-storage/async-storage";
import {  useFonts, Satisfy_400Regular } from '@expo-google-fonts/satisfy';

//connecting backend
import axios from "axios";
import { useEffect, useState } from "react";

const checkUserLoginStatus = async () => {
  try {
    const value = await AsyncStorage.getItem("KeepLoggedIn");
    console.log(value);
    return value;
  } catch (error) {
    console.log(error);
    return null; // Return null in case of an error
  }
};

export default function App() {

  const [isFontLoaded] = useFonts({
    Satisfy_400Regular,
  });

  const [initialRoute, setInitialRoute] = useState("SignInScreen");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        // const res = await axios.get("http://10.10.23.145:4000/");
        const res = await axios.get(
          "https://gogeton-backend-c2510df4ea4b.herokuapp.com/"
        );
        console.log(res.data);
        const userLoginStatus = await checkUserLoginStatus();
        if (userLoginStatus) {
          setInitialRoute("HomeScreen");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchApi();
  }, []);

  if (!isFontLoaded) {
    return null;
}


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
    },
    {
      initialRouteName: initialRoute,
    }
  );
  const AppContainer = createAppContainer(navigator);
  return <AppContainer />;
}

// export default function App() {
//   const fetchApi = async () => {
//     try {
//       // const res = await axios.get("http://10.10.23.145:4000/");
//       const res = await axios.get(
//         "https://gogeton-backend-c2510df4ea4b.herokuapp.com/"
//       );
//       console.log(res.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);
//   return <AppContainer />;
// }
