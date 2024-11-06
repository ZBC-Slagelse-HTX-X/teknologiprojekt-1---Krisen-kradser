import { usePathname, Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

  
export default function Test_page_lib() {
const currentPath = usePathname()
  return (
    <View style={styles.test_page_lib_main_view}>
        <Text>Hello, World! {"\n"}</Text>
        <Text style={{fontSize:18}}>currentPath: {currentPath}</Text>
        <Link 
          href={{
            pathname: '../[bib_item]',
            params: { id: 'Hello, Joe Ma!' },
          }}
        >
          TEST
        </Link>
    
    </View>
  );
}

const styles = StyleSheet.create({
    test_page_lib_main_view: {
        width: 500,
        height: 500,
    }
})