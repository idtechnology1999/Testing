import { Link } from "expo-router";
import { View, Button, Alert } from 'react-native';
import { API_URL } from "@env";
import { useState } from "react";

export default function Index() {
const [display, setdisplay] = useState("")



  return (
   <>

   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Click Me"
        onPress={() => Alert.alert(`${API_URL}`)}
        color="#1E90FF" // optional: button color
      />
    </View>
   </>
  )
  
};


