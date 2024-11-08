import { Stack } from "expo-router";
import { Platform } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';



export default function RootLayout() {
  if (Platform.OS == "ios" || Platform.OS == "android" ) {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  }
  return (
    <Stack>

      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false 
        }} 
        />

      <Stack.Screen name="+not-found"/>
    </Stack>
  );
}