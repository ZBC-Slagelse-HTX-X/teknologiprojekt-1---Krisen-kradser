import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TestScreen() {
    return (
        <SafeAreaProvider style={styles.safeArea} >
            <View style={styles.container}>
                <Text style={styles.text}>TEST PAGE</Text>
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
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 35,
      color: '#ac9f0d',
    }
    })