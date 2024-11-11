import { View, Text } from "react-native";
import { Slot } from 'expo-router';
import Header from "../../../components/bibliotek";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";


export default function Layout() {
  const { theme } = useTheme();
  const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;

  return (
    <View style={{
      flex: 1, 
      flexDirection:"row",  
      backgroundColor: currentTheme.bibBackground
    }}>
      <Header />
      
      <View style={{flex: 1, width: "50%"}}>
        <Slot />
      </View>
    </View>
  );
}


