import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ViewScreen extends Component {
  static navigationOptions = () => {
    return {
      title: "View Photos",
      headerTransparent: true,
      headerTintColor: "#333"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>View screen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center"
  },
  initialContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: {
    color: "#333",
    fontSize: 18
  },
  textInput: {
    marginTop: 5,
    borderStyle: "dashed",
    borderWidth: 3,
    borderColor: "#4e4e4e",
    backgroundColor: "#FFF",
    padding: 5,
    width: 200,
    height: 40
  },
  textInputText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonContainer: {
    marginTop: 10
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    marginTop: 70
  }
};
