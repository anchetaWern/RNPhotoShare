import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import Pusher from "pusher-js/react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.pusher = null;
  }

  componentDidMount() {
    this.pusher = new Pusher("YOUR PUSHER APP KEY", {
      authEndpoint: "YOUR_NGROK_URL/pusher/auth",
      cluster: "YOUR PUSHER APP CLUSTER",
      encrypted: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>What to do?</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Share"
            color="#1083bb"
            onPress={() => {
              this.props.navigation.navigate("Share", {
                pusher: this.pusher
              });
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="View"
            color="#2f9c0a"
            onPress={() => {
              this.props.navigation.navigate("View", {
                pusher: this.pusher
              });
            }}
          />
        </View>
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
