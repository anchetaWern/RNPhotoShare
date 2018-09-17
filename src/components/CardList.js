import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import PropTypes from "prop-types";

import Card from "./Card";

class CardList extends Component {
  render() {
    if (this.props.cards.length > 0) {
      return (
        <FlatList
          data={this.props.cards}
          renderItem={this.renderCards}
          keyExtractor={item => item.id}
          inverted={true}
        />
      );
    }

    return (
      <View style={styles.emptyBox}>
        <Text style={styles.emptyBoxText}>No photos yet</Text>
      </View>
    );
  }

  renderCards = ({ item }) => {
    return <Card key={item.id} imageURI={item.url} />;
  };
}

const styles = {
  emptyBox: {
    backgroundColor: "#94c2ff",
    padding: 20,
    marginTop: 20,
    alignItems: "center"
  },
  emptyBoxText: {
    fontSize: 18
  }
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired
};

export default CardList;
