import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import {useLocalSearchParams, usePathname} from 'expo-router';
import { useFont } from "@/components/fontContext";

export default function BibItemScreen() {
    const { 
        id, 
        heading_01, heading_02, heading_03, heading_04, 
        text_01, text_02, text_03, text_04, 
        sub_name_01, sub_name_02, sub_name_03, sub_name_04,

    } = useLocalSearchParams();
    
    const currentPath = usePathname()
    const { dyslexiaMode } = useFont();
    
    return (
    <View style={styles.container}>
        <ScrollView style={styles.containerChild}>
            <View style={styles.headingContainer}>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.heading]}>{ heading_01 }</Text>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.subHeading]}>{ sub_name_01 }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>{text_01}</Text>
            </View>
        </ScrollView>

        <ScrollView style={styles.containerChild}>
            <View style={styles.headingContainer}>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.heading]}>{ heading_02 }</Text>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.subHeading]}>{ sub_name_02 }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>{text_02}</Text>
            </View>
        </ScrollView>
        
        {/* <View style={styles.containerChild}>
            <Image 
                style={{width:"100%", height:"100%"}}
                source={require('@/assets/images/icon.png')}
            />
        </View>
         */}
        <ScrollView style={styles.containerChild}>
            <View style={styles.headingContainer}>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.heading]}>{ heading_03 }</Text>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.subHeading]}>{ sub_name_03 }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>{text_03}</Text>
            </View>
        </ScrollView>
        
        <ScrollView style={styles.containerChild}>
            <View style={styles.headingContainer}>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.heading]}>{ heading_04 }</Text>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.subHeading]}>{ sub_name_04 }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>{text_04}</Text>
            </View>
        </ScrollView>
        
        {/* <View style={styles.containerChild}>
            <Image 
                style={{width:"100%", height:"100%"}}
                source={require('@/assets/images/icon.png')}
            />
        </View> */}
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexWrap:"wrap",
        flexDirection: "column",
        margin:10,
        marginLeft:0,
        width:"50%",
        height:100,
        justifyContent:"center",
    },
    containerChild: {
        // width: "33%",
        // backgroundColor: "#fff",
        margin:10,
        height:"45%",
    },
    headingContainer: {
        margin:10,
    },
    heading: {
        fontSize: 25,
    },
    subHeading: {
        fontSize: 16,
        color: "grey",
    },
    textContainer: {
        margin: 10,
    },
})
