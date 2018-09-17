import React from "react";
import { View, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

const Card = ({ imageURI }) => {
  return (
    <View>
      <Image
        source={{ uri: imageURI }}
        resizeMode={"cover"}
        style={styles.image}
      />
    </View>
  );
};

const styles = {
  image: {
    width: width - 40,
    height: height - parseInt(height / 3),
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
};

Card.propTypes = {
  imageURI: PropTypes.string.isRequired
};

export default Card;
