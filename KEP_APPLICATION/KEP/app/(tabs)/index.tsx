import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from "expo-router";
import { Image } from "react-native";

export default function Index() {
  return (
    <SafeAreaProvider style={styles.safeArea} >
      <View style={styles.container}>
        <Text style={styles.text}>Krisemanual- og ernæringsberegningsprogram (KEP)</Text>
        <Link href="/test_site" style={styles.button}>
          Gå til 'TEST PAGE'
        </Link>
      </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222b00",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 25,
    color: '#ac9f0d',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color:"#fff"
  },
})