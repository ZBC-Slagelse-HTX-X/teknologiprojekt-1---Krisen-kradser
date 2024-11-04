import React from "react";
import { Text, View, StyleSheet, SectionList, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Href, Link } from "expo-router";

const DATA = [
  {
    title: "Overlevelse kap 1",
    data: [
      {name: "test site!", url: "test_site"},
      {name: "test site 2!", url: "ny_side"}
    ],
  },
  {
    title: "Overlevelse kap 2",
    data: [{name:"qwe", url:"test_page"}],
  },
  {
    title: "Overlevelse kap 3",
    data: [{name:"qwe", url:"test_page"}],
  },
];


export default function Index() {


  return (
    <SafeAreaProvider style={styles.safeArea} >
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Krisemanual- og ernæringsberegningsprogram (KEP)</Text>
        
        <SectionList 
          sections={DATA}
          keyExtractor={(item, index) => item.name + item.url + index}
          renderItem={({ item }) => (
            <View>
              <Link href={item.url as Href<string>} style={styles.linkStyle}>{item.name}</Link>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.ListHeader}>{title}</Text>
          )}
        />

        <Link href="/test_site" style={styles.button}>
          Gå til 'TEST PAGE'
        </Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  ListHeader: {
    fontSize: 30,
    color: "#ff0"
  },
  image: {
    width: '50%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#222b00",
    padding: 25,
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
    color:"#fff",
  },
  linkStyle: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color:"#fff",
  },
})