import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerShadowVisible: false,
        headerTintColor: "#222b00",
        tabBarStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
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