import { Stack } from "expo-router";
import * as ScreenOrientation from 'expo-screen-orientation';

export default function RootLayout() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found"/>
    </Stack>
  );
}