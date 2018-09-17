import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ShareScreen extends Component {
  static navigationOptions = () => {
    return {
      title: "Share Photos",
      headerTransparent: true,
      headerTintColor: "#333"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Share screen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  scroll: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70
  },
  mainContent: {
    flex: 1
  },
  textBox: {
    borderStyle: "dashed",
    borderWidth: 3,
    borderColor: "#4e4e4e",
    backgroundColor: "#FFF",
    padding: 5
  },
  textBoxText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20
  },
  latestImage: {
    width: 150,
    height: 150,
    marginTop: 10,
    borderWidth: 5,
    borderColor: "#FFF",
    alignSelf: "center"
  },
  camera: {
    flex: 1
  },
  cameraFiller: {
    flex: 8
  },
  cameraContent: {
    flex: 2,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  buttonFlipCamera: {
    flex: 3,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center"
  },
  buttonTextFlipCamera: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e8e827"
  },
  buttonCamera: {
    flex: 4,
    alignSelf: "center",
    alignItems: "center"
  },
  buttonCloseCamera: {
    flex: 3,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center"
  }
};
