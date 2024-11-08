import { Text, View, StyleSheet, Switch, Platform } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFont } from "@/components/fontContext";

export default function Indstillinger() {
  const {dyslexiaMode, setDyslexiaMode} = useFont();
  const toggleSwitch = () => setDyslexiaMode(prevState => !prevState)
    
  const [loaded, error] = useFonts({
    'open-dyslexic': require('@/assets/fonts/open-dyslexic.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
        <SafeAreaProvider style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={[{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }, styles.header]}>Indstillinger</Text>
                
                <View style={styles.settingsInnerContainer}>
                  <Text style={[{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },styles.text]}>dysleksi-tilstand</Text>
                  <Switch
                    trackColor={{ false: 'grey', true: '#1e90ff' }}
                    thumbColor={ dyslexiaMode ? '#f5dd4b' : undefined }
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
            </View>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#222b00",
      height:"100%",
    },
    container: {
      width: "25%",
      // backgroundColor: "#fff",
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: 20,
    },
    text: {
      color: '#ac9f0d',
      fontSize:18,
    },
    header: {
      fontSize:28,
      color: '#ac9f0d',
    },
    settingsInnerContainer: {
      width: "100%",
      height: 50,
      // backgroundColor:"#fff",
      justifyContent:"space-between",
      alignItems:"center",
      flexDirection:"row",
      borderBottomWidth: 1,
      borderColor: "#333",
      padding:10,
    },
    })