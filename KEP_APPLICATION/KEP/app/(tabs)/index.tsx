import React from "react";
import { Text, View, StyleSheet, SectionList, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Href, Link } from "expo-router";
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";
import DATA from '@/data/grej_data.json';
import { Ionicons } from "@expo/vector-icons";


export default function Index() {
  const { dyslexiaMode } = useFont();
  const { theme } = useTheme();
  const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;

  return (
    <SafeAreaProvider style={[
      styles.safeArea,
      { backgroundColor: currentTheme.bibBackground }
    ]}>
      <SafeAreaView>
        <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}, styles.text]}>Krisemanual- og ernæringsberegningsprogram (KEP)</Text>
        
        <View style={styles.container}>
          <Text style={{fontSize:25, fontWeight: 600}}>Grej Vi Anbefaler</Text>
          <SectionList
            style={styles.SectionList}
            sections={DATA.DATA}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => (
              <View style={styles.SectionListItem}>
                <View>
                  <Link 
                    href={{
                      pathname: '../hjem/[bib_item]',
                      params: { 
                        id: item.id, 
                        heading_01:item.heading_01,
                        heading_02:item.heading_02,
                        heading_03:item.heading_03,
                        heading_04:item.heading_04,
                        text_01:item.text_01,
                        text_02:item.text_02,
                        text_03:item.text_03,
                        text_04:item.text_04,
                      }
                    }} 
                    style={[
                      { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                      styles.linkStyle,
                      { color: currentTheme.bibLinkStyle }
                    ]}
                  >
                    <View style={styles.iconOuterContainer}>
                      <View style={styles.iconContainer}><Text style={styles.iconContainerText}>A</Text></View>
                      <Text style={[
                        { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                        styles.SectionHeaderText,
                        { color: currentTheme.grejLinkStyle }
                      ]}>
                        {item.name}
                      </Text>
                    </View>
                  </Link>
                </View>
              </View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.ListHeader]}>{title}</Text>
            )}
            renderSectionFooter={(item) => (
            <View style={styles.SectionListFooter}></View> 
            )}
          />
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  SectionList: {
    width: "100%",
    margin: 10,
    height:"100%",
  },
  ListHeader: {
    fontSize: 30,
    color: "#ff0"
  },
  
  image: {
    width: '50%',
    height: '100%',
  },
  safeArea: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "flex-start",
    // backgroundColor: "#222b00",½
    // padding: 25,
  },
  container: {
    position: "absolute",
    right:0,
    flex: 1,
    width: "35%",
    padding:10,
    backgroundColor:"#fff",
    // alignItems: "flex-start",
    // justifyContent: "center",
    maxWidth:300,
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
  SectionListItem: {
    width:"100%",
    marginVertical: 2,
  },
  SectionListFooter: {
    width: "90%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 30,
  },
  SectionHeaderText: {
    marginLeft:8,
    fontSize:18,
  },
  iconOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%",
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems:"center",
  },
  iconContainerText: {
    fontSize: 14,
    fontWeight: 800,
  }
})