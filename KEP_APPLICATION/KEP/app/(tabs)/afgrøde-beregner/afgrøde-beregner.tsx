import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from 'react';
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";
import { useFont } from "@/components/fontContext";

export default function afgrøde_beregner() {
    const { theme } = useTheme();
    const { dyslexiaMode } = useFont();
    const currentTheme = theme === 'normal' ? colorBlindTheme : normalTheme;
    
    interface Entry {
        antalBrød: string;
        arealMark: string;
        antalFrø: string;
        mel: string;
        korn: string;
    }

    const [showResults, setShowResults] = useState(false);
    const [entries, setEntries] = useState<Entry[]>([{
        antalBrød: '',
        arealMark: '',
        antalFrø: '',
        mel: '',
        korn: '',
    }]);
    
    const handleInputChange = (index: number, key: keyof Entry, value: string) => {
        setEntries((prevEntries: Entry[]) => prevEntries.map((entry, i) =>
            i === index ? { ...entry, [key]: value } : entry
        ));
    }

    const handleCalculate = (index: number) => {
        const currentEntry = entries[index];

        const froe_pr_m2 = 300; 
        const korn_pr_m2 = 0.5; 
        const mel_udbytte = 0.75;
        
        const onsket_mel = parseFloat(currentEntry.mel);
        const nodvendigt_korn = onsket_mel / mel_udbytte;
        const nodvendigt_areal = nodvendigt_korn / korn_pr_m2;
        
        handleInputChange(index, 'arealMark', nodvendigt_areal.toFixed(2));
        const antal_froe = (nodvendigt_areal * froe_pr_m2) / 40;
        handleInputChange(index, 'antalFrø', antal_froe.toFixed(1));
        setShowResults(true);
    }

    const generateGridLines = (size: number) => {
        const lines = [];
        const actualFieldSize = Math.sqrt(parseFloat(entries[0].arealMark || '0'));
        const numberOfLines = Math.max(5, Math.min(Math.floor(actualFieldSize), 30));
        
        for (let i = 1; i < numberOfLines; i++) {
            const percentage = (i / numberOfLines) * 100;
            lines.push(
                <View key={`h-${i}`} style={{
                    position: 'absolute',
                    width: '100%',
                    height: 1,
                    backgroundColor: currentTheme.fontColor,
                    top: `${percentage}%`,
                    opacity: 0.5,
                }} />
            );
            lines.push(
                <View key={`v-${i}`} style={{
                    position: 'absolute',
                    height: '100%',
                    width: 1,
                    backgroundColor: currentTheme.fontColor,
                    left: `${percentage}%`,
                    opacity: 0.5,
                }} />
            );
        }
        return lines;
    };

  return (
    <View style={styles.outerContainer}>
        <View style={[styles.leftContainer, {backgroundColor: currentTheme.headerColor}]}>
            <Text style={{color: currentTheme.fontColor, fontSize: 20, fontWeight: 600, fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>Afgrødeberegner</Text>
            <Text style={{color: currentTheme.fontColor, marginTop: 10, fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>Hvor meget mel ønsker du at få som udbytte? (kg)</Text>
            <TextInput 
                style={[styles.input, {
                    borderColor: currentTheme.fontColor,
                    color: currentTheme.fontColor,
                    fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'
                }]}
                onChangeText={(text) => handleInputChange(0, 'mel', text)}
                value={entries[0].mel}
                placeholder="Indtast mel i kg"
                keyboardType="numeric"
                placeholderTextColor={currentTheme.fontColor}
            />
            <Pressable 
                style={({pressed}) => [{
                    backgroundColor: currentTheme.fontColor,
                    padding: 10,
                    borderRadius: 5,
                    marginTop: 10,
                }, pressed && {opacity: 0.8}]}
                onPress={() => handleCalculate(0)}
            >
                <Text style={{color: currentTheme.headerColor, textAlign: 'center', fontSize: 16, fontWeight: 600, fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>Beregn</Text>
            </Pressable>

            <Text style={{color: currentTheme.fontColor, fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System', marginTop: 20}}>Areal af din mark</Text>
            <View style={[styles.input, {borderColor: currentTheme.fontColor}]}> 
                <Text style={{color: currentTheme.fontColor, fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>{entries[0].arealMark} m²</Text>
            </View>
            <Text style={{color: currentTheme.fontColor, fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>Gram frø du skal bruge</Text>
            <View style={[styles.input, {borderColor: currentTheme.fontColor}]}> 
                <Text style={{color: currentTheme.fontColor, fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>{entries[0].antalFrø} g</Text>
            </View>
        </View>
        <View style={styles.rightContainer}>
        {parseFloat(entries[0].arealMark || '0') > 0 && (
        <>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 8,
                borderTopColor: currentTheme.fontColor,
                borderLeftColor: currentTheme.fontColor,
                borderRightColor: currentTheme.fontColor,
                borderBottomColor: currentTheme.blackRed,
                width: Math.min(300, Math.sqrt(parseFloat(entries[0].arealMark || '0') * 1000)), 
                height: Math.min(300, Math.sqrt(parseFloat(entries[0].arealMark || '0') * 1000)), 
                position: 'relative',
            }}>
                <Text style={{color: currentTheme.fontColor, fontSize: 16, fontWeight: 600, textAlign: 'center', fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>Din mark</Text>
                {generateGridLines(Math.min(300, Math.sqrt(parseFloat(entries[0].arealMark || '0') * 1000)))}
            </View>
            <Text style={{color: currentTheme.fontColor, fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>{Math.sqrt(parseFloat(entries[0].arealMark || '0')).toFixed(2)} m</Text>
        </>
        )}
        </View>
    </View>
  );
}   

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    leftContainer: {
        padding: 20,
        flex: 1,
        maxWidth: 400,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 400,
    },
    outerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 20,
        width: '100%',
    },
});