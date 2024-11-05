import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function TabLayout() {
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
          title: 'Bibliotek',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'book-sharp' : 'book-outline'} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="e-beregner"
        options={{
          title: 'E-beregner',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'calculator-sharp' : 'calculator-outline'} color={color} size={24} />
          ),
        }}
      />
      
      <Tabs.Screen 
        name="test_site"
        options={{ 
          title: 'TEST PAGE',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }} 
      />
    </Tabs>
  );
}