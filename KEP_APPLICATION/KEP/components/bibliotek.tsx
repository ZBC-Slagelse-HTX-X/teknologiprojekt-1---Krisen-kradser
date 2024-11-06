  import React from "react";
  import { Text, View, StyleSheet, SectionList, StatusBar } from "react-native";
  import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
  import { Href, Link } from "expo-router";
  import { Ionicons } from "@expo/vector-icons";


  const DATA = [
    {
      title: "Overlevelse kap 1",
      data: [
        {
          name: "Shelter 01",
          sub_name_display:"Shelter Tarp MTS!",  
          sub_name_01:"Shelter Del 1",
          sub_name_02:"",
          sub_name_03:"Shelter Del 2",
          sub_name_04:"Shelter Del 3",
          id:"primitiv_shelter",
          sub_id:"primitiv_shelter_sub",
          heading_01: "Primitiv Shelter 1",
          heading_02: "",
          heading_03: "Primitiv Shelter 2",
          heading_04: "Primitiv Shelter 3",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.",
          text_02: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          text_03: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          text_04: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
        },

        {
          name: "Shelter 02", 
          sub_name_display:"Shelter Blad Grøn!", 
          id:"primitiv_shelter_easy",
          sub_id:"primitiv_shelter_easy_sub",
          heading_01: "Nemme primitive sheltere!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          name: "Shelter 03", 
          sub_name_display:"Shelter Tarp Blå!", 
          id:"primitiv_shelter_hard", 
          sub_id:"primitiv_shelter_sub",
          heading_01: "Shelter Sne!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
    {
      title: "Overlevelse kap 2",
      data: [
                {
          name: "Shelter 01", 
          sub_name_display:"Shelter Tarp MTS!", 
          id:"primativ_shelter", 
          sub_id:"primative_shelter_sub",
          heading_01: "Primativ shelter!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
                {
          name: "Shelter 01", 
          sub_name_display:"Shelter Tarp MTS!", 
          id:"primativ_shelter", 
          sub_id:"primative_shelter_sub",
          heading_01: "Primativ shelter!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
                {
          name: "Shelter 01", 
          sub_name_display:"Shelter Tarp MTS!", 
          id:"primativ_shelter", 
          sub_id:"primative_shelter_sub",
          heading_01: "Primativ shelter!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
                {
          name: "Shelter 01", 
          sub_name_display:"Shelter Tarp MTS!", 
          id:"primativ_shelter", 
          sub_id:"primative_shelter_sub",
          heading_01: "Primativ shelter!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
                {
          name: "Shelter 01", 
          sub_name_display:"Shelter Tarp MTS!", 
          id:"primativ_shelter", 
          sub_id:"primative_shelter_sub",
          heading_01: "Primativ shelter!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
                {
          name: "Shelter 01", 
          sub_name_display:"Shelter Tarp MTS!", 
          id:"primativ_shelter", 
          sub_id:"primative_shelter_sub",
          heading_01: "Primativ shelter!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
    {
      title: "Overlevelse kap 3",
      data: [
                {
          name:"Shelter 01", 
          sub_name_display:"Shelter Tarp MTS!", 
          id:"primativ_shelter", 
          sub_id:"primative_shelter_sub",
          heading_01: "Primativ shelter!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
                {
          name: "Shelter 01", 
          sub_name_display:"Shelter Tarp MTS!", 
          id:"primativ_shelter", 
          sub_id:"primative_shelter_sub",
          heading_01: "Primativ shelter!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
                {
          name: "Shelter 01", 
          sub_name_display:"Shelter Tarp MTS!", 
          id:"primativ_shelter", 
          sub_id:"primative_shelter_sub",
          heading_01: "Primativ shelter!",
          text_01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
  ];


  export default function Bibliotek() {
    console.log("Bibliotek component is rendering"); // Check if component is loading

      return (
            <View style={styles.container}>
              <SectionList 
                style={styles.SectionList}
                sections={DATA}
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
                          }
                        }} 
                        style={styles.linkStyle}
                      >
                        <View style={styles.StarIconContainer}>
                          <Ionicons name={"star-outline"} style={styles.StarIcon}/> 
                          <Text style={styles.SectionHeaderText}>
                            {item.name}
                          </Text>
                        </View>
                      </Link>
                      
                      <View>
                        <Link href={{
                            pathname: '../../bibliotek/[bib_item]',
                            params: { 
                              id: item.sub_id,
                              heading_01:item.heading_01,
                              text_01:item.text_01,
                              sub_name_01:item.sub_name_01,
                            }
                          }} 
                          style={styles.SubLinkStyle}>
                          {item.sub_name_display}
                        </Link>
                      </View>
                    </View>
                  </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                  <Text style={styles.ListHeader}>{title}</Text>
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
        color: "#DDA15E",
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
        justifyContent: 'center',
        width: '100%',
        marginHorizontal: 10,
      },
      SectionHeaderText: {
        color:"#DDA15E", 
        marginLeft:8,
        fontSize:18,
      },
      })