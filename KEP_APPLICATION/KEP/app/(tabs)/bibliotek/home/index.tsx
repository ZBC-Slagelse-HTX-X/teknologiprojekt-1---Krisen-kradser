import { usePathname, Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";


export default function HomeLib() {
  const currentPath = usePathname()

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Velkommen til KEP-Biblioteket {"\n"}</Text>
        <Text>Du kan  navigere dette bibliotek ved at bruge menuen i venstre side af din skærm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
      fontSize: 25
    }
})