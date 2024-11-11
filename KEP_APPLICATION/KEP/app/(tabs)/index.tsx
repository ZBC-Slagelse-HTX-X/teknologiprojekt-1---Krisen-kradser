import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, SectionList, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Link } from "expo-router";
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";
import DATA from '@/data/grej_data.json';
import { MaterialCommunityIcons } from "@expo/vector-icons";


type CheckBoxProps = {
  isChecked: boolean;
  onPress: () => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, onPress }) => {
  const iconName = isChecked ? "checkbox-marked" : "checkbox-blank-outline";
  return (
    <Pressable onPress={onPress} style={styles.checkBox}>
      <MaterialCommunityIcons name={iconName} size={24} color="#000" />
    </Pressable>
  );
};



export default function Index() {
  const { dyslexiaMode } = useFont();
  const { theme } = useTheme();
  const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;
  
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheckbox = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };


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
      </View>

        <View style={styles.container}>
          <Text style={{fontSize:25, fontWeight: 600}}>Grej Vi Anbefaler</Text>
          <SectionList
            style={styles.SectionList}
            sections={DATA.DATA}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => (
              <View style={styles.SectionListItem}>
                <View>
                  <Text 
                    style={[
                      { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                      styles.linkStyle,
                      { color: currentTheme.bibLinkStyle }
                    ]}
                  >
                    <View style={styles.iconOuterContainer}>
                      <View style={styles.iconContainer}>
                        <Text style={[
                          styles.iconContainerText,
                          { color: currentTheme.grejIconColor}
                          ]}>A</Text>
                      </View>
                      <Text style={[
                        { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                        styles.SectionHeaderText,
                        { color: currentTheme.grejLinkStyle }
                      ]}>
                        {item.name}
                        <CheckBox
                          isChecked={!!checkedItems[item.id]}
                          onPress={() => toggleCheckbox(item.id)}
                        />
                      </Text>
                    </View>
                  </Text>
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
  },
  checkBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
  },
  
})