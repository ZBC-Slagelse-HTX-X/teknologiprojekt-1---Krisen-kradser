import { Tabs, router, usePathname } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { useFont } from "@/components/fontContext";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";

export default function TabLayout() {
  const backIcon = Platform.OS === "ios" ? "chevron-back" : "arrow-back-sharp";
  const currentPath = usePathname();
  const { dyslexiaMode } = useFont();
  const { theme } = useTheme();
  const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: currentTheme.tabBarActiveTintColor, // Tab bar icon and text color
        tabBarInactiveTintColor: currentTheme.tabBarInactiveTintColor,
        headerStyle: {
          backgroundColor: currentTheme.headerColor , // Header bacground color
        },
        headerShadowVisible: false,
        headerTintColor: currentTheme.fontColor, // Header font color
        tabBarStyle: { 
          backgroundColor: currentTheme.headerColor, // Tab bar background color
        },
        headerTitleStyle: { // Header title style
          fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System',
        },
        tabBarLabelStyle: { // Tab bar bottom title style
          fontFamily: dyslexiaMode ? 'open-dyslexic' : 'System',
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hjem',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="bibliotek"
        options={{
          title: `Bibliotek`,
          headerTitle: `${currentPath}`,
          headerLeft: () => (
            <Ionicons
              style={{marginLeft:15, marginRight:-10}}
              name={backIcon}
              size={25}
              color={`${currentTheme.arrowIconColor}`}
              onPress={() => router.back()}
            />
          ),
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'book-sharp' : 'book-outline'} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="e-beregner"
        options={{
          title: 'E-beregner',
          headerLeft: () => (
            <Ionicons
              style={{marginLeft:15, marginRight:-10}}
              name={backIcon}
              size={25}
              color={`${currentTheme.arrowIconColor}`}
              onPress={() => router.back()}
            />
          ),
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'calculator-sharp' : 'calculator-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen 
        name="afgrøde-beregner"
        options={{ 
          title: 'Afgrødeberegner',
          headerLeft: () => (
            <Ionicons
              style={{marginLeft:15, marginRight:-10}}
              name={backIcon}
              size={25}
              color={`${currentTheme.arrowIconColor}`}
              onPress={() => router.back()}
            />
          ),
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons name={focused ? 'food-apple' : 'food-apple-outline'} color={color} size={24} />
          ),
        }} 
      />
      
      <Tabs.Screen 
        name="indstillinger"
        options={{ 
          title: 'Indstillinger',
          headerLeft: () => (
            <Ionicons
              style={{marginLeft:15, marginRight:-10}}
              name={backIcon}
              size={25}
              color={`${currentTheme.arrowIconColor}`}
              onPress={() => router.back()}
            />
          ),
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24} />
          ),
        }} 
      />
    </Tabs>
  );
}