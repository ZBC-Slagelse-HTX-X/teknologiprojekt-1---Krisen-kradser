import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";
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

  const frontImage = theme === 'normal' 
  ? require("@/assets/images/KEP_BnW.png")
  : require("@/assets/images/icon.png");

  return (
    <SafeAreaProvider style={[
      { backgroundColor: currentTheme.newBibBackground },
      { flex:1 }
    ]}>
      <SafeAreaView style={{ flex:1, flexDirection: "row" }}>
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <View style={{width:500, height:300}}>
          <Image
            style={{flex: 1, width: '100%', backgroundColor: '#0553'}}
            transition={1000}
            contentFit="cover"
            source={frontImage}
            placeholder={{ blurhash }}
          />
        </View>
        <View style={{marginTop: 20}}>  
          <Text style={[
            {fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}, 
            styles.text,
            { color: currentTheme.fontColor },
            { fontWeight: 600 }
          ]}>
              KEP står for Krisemanual og ernæringsberegningsprogram. Formålet er at levere information gennem et stort bilbiotek om hvad man skal gøre før og under en krise, og gode evner at tillære sig, samtidig med at levere kostråd.
          </Text>
        </View>
      </View>
      <ScrollView style={[styles.container, {backgroundColor: currentTheme.headerColor}]}>
          <Text style={{fontSize:25, fontWeight: 600, color: currentTheme.grejViAnbefaler}}>Grej Vi Anbefaler</Text>
          
          {/* ITEM */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Batteriradio"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["1"]}
                  onValueChange={() => toggleCheckbox("1")}
                  color={!!checkedItems["1"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Bålgryde"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["2"]}
                  onValueChange={() => toggleCheckbox("2")}
                  color={!!checkedItems["2"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Dolk"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Drybag"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Elastiksnor"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Førstehjælpsgrej"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Gas"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>    

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Jetboil"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Knebelpres"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Kædesav"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Liggeunderlag"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>    

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Lighter"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Lommelygte"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Pløkker"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Reb"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>    

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Regntøj"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Sovepose"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Stropper"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Støvler"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>    

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Tarp"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Ur"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Vanddunk"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>

          {/* Item */}
          <View style={styles.SectionListItem}>
            <Text 
              style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.linkStyle,
                { color: currentTheme.tabBarInactiveTintColor }
              ]}
            >
            <View style={styles.iconOuterContainer}>
              <View style={styles.iconContainer}>
                <Text style={[styles.iconContainerText, { color: currentTheme.grejIconColor }]}>A</Text>
              </View>
              <Text style={[
                { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' },
                styles.SectionHeaderText,
                {color: currentTheme.grejViAnbefaler}
              ]}>
                {/* ITEM TEXT */}
                {"Økse"}
              </Text>
              <Checkbox
                  style={styles.checkBox}
                  value={!!checkedItems["3"]}
                  onValueChange={() => toggleCheckbox("3")}
                  color={!!checkedItems["3"] ? '#4630EB' : undefined}
              />
            </View>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  SectionList: {
    width: "100%",
    margin: 10,
    maxHeight: 600,
    // backgroundColor: "white",
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