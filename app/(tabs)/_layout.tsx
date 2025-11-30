import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <>
    <Tabs screenOptions={{tabBarActiveBackgroundColor:"orange"}} >
      <Tabs.Screen name="index" options={{title:"my home page", tabBarIcon: ()=>(
        <FontAwesome5 name="home" size={24} color="black" />
      )}} />
      <Tabs.Screen name ="Login" options={{title: "login page", tabBarIcon: ()=>(
        <FontAwesome name="tachometer" size={24} color="black" />
      )}} />

      <Tabs.Screen name="registration" options={{title:"Registration"}}  />
    </Tabs>
    </>
  );
}
