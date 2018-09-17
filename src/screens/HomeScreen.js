import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center"
  },
  mainText: {
    fontSize: 25,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 30
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10
  }
};
