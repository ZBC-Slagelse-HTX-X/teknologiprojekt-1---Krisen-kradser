import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions,ScrollView, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';


const App: React.FC = () => {
  // Define types for state
  interface State {
    alder: string;
    hoejde: string;
    navn: string;
    vaegt: string;
    koen: string;
    fysisk_form: string,
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
    fysisk_form: '',
    aktivitetsniveau: '',
    restriktioner: '',
    energibehov: null,
  });

  // Function to update state for any input
  const handleInputChange = (key: keyof State, value: string) => {
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleCalculate = () => {
    if (state.alder && state.hoejde && state.vaegt && state.koen && state.fysisk_form && state.aktivitetsniveau && state.restriktioner) {
      let ageGroup = "Anden aldersgruppe";  // Default to another age group
      let ageGroupDict = [ 
        [17, 24, 50, 70],  
        [11.8, 11.3, 10.3, 10.1]
      ]
      if (state.koen.toLowerCase() == "mand") {
        const bmr = (10 * parseFloat(state.vaegt)) + (6.25 * parseFloat(state.hoejde)) - (5 * parseFloat(state.alder)) + 5
        setState(prevState => ({
          ...prevState,
          energibehov: `Din BMR: ${bmr}`  
        }));
      }

      setShowResults(true); // Show results after calculation
    } else {
      setState(prevState => ({
        ...prevState,
        energibehov: "Noget gik galt med at beregne dit energibehov... Prøv igen"
      }));
      setShowResults(true); // Still show results to inform the user
    }
  };

  return (
  <>
    <View style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerLabel}>Navn<Text style={{color: "red"}}>*</Text></Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('navn', text)}
            value={state.navn}
            placeholder="Navn på første person"
            placeholderTextColor="gray"
            />
          <Text style={styles.inputContainerLabel}>Alder<Text style={{color: "red"}}>*</Text></Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('alder', text)}
            value={state.alder}
            placeholder="Angiv kun antal hele år"
            placeholderTextColor="gray"
            />
          <Text style={styles.inputContainerLabel}>Højde<Text style={{color: "red"}}>*</Text></Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('hoejde', text)}
            value={state.hoejde}
            placeholder="Angiv i cm"
            placeholderTextColor="gray"
            />
          <Text style={styles.inputContainerLabel}>Vægt<Text style={{color: "red"}}>*</Text></Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('vaegt', text)}
            value={state.vaegt}
            placeholder="Angiv i kg"
            placeholderTextColor="gray"
            />
          <Text style={styles.inputContainerLabel}>Køn<Text style={{color: "red"}}>*</Text></Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('koen', text)}
            value={state.koen}
            placeholder="mand / kvinde"
            placeholderTextColor="gray"
            />
          <Text style={styles.inputContainerLabel}>Fysisk form<Text style={{color: "red"}}>*</Text></Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('fysisk_form', text)}
            value={state.fysisk_form}
            placeholder="0 - 5"
            placeholderTextColor="gray"
            />
          <Text style={styles.inputContainerLabel}>Aktivitetsniveau<Text style={{color: "red"}}>*</Text></Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('aktivitetsniveau', text)}
            value={state.aktivitetsniveau}
            placeholder="0 - 5"
            placeholderTextColor="gray"
            />
          <Text style={styles.inputContainerLabel}>Kostrestriktioner<Text style={{color: "red"}}>*</Text></Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('restriktioner', text)}
            value={state.restriktioner}
            placeholder="0 - 5"
            placeholderTextColor="gray"
            />
          <Pressable style={styles.buttonStyle} onPress={handleCalculate} >
            <Text style={{color: "#fff", fontWeight: 800}}>Calculate</Text>
          </Pressable>
        </View>
      </ScrollView>
      
      <View style={styles.innerContainer}>
      {showResults && (
        <View style={styles.resultContainer}>
          <Pressable style={styles.closeWindowStyle} onPress={hideResults}> 
            <AntDesign name="close" size={18} color="black" />
          </Pressable>
          <View>
            <Text style={{fontSize: 18}}>Person 1</Text>
            {state.navn && <Text>Navn: {state.navn}</Text>}
            {state.alder && <Text>Alder: {state.alder}</Text>}
            {state.energibehov && <Text>energibehov: {state.energibehov}</Text>}
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
    // padding: 20,
    width: Dimensions.get("window").width,
  },
  innerContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#DCDCDC",
    borderWidth: 1,
    // width: 250,
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
    // position: 'absolute', // Use absolute positioning
    // top: '50%', // Centers vertically
    // left: '50%', // Centers horizontally
    // transform: [{ translateX: -Dimensions.get('window').width * 0.25 / 2 }, { translateY: -Dimensions.get('window').height * 0.25 / 2 }], // Adjust for half of the container size to center it perfectly
    zIndex: 10, // Ensure it's on top
    padding: 15,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    width: 400,
    // height:  (Dimensions.get("window").height) * 0.25,
    // width:  (Dimensions.get("window").width) * 0.25,
  },
  buttonStyle: {
    backgroundColor: '#0000FF',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  closeWindowStyle: {
    alignItems: 'flex-end'
  },
});

export default App;