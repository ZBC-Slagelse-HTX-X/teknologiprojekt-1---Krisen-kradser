import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from 'react';


export default function afgrøde_beregner() {
    interface Entry {
        antalBrød: string;
        arealMark: string;
        antalFrø: string;
    }

    const [showResults, setShowResults] = useState(false);
    const [entries, setEntries] = useState<Entry[]>([{
        antalBrød: '',
        arealMark: '',
        antalFrø: '',
    }]);

    const handleInputChange = (index: number, key: keyof Entry, value: string) => {
        setEntries((prevEntries: Entry[]) => prevEntries.map((entry, i) =>
            i === index ? { ...entry, [key]: value } : entry
        ));
    }   

    const handleCalculate = (index: number) => {
        const currentEntry = entries[index];
        const froe_pr_m2 = 40;
        const antal_froe = parseFloat(currentEntry.arealMark) * froe_pr_m2;
        handleInputChange(index, 'antalFrø', antal_froe.toString());
        setShowResults(true);
    }
  return (
    <View>
        <Text>Afgrøde beregner</Text>
        
        <View>
            <Text>Areal af din mark (m2)</Text>
            <TextInput 
                style={styles.input}
                onChangeText={(text) => handleInputChange(0, 'arealMark', text)}
                value={entries[0].arealMark}
                placeholder="Indtast areal af din mark (m2)"
                keyboardType="numeric"
                placeholderTextColor="gray"
            />
            <Text>Du skal bruge {entries[0].antalFrø ? `${entries[0].antalFrø} gram frø i alt til din mark på ${entries[0].arealMark} m²` : '0 gram frø'}</Text>
            <Button 
                title="Beregn" 
                onPress={() => handleCalculate(0)} 
            />
        </View>
    </View>
  );
}   

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});