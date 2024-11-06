import { View, Text, StyleSheet, Image } from 'react-native';
import {useLocalSearchParams, usePathname} from 'expo-router';


export default function BibItemScreen() {
    const { 
        id, 
        heading_01, heading_02, heading_03, heading_04, 
        text_01, text_02, text_03, text_04, 
        sub_name_01, sub_name_02, sub_name_03, sub_name_04,

    } = useLocalSearchParams();
    const currentPath = usePathname()
    return (
    <View style={styles.container}>
        <View style={styles.containerChild}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{ heading_01 }</Text>
                <Text style={styles.subHeading}>{ sub_name_01 }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text>{text_01}</Text>
            </View>
        </View>

        <View style={styles.containerChild}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{ heading_02 }</Text>
                <Text style={styles.subHeading}>{ sub_name_02 }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text>{text_02}</Text>
            </View>
        </View>
        
        <View style={styles.containerChild}>
            <Image 
                style={{width:"100%", height:"100%"}}
                source={require('@/assets/images/icon.png')}
            />
        </View>
        
        <View style={styles.containerChild}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{ heading_03 }</Text>
                <Text style={styles.subHeading}>{ sub_name_03 }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text>{text_03}</Text>
            </View>
        </View>
        
        <View style={styles.containerChild}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{ heading_04 }</Text>
                <Text style={styles.subHeading}>{ sub_name_04 }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text>{text_04}</Text>
            </View>
        </View>
        
        <View style={styles.containerChild}>
            <Image 
                style={{width:"100%", height:"100%"}}
                source={require('@/assets/images/icon.png')}
            />
        </View>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexWrap:"wrap",
        flexDirection:"row",
        margin:10,
        marginLeft:0,
        width:"100%",
        height:100,
        justifyContent:"center",
    },
    containerChild: {
        width: "30%",
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