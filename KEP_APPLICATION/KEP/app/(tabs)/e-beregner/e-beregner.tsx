import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView, Pressable, Platform, Modal } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";

const App: React.FC = () => {
  interface Entry {
    alder: string;
    hoejde: string;
    navn: string;
    vaegt: string;
    koen: string;
    aktivitetsniveau: string;
    restriktioner: string;
    energibehov: string | null;
  }

  const [showResults, setShowResults] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([{
    alder: '',
    hoejde: '',
    navn: '',
    vaegt: '',
    koen: 'Mand',
    aktivitetsniveau: '1.2',
    restriktioner: '',
    energibehov: null,
  }]);

  const handleInputChange = (index: number, key: keyof Entry, value: string) => {
    setEntries(prevEntries => prevEntries.map((entry, i) =>
      i === index ? { ...entry, [key]: value } : entry
    ));
  };

  const handleCalculate = (index: number) => {
    const currentEntry = entries[index];
    if (currentEntry.alder && currentEntry.hoejde && currentEntry.vaegt && currentEntry.koen && currentEntry.aktivitetsniveau) {
      let bmr = 0;
      if (currentEntry.koen.toLowerCase() === "mand") {
        // Harris-Benedict equation Men
        bmr = (10 * parseFloat(currentEntry.vaegt)) + (6.25 * parseFloat(currentEntry.hoejde)) - (5 * parseFloat(currentEntry.alder)) + 5;
      } else if (currentEntry.koen.toLowerCase() === "kvinde") {
        // Harris-Benedict equation women
        bmr = (10 * parseFloat(currentEntry.vaegt)) + (6.25 * parseFloat(currentEntry.hoejde)) - (5 * parseFloat(currentEntry.alder)) - 161;
      }
      const maintenanceCalories = Math.ceil((bmr * parseFloat(currentEntry.aktivitetsniveau)));
      const g_oksekoed = maintenanceCalories / 2.5;
      handleInputChange(index, 'energibehov', `Forsøg at indtage ${maintenanceCalories} kalorier om dagen (Svare til ${g_oksekoed} g oksekød)`);
    } else {
      handleInputChange(index, 'energibehov', "Noget gik galt med at beregne dit energibehov... Prøv igen");
    }
    setShowResults(true);
  };

  const hideResults = (index: number) => {
    setEntries(prevEntries => prevEntries.map((entry, i) =>
      i === index ? { ...entry, energibehov: null } : entry
    ));
    setShowResults(false);
  };

  const addNewEntry = () => {
    setEntries(prevEntries => [...prevEntries, {
      alder: '',
      hoejde: '',
      navn: '',
      vaegt: '',
      koen: '',
      aktivitetsniveau: '',
      restriktioner: '',
      energibehov: null,
    }]);
  };

  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [activityModalVisible, setActivityModalVisible] = useState(false);
  const { dyslexiaMode } = useFont();
  const { theme } = useTheme();
  const currentTheme = theme === 'normal' ? normalTheme : colorBlindTheme;
  const [def_aktivitetsniveau, setDef_aktivitetsniveau] = useState(false);

  return (
    <>
      {/* Definitions container */}
      {def_aktivitetsniveau && (
        <View style={[styles.defContainer]}>
          <View style={{ alignItems: 'flex-end' }}>
            <Pressable onPress={() => { setDef_aktivitetsniveau(false); }}>
              <AntDesign name="close" size={20} style={{ zIndex: 20 }} color="black" />
            </Pressable>
          </View>
          <View>
            <Text style={[{ fontSize: 20, width: 360, top: -18 }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Betydning af aktivitetsniveauer</Text>
            <Text style={[{ margin: 2 }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Lidt aktiv: Typiske daglige aktiviteter + let motion eller sport 1-3 dage om ugen.</Text>
            <Text style={[{ margin: 2 }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Moderat aktiv: Daglige aktiviteter + moderat motion eller sport 3-5 dage om ugen.</Text>
            <Text style={[{ margin: 2 }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Aktiv: Daglige aktiviteter + hård motion eller sport 6-7 dage om ugen.</Text>
            <Text style={[{ margin: 2 }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Meget aktiv: Daglige aktiviteter + meget hård motion eller sport og et fysisk krævende job.</Text>
          </View>
        </View>
      )}

      <View style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          {entries.map((entry, index) => (
            <View key={index} style={styles.inputContainer}>
              {/* Name Selector */}
              <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Navn<Text style={{ color: currentTheme.redBlack }}>*</Text></Text>
              <TextInput
                style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                onChangeText={(text) => handleInputChange(index, 'navn', text)}
                value={entry.navn}
                placeholder="Navn"
                placeholderTextColor="gray"
              />
              {/* Age Selector */}
              <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Alder<Text style={{ color: currentTheme.redBlack }}>*</Text></Text>
              <TextInput
                style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange(index, 'alder', text)}
                value={entry.alder}
                placeholder="Angiv kun antal hele år"
                placeholderTextColor="gray"
              />
              {/* Height Selector */}
              <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Højde<Text style={{ color: currentTheme.redBlack }}>*</Text></Text>
              <TextInput
                style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange(index, 'hoejde', text)}
                value={entry.hoejde}
                placeholder="Angiv i cm"
                placeholderTextColor="gray"
              />
              {/* Weight Selector */}
              <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Vægt<Text style={{ color: currentTheme.redBlack }}>*</Text></Text>
              <TextInput
                style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange(index, 'vaegt', text)}
                value={entry.vaegt}
                placeholder="Angiv i kg"
                placeholderTextColor="gray"
              />
              {/* Gender Selector */}
              <View style={{ flexDirection: "row" }}>
                <Text style={[
                  styles.inputContainerLabel,
                  { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }
                ]}
                >
                  Køn
                  <Text style={{ color: currentTheme.redBlack }}>*</Text>
                </Text>
              </View>

              {Platform.OS === 'ios' ?
                (
                  <View style={styles.pickerContainer}>
                    <Pressable onPress={() => setGenderModalVisible(true)}>
                      <Text style={{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }}>{entry.koen || "Vælg køn"}</Text>
                    </Pressable>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={genderModalVisible}
                      onRequestClose={() => setGenderModalVisible(false)}
                    >
                      <View style={[styles.modalView, { zIndex: 100 }]}>
                        <Picker
                          selectedValue={entry.koen}
                          onValueChange={(itemValue) => {
                            handleInputChange(index, 'koen', itemValue);
                            setGenderModalVisible(false);
                          }}
                          style={[styles.pickerModal, { backgroundColor: '' }]}
                          itemStyle={[{ color: 'black' }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                        >
                          <Picker.Item label="Kvinde" value="Kvinde" />
                          <Picker.Item label="Mand" value="Mand" style={{ color: "#000" }} />
                        </Picker>
                      </View>
                    </Modal>
                  </View>
                ) :
                (
                  <Picker
                    selectedValue={entry.koen}
                    style={styles.input}
                    onValueChange={(itemValue) => handleInputChange(index, 'koen', itemValue)}
                    itemStyle={[{ color: 'black' }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                  >
                    <Picker.Item label="Mand" value="Mand" />
                    <Picker.Item label="Kvinde" value="Kvinde" />
                  </Picker>
                )
              }
              {/* Activity Selector + Definitions button */}
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Aktivitetsniveau<Text style={{ color: currentTheme.redBlack }}>*</Text></Text>
                <Pressable style={[styles.defiBtn, { backgroundColor: currentTheme.calculatorButton }]} onPress={() => setDef_aktivitetsniveau(true)}>
                  <Text style={[{ color: "#fff", fontWeight: 800 }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Læs definitioner</Text>
                </Pressable>
              </View>

              {Platform.OS === 'ios' ?
                (
                  <View style={styles.pickerContainer}>
                    <Pressable onPress={() => setActivityModalVisible(true)}>
                      <Text style={{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }}>{entry.aktivitetsniveau || "Vælg aktivitetsniveau"}</Text>
                    </Pressable>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={activityModalVisible}
                      onRequestClose={() => setActivityModalVisible(false)}
                    >
                      <View style={[styles.modalView, { zIndex: 100 }]}>
                        <Picker
                          selectedValue={entry.aktivitetsniveau}
                          onValueChange={(itemValue) => {
                            handleInputChange(index, 'aktivitetsniveau', itemValue);
                            setActivityModalVisible(false);
                          }}
                          style={[styles.pickerModal, { backgroundColor: '' }]}
                          itemStyle={[{ color: 'black' }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                        >
                          <Picker.Item label="Lidt aktiv" value="1.2" />
                          <Picker.Item label="Moderat aktiv" value="1.55" />
                          <Picker.Item label="Aktiv" value="1.725" />
                          <Picker.Item label="Meget Aktiv" value="1.9" />
                        </Picker>
                      </View>
                    </Modal>
                  </View>
                ) :
                (
                  <Picker
                    selectedValue={entry.aktivitetsniveau}
                    style={styles.input}
                    onValueChange={(itemValue) => handleInputChange(index, 'aktivitetsniveau', itemValue)}
                    itemStyle={[{ color: 'black' }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                  >
                    <Picker.Item label="Lidt aktiv" value="1.2" />
                    <Picker.Item label="Moderat aktiv" value="1.55" />
                    <Picker.Item label="Aktiv" value="1.725" />
                    <Picker.Item label="Meget Aktiv" value="1.9" />
                  </Picker>
                )
              }
              {/* Restrictions Selector */}
              <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Kostrestriktioner</Text>
              <TextInput
                keyboardType="numeric"
                style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                onChangeText={(text) => handleInputChange(index, 'restriktioner', text)}
                value={entry.restriktioner}
                placeholder="0 - 5"
                placeholderTextColor="gray"
              />

              {/* Calculate Button */}
              <Pressable style={[styles.buttonStyle, { backgroundColor: currentTheme.calculatorButton }]} onPress={() => handleCalculate(index)}>
                <Text style={[{ color: "#fff", fontWeight: 800 }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Calculate</Text>
              </Pressable>
            </View>
          ))}

          {/* Add New Person Button */}
          <Pressable style={[styles.buttonStyle, { backgroundColor: currentTheme.calculatorButton }]} onPress={addNewEntry}>
            <Text style={[{ color: "#fff", fontWeight: 800 }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Tilføj en person</Text>
          </Pressable>

        </ScrollView>

        {/* Results Section */}
          {showResults &&
          <View style={[styles.innerContainer]}>
            {entries.map((entry, index) => (
              entry.energibehov &&
              <View key={index} style={styles.resultContainer}>
                <Pressable style={[styles.closeWindowStyle]} onPress={() => hideResults(index)}>
                  <AntDesign name="close" size={18} color="black" />
                </Pressable>
                <Text style={[{ fontSize: 18 }, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>{entry.navn}</Text>
                {entry.alder && <Text style={{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }}>Alder: {entry.alder}</Text>}
                {entry.energibehov && <Text style={{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }}>{entry.energibehov}</Text>}
              </View>
            ))}
          </View>
          }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",
    width: Dimensions.get("window").width,
  },
  innerContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#DCDCDC",
    borderWidth: 1,
    height: (Dimensions.get("window").height) * 0.8,
    margin: 5,
    padding: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputContainerLabel: {
    margin: 5,
    fontSize: 17,
  },
  input: {
    height: 40,
    borderColor: '#DCDCDC',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  resultContainer: {
    zIndex: 10,
    padding: 15,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    width: 400,
    marginVertical: 10
  },
  buttonStyle: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  closeWindowStyle: {
    alignItems: 'flex-end'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  pickerContainer: {
    borderColor: '#DCDCDC',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    height: 40,
    justifyContent: 'center',
  },
  pickerModal: {
    height: 200,
    width: '100%',
    backgroundColor: 'transparent',
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'transparent',
  },
  pickerNative: {
    height: 40,
    backgroundColor: 'transparent',
  },
  defiBtn: {
    borderRadius: 5,
    paddingHorizontal: 2,
    height: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  defContainer: {
    position: 'absolute',
    top: '50%',
    left: '35%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.25 / 2 }, { translateY: -Dimensions.get('window').height * 0.25 / 2 }],
    zIndex: 10,
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
  },
});

export default App;