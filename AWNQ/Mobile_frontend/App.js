const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone13ProMax9 from "./screens/IPhone13ProMax9";
import IPhone13ProMax8 from "./screens/IPhone13ProMax8";
import IPhone13ProMax7 from "./screens/IPhone13ProMax7";
import IPhone13ProMax6 from "./screens/IPhone13ProMax6";
import IPhone13ProMax5 from "./screens/IPhone13ProMax5";
import IPhone13ProMax4 from "./screens/IPhone13ProMax4";
import IPhone13ProMax1 from "./screens/IPhone13ProMax1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Montserrat_extrabold: require("./assets/fonts/Montserrat_extrabold.ttf"),
    Montserrat_thin_italic: require("./assets/fonts/Montserrat_thin_italic.ttf"),
    "IBM Plex Sans_bold": require("./assets/fonts/IBM_Plex_Sans_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone13ProMax9"
              component={IPhone13ProMax9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax8"
              component={IPhone13ProMax8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax7"
              component={IPhone13ProMax7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax6"
              component={IPhone13ProMax6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax5"
              component={IPhone13ProMax5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax4"
              component={IPhone13ProMax4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax1"
              component={IPhone13ProMax1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
