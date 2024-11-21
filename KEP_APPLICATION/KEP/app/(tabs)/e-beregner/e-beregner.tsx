import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions,ScrollView, Pressable, Platform, TouchableOpacity, Modal } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";


const App: React.FC = () => {
  // Define types for state
  interface State {
    alder: string;
    hoejde: string;
    navn: string;
    vaegt: string;
    koen: string;
    aktivitetsniveau: string,
    restriktioner: string,
    energibehov: string | null;
  }
  const [showResults, setShowResults] = useState(false);
  const hideResults = () => {
    setShowResults(false);
  };

  // State for inputs and result
  const [state, setState] = useState<State>({
    alder: '',
    hoejde: '',
    navn: '',
    vaegt: '',
    koen: '',
    aktivitetsniveau: '',
    restriktioner: '',
    energibehov: null,
  });

  const handleInputChange = (key: keyof State, value: string) => {
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleCalculate = () => {
    if (state.alder && state.hoejde && state.vaegt && state.koen && state.aktivitetsniveau && state.restriktioner) {
      if (state.koen.toLowerCase() == "mand") {
        const bmr = (10 * parseFloat(state.vaegt)) + (6.25 * parseFloat(state.hoejde)) - (5 * parseFloat(state.alder)) + 5;
        const maintenanceCalories = Math.ceil((bmr * parseFloat(state.aktivitetsniveau)));
        setState(prevState => ({
          ...prevState,
          energibehov: `Forsøg at indtage ${maintenanceCalories} kalorier om dagen`,
        }));
      }
      setShowResults(true);
    } else {
      setState(prevState => ({
        ...prevState,
        energibehov: "Noget gik galt med at beregne dit energibehov... Prøv igen",
      }));
      setShowResults(true);
    }
  };
  
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [activityModalVisible, setActivityModalVisible] = useState(false);
  
  const { dyslexiaMode } = useFont();
  const { theme } = useTheme();
  const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;


  return (
  <>
    <View style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Navn<Text style={{color: currentTheme.redBlack}}>*</Text></Text>
          <TextInput
            style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
            onChangeText={(text) => handleInputChange('navn', text)}
            value={state.navn}
            placeholder="Navn på første person"
            placeholderTextColor="gray"
          />

          <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Alder<Text style={{color: currentTheme.redBlack}}>*</Text></Text>
          <TextInput
            style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('alder', text)}
            value={state.alder}
            placeholder="Angiv kun antal hele år"
            placeholderTextColor="gray"
          />

          <Text style={[styles.inputContainerLabel,  { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Højde<Text style={{color: currentTheme.redBlack}}>*</Text></Text>
          <TextInput
            style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('hoejde', text)}
            value={state.hoejde}
            placeholder="Angiv i cm"
            placeholderTextColor="gray"
          />

          <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Vægt<Text style={{color: currentTheme.redBlack}}>*</Text></Text>
          <TextInput
            style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('vaegt', text)}
            value={state.vaegt}
            placeholder="Angiv i kg"
            placeholderTextColor="gray"
          />

          <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Køn<Text style={{color: currentTheme.redBlack}}>*</Text></Text>
          {Platform.OS === 'ios' ? 
          (
            <View style={styles.pickerContainer}>
              <Pressable onPress={() => setGenderModalVisible(true)}>
                <Text style={{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }}>{state.koen || "Vælg køn"}</Text>
              </Pressable>
              <Modal
                animationType="slide"
                transparent={true}
                visible={genderModalVisible}
                onRequestClose={() => setGenderModalVisible(false)}
              >
                <View style={[styles.modalView, {zIndex: 100}]}>
                  <Picker
                    selectedValue={state.koen}
                    onValueChange={(itemValue) => {
                      handleInputChange('koen', itemValue);
                      setGenderModalVisible(false);
                    }}
                    style={[styles.pickerModal, {backgroundColor: ''}]}
                    itemStyle={[{color: 'black'}, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                  >
                    <Picker.Item label="Mand" value="Mand" style={{color:"#000"}}/>
                    <Picker.Item label="Kvinde" value="Kvinde" />
                  </Picker>
                </View>
              </Modal>
            </View>
            ): 
            (
            <Picker
              selectedValue={state.koen}
              style={styles.input}
              onValueChange={(itemValue) => handleInputChange('koen', itemValue)}
              itemStyle={[{color: 'black'}, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
            >
              <Picker.Item label="Mand" value="mand" />
              <Picker.Item label="Kvinde" value="kvinde" />
            </Picker>
            )
          }

          <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Aktivitetsniveau<Text style={{color: currentTheme.redBlack}}>*</Text></Text>
          {Platform.OS === 'ios' ? 
          (
            <View style={styles.pickerContainer}>
              <Pressable onPress={() => setActivityModalVisible(true)}>
                <Text style={{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>{state.aktivitetsniveau || "Vælg aktivitetsniveau"}</Text>
              </Pressable>
              <Modal
                animationType="slide"
                transparent={true}
                visible={activityModalVisible}
                onRequestClose={() => setActivityModalVisible(false)}
              >
                <View style={[styles.modalView, {zIndex: 100}]}>
                  <Picker
                    selectedValue={state.aktivitetsniveau}
                    onValueChange={(itemValue) => {
                      handleInputChange('aktivitetsniveau', itemValue);
                      setActivityModalVisible(false);
                    }}
                    style={[styles.pickerModal, {backgroundColor: ''}]}
                    itemStyle={[{color: 'black'}, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
                  >
                    <Picker.Item label="Lidt aktiv" value="1.2" />
                    <Picker.Item label="Moderat aktiv" value="1.55" />
                    <Picker.Item label="Aktiv" value="1.725" />
                    <Picker.Item label="Meget Aktiv" value="1.9" />
                  </Picker>
                </View>
              </Modal>
            </View>
            ): 
            (
            <Picker
              selectedValue={state.koen}
              style={styles.input}
              onValueChange={(itemValue) => handleInputChange('koen', itemValue)}
              itemStyle={[{color: 'black'}, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
            >
              <Picker.Item label="Lidt aktiv" value="1.2" />
              <Picker.Item label="Moderat aktiv" value="1.55" />
              <Picker.Item label="Aktiv" value="1.725" />
              <Picker.Item label="Meget Aktiv" value="1.9" />
            </Picker>
            )
          }
          
          
          
          
          <Text style={[styles.inputContainerLabel, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Kostrestriktioner<Text style={{color: currentTheme.redBlack}}>*</Text></Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}
            onChangeText={(text) => handleInputChange('restriktioner', text)}
            value={state.restriktioner}
            placeholder="0 - 5"
            placeholderTextColor="gray"
            />
          <Pressable style={[styles.buttonStyle, {backgroundColor: currentTheme.calculatorButton}]} onPress={handleCalculate} >
            <Text style={[{color: "#fff", fontWeight: 800}, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>Calculate</Text>
          </Pressable>
        </View>
      </ScrollView>
      
      {/* Resulatater af beregning */}
      <View style={styles.innerContainer}>
      {showResults && (
        <View style={styles.resultContainer}>
          <Pressable style={[styles.closeWindowStyle]} onPress={hideResults}> 
            <AntDesign name="close" size={18} color="black" />
          </Pressable>
          <View>
            <Text style={[{fontSize: 18}, { fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }]}>{state.navn}</Text>
            {state.alder && <Text style={{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }}>Alder: {state.alder}</Text>}
            {state.energibehov && <Text style={{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }}>{state.energibehov}</Text>}
            {state.aktivitetsniveau && <Text style={{ fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System' }}>{state.aktivitetsniveau}</Text>}
          </View>
        </View>
      )}
      </View>
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
    height:  (Dimensions.get("window").height) * 0.8,
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
});

export default App;