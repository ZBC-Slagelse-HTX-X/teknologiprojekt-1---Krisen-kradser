import { View, StyleSheet,  Text } from 'react-native';
import { Link, Stack, usePathname } from 'expo-router';

export default function NotFoundScreen() {
  const currentPath = usePathname();
  
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Page Not Found' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen! {"\n"}
          <Text>Du forsøgte: {currentPath}</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefae0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
});