import { usePathname, Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { useFont } from "@/components/fontContext";


export default function HomeLib() {
  const currentPath = usePathname()
  const { dyslexiaMode } = useFont();

  return (
    <View style={styles.container}>
        <Text style={[styles.header, {fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}]}>Velkommen til KEP-Biblioteket {"\n"}</Text>
        <Text style={{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>Du kan  navigere dette bibliotek ved at bruge menuen i venstre side af din skærm</Text>
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