import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Pressable } from "react-native";


const App = () => {
  return (

    <View style={{ flex: 1, alignItems: "left", paddingLeft: 20, backgroundColor: "#111111" }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 50 }}>
        <View style={{ borderRadius: 30, borderColor: "#D3D3D3", borderWidth: 2, width: 50 }}>
          <Text style={{ color: "white", fontSize: 30, margin: 10 }}>{' <'}</Text>
        </View>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold", margin: 30 }}>Sign Up</Text>
      </View>

      <Text style={{ color: "#D3D3D3", margin: 10 }}>Sign Up with one of the following options</Text>

      {/* name field */}
      <Text style={{ color: "white", fontSize: 20, margin: 10, marginTop: 25 }}>Name</Text>
      <TextInput
        style={{ height: 60, width: 350, borderColor: "#D946EF", borderRadius: 20, borderWidth: 3, paddingLeft: 20, backgroundColor: "#333333" }}
        placeholderTextColor="gray"
        placeholder="Enter Your Name" />

      {/* pass field */}
      <Text style={{ color: "white", fontSize: 20, margin: 10, marginTop: 25 }}>Password</Text>
      <TextInput
        style={{ height: 60, width: 350, borderColor: "#D946EF", borderRadius: 20, borderWidth: 3, paddingLeft: 20, backgroundColor: "#333333" }}
        placeholderTextColor="gray"
        placeholder="pick a Strong password"
        secureTextEntry={true} />

      {/* email field */}
      <Text style={{ color: "white", fontSize: 20, margin: 10, marginTop: 25 }}>Gmail</Text>
      <TextInput
        style={{ height: 60, width: 350, borderColor: "#D946EF", borderRadius: 20, borderWidth: 3, paddingLeft: 20, backgroundColor: "#333333" }}
        placeholderTextColor="gray"
        placeholder="Enter your Gmail" />

      {/* create account button */}
      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: "#D946EF",
          borderRadius: 20,
          width: 350,
          height: 60,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => {
          Alert.alert("Account Created Successfully", "Welcome to our app!");
        } }
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Create Account</Text>
      </TouchableOpacity>

      <Text style={{ color: "#D3D3D3", margin: 60, marginTop: 20 }}>
        Already have an account?{" "}
        <Pressable>
          <Text style={{ color: "white", textDecorationLine: "underline" }}>Log in</Text>
        </Pressable>
      </Text>
    </View>
  );
};


export default App;


