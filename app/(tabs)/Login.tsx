import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


  const handleLogin = async () => {
        alert(`${email} and ${password}`)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}> Dont have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "#007BFF",
    marginTop: 10,
    fontSize: 16,
  },
});
