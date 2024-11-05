import { View, Text } from "react-native";
import Bibliotek from "./bibliotek";
  
export default function BibliotekLayout() {

  return (
      <View style={{flex:1, alignItems:"flex-start", backgroundColor: "#fefae0",}}>
        <Bibliotek/>
    </View>
  );
}