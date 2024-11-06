import { Tabs, router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";


export default function TabLayout() {
  const backIcon = Platform.OS === "ios" ? "chevron-back" : "arrow-back-sharp";
  const currentPath = usePathname();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#dda15e', // Tab bar icon and text color
        tabBarInactiveTintColor: '#dda15e',
        headerStyle: {
          backgroundColor: '#283618', // Header bacground color
        },
        headerShadowVisible: false,
        headerTintColor: "#dda15e", // Header font color
        tabBarStyle: { 
          backgroundColor: "#606c38", // Tab bar background color
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
              color="#dda15e"
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
              color="#dda15e"
              onPress={() => router.back()}
            />
          ),
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'calculator-sharp' : 'calculator-outline'} color={color} size={24} />
          ),
        }}
      />
      
      <Tabs.Screen 
        name="test_site"
        options={{ 
          title: 'TEST PAGE',
          headerLeft: () => (
            <Ionicons
              style={{marginLeft:15, marginRight:-10}}
              name={backIcon}
              size={25}
              color="#dda15e"
              onPress={() => router.back()}
            />
          ),
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }} 
      />
    </Tabs>
  );
}