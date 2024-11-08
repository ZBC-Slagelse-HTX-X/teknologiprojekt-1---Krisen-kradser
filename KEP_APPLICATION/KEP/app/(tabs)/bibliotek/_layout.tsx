import { View, Text } from "react-native";
import { Slot } from 'expo-router';
import Header from "../../../components/bibliotek";

export default function Layout() {
  return (
    <View style={{flex: 1, flexDirection:"row", alignItems: "flex-start", backgroundColor: "#fefae0"}}>
      <Header />
      
      <View style={{flex: 1, width: "50%"}}>
        <Slot />
      </View>
    </View>
  );
}


