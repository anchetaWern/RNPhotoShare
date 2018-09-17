import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  Button,
  Alert
} from "react-native";

import CardList from "../components/CardList";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

import { addedCard } from "../actions";

const store = createStore(reducers);

export default class ViewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: "View Photos",
      headerTransparent: true,
      headerTintColor: "#333",
      headerRight: (
        <Button
          title="Unfollow"
          color="#333"
          onPress={() => params.unFollow()}
        />
      )
    };
  };

  state = {
    subscribedToUsername: "",
    isSubscribed: false
  };

  constructor(props) {
    super(props);
    this.pusher = null;
    this.user_channel = null;
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ unFollow: this.unFollow });

    this.pusher = navigation.getParam("pusher");
  }

  unFollow = () => {
    this.pusher.unsubscribe(`private-user-${this.state.subscribedToUsername}`);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {!this.state.isSubscribed && (
            <View style={styles.initialContent}>
              <Text style={styles.mainText}>User to follow</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={subscribedToUsername =>
                  this.setState({ subscribedToUsername })
                }
              >
                <Text style={styles.textInputText}>
                  {this.state.subscribedToUsername}
                </Text>
              </TextInput>

              <View style={styles.buttonContainer}>
                <Button
                  title="Follow"
                  color="#1083bb"
                  onPress={this.followUser}
                />
              </View>
            </View>
          )}

          {this.state.isSubscribed && (
            <ScrollView>
              <View style={styles.mainContent}>
                <CardList />
              </View>
            </ScrollView>
          )}
        </View>
      </Provider>
    );
  }

  followUser = () => {
    this.setState({
      isSubscribed: true
    });

    this.user_channel = this.pusher.subscribe(
      `private-user-${this.state.subscribedToUsername}`
    );

    this.user_channel.bind("pusher:subscription_error", status => {
      Alert.alert(
        "Error occured",
        "Cannot connect to Pusher. Please restart the app."
      );
    });

    this.user_channel.bind("pusher:subscription_succeeded", () => {
      this.user_channel.bind("client-posted-photo", data => {
        store.dispatch(addedCard(data.id, data.url));
      });
    });
  };
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
