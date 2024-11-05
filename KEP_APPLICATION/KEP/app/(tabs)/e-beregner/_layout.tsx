import { View, Text } from "react-native";
import E_beregner from "./e-beregner";
  
export default function e_beregnerLayout() {

  return (
      <View style={{flex:1, alignItems:"flex-start", backgroundColor: "#fefae0",}}>
        <E_beregner/>
    </View>
  );
}