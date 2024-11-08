import { View, Text, StyleSheet } from "react-native";
import Indstillinger from "@/app/(tabs)/indstillinger/indstillinger";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Indstillinger />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height:"100%",
        flexDirection:"row", 
        alignItems: "flex-start", 
        backgroundColor: "#000"
      },
})