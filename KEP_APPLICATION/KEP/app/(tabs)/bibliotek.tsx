import { Text, View, StyleSheet, SectionList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Href, Link } from "expo-router";


const DATA = [
 {
  title: "Primitive Shelter",
  data: [
    {name: "Sheltertype 1", url: "undefined"},
    {name: "Sheltertype 2", url: "undefined"},
    {name: "Sheltertype 3", url: "undefined"},
  ]
 },
 {
  title: "Primitive Shelter",
  data: [
    {name: "Sheltertype 1", url: "undefined"},
    {name: "Sheltertype 2", url: "undefined"},
    {name: "Sheltertype 3", url: "undefined"},
  ]
 },
 {
  title: "Primitive Shelter",
  data: [
    {name: "Sheltertype 1", url: "undefined"},
    {name: "Sheltertype 2", url: "undefined"},
    {name: "Sheltertype 3", url: "undefined"},
  ]
 },
 {
  title: "Primitive Shelter",
  data: [
    {name: "Sheltertype 1", url: "undefined"},
    {name: "Sheltertype 2", url: "undefined"},
    {name: "Sheltertype 3", url: "undefined"},
  ]
 },
 {
  title: "Primitive Shelter",
  data: [
    {name: "Sheltertype 1", url: "undefined"},
    {name: "Sheltertype 2", url: "undefined"},
    {name: "Sheltertype 3", url: "undefined"},
  ]
 },
 {
  title: "Primitive Shelter",
  data: [
    {name: "Sheltertype 1", url: "undefined"},
    {name: "Sheltertype 2", url: "undefined"},
    {name: "Sheltertype 3", url: "undefined"},
  ]
 }
]

export default function Bibliotek() {
    return (
        <SafeAreaProvider style={styles.safeArea} >
            <SafeAreaView style={styles.container}>
              <Text style={{fontSize: 35, color: "#dab557"}}>Krisebibliotek</Text>
                <SectionList 
                  sections={DATA}
                  keyExtractor={(item, index) => item.name + item.url + index}
                  renderItem={({ item }) => (
                    <Link href={item.url as Href<string>} style={styles.linkStyle}>• {item.name}</Link>
                  )}
                  renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.ListHeader}>{title}</Text>
                  )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#eeeee",
      padding: 20,
    },
    container: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    linkStyle: {
      fontSize: 18,
      padding: 10,
      margin: 2,
    },
    ListHeader: {
      fontSize: 25,
    },
    ScrollView: {
      height: 100,
    },
    })