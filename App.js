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
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      HabitScreen: {
        screen: Habits,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      NewHabitsScreen: {
        screen: NewHabits,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      SignInScreen: {
        screen: SignInScreen,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      StatsScreen: {
        screen: Stats,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      SelectGoalsScreen: {
        screen: SelectGoals,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      TimerGoalScreen: {
        screen: TimerGoal,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      TrendingHabitsScreen: {
        screen: TrendingHabits,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      FullScreen: {
        screen: fullscreentest,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },

      NavigationBarScreen: {
        screen: NavigationBar,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },

      FocusMode: {
        screen: FocusMode,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      CountdownPage: {
        screen: CountdownPage,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      CountdownPage: {
        screen: CountdownPage,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      MorningRoutine: {
        screen: MorningRoutine,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      yourHabits: {
        screen: yourHabits,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      SelectGoals2: {
        screen: SelectGoals2,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },
      SelectGoals2: {
        screen: SelectGoals2,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
      },

      PastReflections: {
        screen: PastReflections,
        navigationOptions: {
          headerShown: false, // Hide the header for the SignInScreen
        },
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
