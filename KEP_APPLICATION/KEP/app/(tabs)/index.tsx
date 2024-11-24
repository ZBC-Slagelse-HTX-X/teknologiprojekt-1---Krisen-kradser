import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";
import DATA from '@/data/grej_data.json';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';
import { Image } from 'expo-image' 


export default function Index() {
  const { dyslexiaMode } = useFont();
  const { theme } = useTheme();
  const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;
  
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheckbox = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


  return (
    <SafeAreaProvider style={[
      { backgroundColor: currentTheme.bibBackground },
      { flex:1 }
    ]}>
      <SafeAreaView style={{ flex:1, flexDirection: "row" }}>
      <View style={{flex:1}}>
        <Text style={[
            {fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}, 
            styles.text,
            { color: currentTheme.fontColor }
            ]}>
            Krisemanual- og ernæringsberegningsprogram (KEP)
        </Text>
        <Image
          style={{width:100, height:100, position:"absolute"}}
          transition={1000}
          contentFit="cover"
          source="@/assets/images/icon.png"
          // placeholder={{ blurhash }}
        />
      </View>

        <View style={styles.container}>
          <Text style={{fontSize:25, fontWeight: 600}}>Grej Vi Anbefaler</Text>
          <FlatList
            style={styles.SectionList}
            data={DATA.DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.SectionListItem}>
              <Text 
                style={[
                  { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                  styles.linkStyle,
                  { color: currentTheme.bibLinkStyle }
                ]}
              >
                <View style={styles.iconOuterContainer}>
                  <View style={styles.iconContainer}>
                    <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
                  </View>
                  <Text style={[
                    { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                    styles.SectionHeaderText,
                    { color: currentTheme.grejLinkStyle }
                  ]}>
                    {item.name}
                  </Text>
                  <Checkbox
                      style={styles.checkBox}
                      value={!!checkedItems[item.id]}
                      onValueChange={() => toggleCheckbox(item.id)}
                      color={!!checkedItems[item.id] ? '#4630EB' : undefined}
                  />
                </View>
              </Text>
            </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.SectionListFooter} />}
            ListHeaderComponent={() => <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.ListHeader]}></Text>}
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
  },
  ListHeader: {
    fontSize: 30,
    color: "#ff0"
  },
  
  image: {
    width: '50%',
    height: '100%',
  },
  container: {
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
    flex:0,
    fontSize:18,
  },
  iconOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: 'space-between',
    alignItems:"center",
  },
  iconContainerText: {
    marginTop: 6,
    fontWeight: 800,
  },
  checkBox: {
    width: 24,
    height: 24,
    marginRight: 15,
    backgroundColor: 'transparent',
  },
  
})