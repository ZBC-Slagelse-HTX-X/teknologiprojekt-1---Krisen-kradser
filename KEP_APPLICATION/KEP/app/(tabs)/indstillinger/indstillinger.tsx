import { Text, View, StyleSheet, Switch, Platform } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";

export default function Indstillinger() {
  const { dyslexiaMode, setDyslexiaMode } = useFont();
  const toggleSwitch = () => setDyslexiaMode();

  const [loaded, error] = useFonts({
    'open-dyslexic': require('@/assets/fonts/open-dyslexic.ttf'),
  });

  const { theme, toggleTheme } = useTheme();
  const toggleThemeSwitch = () => toggleTheme();
  const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider style={[styles.safeArea, {backgroundColor: currentTheme.background}]}>
      <View style={styles.container}>
        <Text 
          style={[
            { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }, 
            styles.header,
            { color: currentTheme.fontColor }
          ]}>
            Indstillinger
        </Text>

        <View style={styles.settingsInnerContainer}>
          <Text style={[
            { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }, 
            styles.text,
            { color: currentTheme.fontColor }
          ]}>
            Ordblindhedstilstand
          </Text>
          
          <Switch
            style={{margin:10}}
            trackColor={{ false: 'grey', true: '#1e90ff' }}
            thumbColor={dyslexiaMode ? '#f5dd4b' : undefined}
            {...Platform.select({
              web: {
                activeThumbColor: "white"
              },
              default: {}
            })}
            onValueChange={toggleSwitch}
            value={dyslexiaMode}
          />
        </View>
        
        <View style={styles.settingsInnerContainer}>
          <Text style={[
            { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }, 
            styles.text,
            { color: currentTheme.fontColor }
            ]}>
            Farveblindhedstilstand
          </Text>
          <Switch
            style={{margin:10}}
            trackColor={{ false: 'grey', true: '#1e90ff' }}
            thumbColor={theme ? undefined : "#f5dd4b"}
            {...Platform.select({
              web: {
                activeThumbColor: "white"
              },
              default: {}
            })}
            onValueChange={toggleThemeSwitch}
            value={theme === 'normal'}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  container: {
    width: "25%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  header: {
    fontSize: 28,
  },
  settingsInnerContainer: {
    width: "100%",
    height: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#333",
    padding: 10,
  },
});
