import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";
import React, { useState, useCallback, useEffect, useReducer } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { useFocusEffect } from '@react-navigation/native';

interface VideoPlayerProps {
    videoId: string;
    playing: boolean;
    onStateChange: (state: any) => void;
}

export default function BibItemScreen() {
    const { 
        id, 
        heading_01, heading_02, heading_03, heading_04, 
        text_01, text_02, text_03, text_04, 
        sub_name_01, sub_name_02, sub_name_03, sub_name_04,
        video_path
    } = useLocalSearchParams();
    
    const { dyslexiaMode } = useFont();
    const { theme } = useTheme();
    const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;
    const [playing, setPlaying] = useState(false);

    const videoId = (video_path || '').toString();
    
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        forceUpdate();
    }, [videoId]);

    useFocusEffect(
        React.useCallback(() => {
            setPlaying(false); 
        }, [])
    );

    const onStateChange = useCallback((state: string) => {
        if (state === "ended") {
            setPlaying(false);
        } else if (state === "playing") {
            setPlaying(true);
        }
    }, []);
    
    const VideoPlayer = React.memo((props: VideoPlayerProps) => {
        return (
            <YoutubePlayer
                key={props.videoId}
                height={500}
                width={350}
                play={props.playing}
                videoId={props.videoId}
                onChangeState={props.onStateChange}
            />
        );
    });
    return (
    <View style={[styles.container]}>
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

        <ScrollView style={styles.containerChild}>
            <View style={styles.headingContainer}>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.heading]}>{ heading_03 }</Text>
                <Text style={[{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'},styles.subHeading]}>{ sub_name_03 }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System'}}>{text_03}</Text>
            </View>
            {videoId != "" ?
                <View style={styles.contentContainer}>
                    <VideoPlayer videoId={videoId} playing={playing} onStateChange={onStateChange} />
               </View>
               :
               <View></View>
            }
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
        
        <View style={styles.containerChild}>
        </View>
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
    contentContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
    video: {
        width: 350,
        height: 275,
    },
    controlsContainer: {
    padding: 10,
    },
})
