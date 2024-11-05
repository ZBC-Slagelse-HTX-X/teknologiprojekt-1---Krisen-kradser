import React from "react";
import { Text, View, StyleSheet, SectionList, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Href, Link } from "expo-router";

const DATA = [
  {
    title: "Overlevelse kap 1",
    data: [
      {name: "test site!", url: "test_site"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
      {name: "test site 2!", url: "ny_side"},
    ],
  },
  {
    title: "Overlevelse kap 2",
    data: [
      {name:"qwe", url:"test_page"},
      {name:"qwe", url:"test_page"},
      {name:"qwe", url:"test_page"},
      {name:"qwe", url:"test_page"},
      {name:"qwe", url:"test_page"},
      {name:"qwe", url:"test_page"},
    ],
  },
  {
    title: "Overlevelse kap 3",
    data: [{name:"qwe", url:"test_page"}],
  },
];


export default function Bibliotek() {
  console.log("Bibliotek component is rendering"); // Add this log

    return (
          <View style={styles.container}>
            {/* <Text style={{fontSize: 35, color: "#dab557"}}>Bibliotek overskrift</Text> */}

            <SectionList 
              style={styles.SectionList}
              sections={DATA}
              keyExtractor={(item, index) => item.name + item.url + index}
              renderItem={({ item }) => (
                <View style={styles.SectionListItem}>
                  <Link href={item.url as Href<string>} style={styles.linkStyle}><Text style={{color:"#000"}}>• {item.name}</Text></Link>
                </View>
              )}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.ListHeader}>{title}</Text>
              )}
            />
          </View>
    );
}


const styles = StyleSheet.create({
    SectionList: {
      width: "100%",
      margin: 10,
    },
    SectionListItem: {
      width:"100%", 
      // backgroundColor:"black",
    },
    container: {
      flex: 1,
      width: "25%",
      backgroundColor:"#fff",
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
      fontWeight: "500",
    },
    ScrollView: {
      height: 100,
    },
    })