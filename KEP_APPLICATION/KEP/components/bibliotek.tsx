import React from "react";
import { Text, View, StyleSheet, SectionList, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Href, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import DATA from "@/data/bibliotek_data.json"; 
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";


  export default function Bibliotek() {
    console.log("Bibliotek component is rendering"); // Check if component is loading
    const { dyslexiaMode } = useFont();
    const { theme } = useTheme();
    const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;
  
      return (
            <View style={styles.container}>
              <SectionList 
                style={styles.SectionList}
                sections={DATA.DATA}
                keyExtractor={(item, index) => item.name + item.sub_name_display + index}
                renderItem={({ item }) => (
                  <View style={styles.SectionListItem}>
                    <View>
                      <Link 
                        href={{
                          pathname: '../../bibliotek/[bib_item]',
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
                            sub_name_01:item.sub_name_01,
                            sub_name_02:item.sub_name_02,
                            sub_name_03:item.sub_name_03,
                            sub_name_04:item.sub_name_04,
                            video_path:item.video_path
                          }
                        }} 
                        style={[
                          { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                          styles.linkStyle,
                          { color: currentTheme.bibLinkStyle }
                        ]}
                      >
                        <View style={styles.StarIconContainer}>
                          <Ionicons 
                            name={"star-outline"} 
                            style={[
                              styles.StarIcon,
                              { color: currentTheme.bibLinkStyle }
                          ]}/> 
                          <Text style={[
                            { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                            styles.SectionHeaderText,
                            { color: currentTheme.bibLinkStyle }
                          ]}>
                            {item.name}
                          </Text>
                        </View>
                      </Link>
                      
                      <View>
                        <Link href={{
                            pathname: '../../bibliotek/[bib_item]',
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
                              sub_name_01:item.sub_name_01,
                              sub_name_02:item.sub_name_02,
                              sub_name_03:item.sub_name_03,
                              sub_name_04:item.sub_name_04,
                              video_path:item.video_path
                            }
                          }} 
                          style={[
                            {fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},
                            styles.SubLinkStyle,
                            { color: currentTheme.bibLinkStyle }
                          ]}>
                          {item.sub_name_display}
                        </Link>
                      </View>
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
      );
  }


  const styles = StyleSheet.create({
      SectionListFooter: {
        width: "90%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 30,
      },
      SectionList: {
        width: "100%",
        margin: 10,
      },
      SectionListItem: {
        width:"100%",
      },
      container: {
        flex: 1,
        width: "25%",
        backgroundColor:"#fff",
        alignItems: "flex-start",
        justifyContent: "center",
        maxWidth:300,
      },
      linkStyle: {
        fontSize: 18,
        margin: 2,
        marginTop:8,
        alignItems: 'center',
      },
      SubLinkStyle: {
        fontSize: 15,
        padding: 8,
        marginLeft: 20,
        color: "#DDA15E",
      },
      ListHeader: {
        fontSize: 20,
        fontWeight: "500",
        
      },
      ScrollView: {
        height: 100,
      },
      StarIcon: {
        fontSize: 20,
        color:"#DDA15E"
      },
      StarIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
      },
      SectionHeaderText: {
        marginLeft:8,
        fontSize:18,
      },
      })