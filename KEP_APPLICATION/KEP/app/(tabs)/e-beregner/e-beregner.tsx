import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const App: React.FC = () => {
  // Define types for state
  interface State {
    alder_1: string;
    hoejde_1: string;
    navn_1: string;
    vaegt_1: string;
    koen_1: string;
    fysisk_form_1: string,
    aktivitetsniveau_1: string,
    restriktioner_1: string,
    result: string | null;
  }
  const [showResults, setShowResults] = useState(false);
  const hideResults = () => {
    setShowResults(false);
  };

  // State for inputs and result
  const [state, setState] = useState<State>({
    alder_1: '',
    hoejde_1: '',
    navn_1: '',
    vaegt_1: '',
    koen_1: '',
    fysisk_form_1: '',
    aktivitetsniveau_1: '',
    restriktioner_1: '',
    result: null
  });

  // Function to update state for any input
  const handleInputChange = (key: keyof State, value: string) => {
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  // Function to handle calculation
  const handleCalculate = () => {
    if(state.alder_1 && state.hoejde_1 && state.vaegt_1) {
      const sum = parseFloat(state.alder_1) + parseFloat(state.hoejde_1) + parseFloat(state.vaegt_1);
      setState(prevState => ({
        ...prevState,
        result: `Sum of nums is: ${sum}`
      }));
      setShowResults(true); // Show results after calculation
    } else {
      setState(prevState => ({
        ...prevState,
        result: "Please enter valid numbers."
      }));
      setShowResults(true); // Still show results to inform the user
    }
  };

  return (
  <>
  {showResults && (
    <View style={styles.resultContainer}>
      <Button title='x' onPress={hideResults}/>
      <View>
        {state.result && <Text>{state.result}</Text>}
        <Text style={{fontSize: 18}}>Person 1</Text>
        {state.navn_1 && <Text>Navn: {state.navn_1}</Text>}
        {state.alder_1 && <Text>Alder: {state.alder_1}</Text>}
      </View>
    </View>
  )}
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerLabel}>Navn</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('navn_1', text)}
            value={state.navn_1}
            placeholder="Navn på første person"
            />
          <Text style={styles.inputContainerLabel}>Alder</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('alder_1', text)}
            value={state.alder_1}
            placeholder="Angiv kun antal hele år"
            />
          <Text style={styles.inputContainerLabel}>Højde</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('hoejde_1', text)}
            value={state.hoejde_1}
            placeholder="Angiv i cm"
            />
          <Text style={styles.inputContainerLabel}>Vægt</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('vaegt_1', text)}
            value={state.vaegt_1}
            placeholder="Angiv i kg"
            />
          <Text style={styles.inputContainerLabel}>Køn</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('koen_1', text)}
            value={state.koen_1}
            placeholder="mand / kvinde"
            />
          <Text style={styles.inputContainerLabel}>Fysisk Form</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('fysisk_form_1', text)}
            value={state.fysisk_form_1}
            placeholder="0 - 5"
            />
          <Text style={styles.inputContainerLabel}>Aktivitetsniveau</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('aktivitetsniveau_1', text)}
            value={state.aktivitetsniveau_1}
            placeholder="0 - 5"
            />
          <Text style={styles.inputContainerLabel}>Kost Restriktioner</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('restriktioner_1', text)}
            value={state.restriktioner_1}
            placeholder="0 - 5"
            />
          <Button title="Calculate" onPress={handleCalculate} />
        </View>
      </View>
      
      <View style={styles.innerContainer}>

      </View>

      <View style={styles.innerContainer}>

      </View>

      <View style={styles.innerContainer}>

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
    width: 400,
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
    position: 'absolute', // Use absolute positioning
    top: '50%', // Centers vertically
    left: '50%', // Centers horizontally
    transform: [{ translateX: -Dimensions.get('window').width * 0.25 / 2 }, { translateY: -Dimensions.get('window').height * 0.25 / 2 }], // Adjust for half of the container size to center it perfectly
    zIndex: 10, // Ensure it's on top
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    height:  (Dimensions.get("window").height) * 0.25,
    width:  (Dimensions.get("window").width) * 0.25,
  }
});

export default App;