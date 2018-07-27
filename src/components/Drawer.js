import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

const { height, width } = Dimensions.get("window");

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.2,
            borderBottomWidth: 1,
            backgroundColor: "#bfb6ad",
            borderColor: "#ad8761",
            justifyContent: "center"
          }}
        >
          <Image
            source={{
              uri:
                "https://frontify.com/assets/img/customers/logo-nasdaq-black.png"
            }}
            style={{
              height: height * 0.3,
              width: width * 0.67
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => Actions.details()}
          style={{
            flex: 0.1,
            borderBottomWidth: 1,
            backgroundColor: "#efefef",
            flexDirection: "row",
            borderColor: "#ad8761"
          }}
        >
          <Icon
            name="home"
            size={width * 0.07}
            style={{
              alignSelf: "center",
              marginLeft: width * 0.055
            }}
          />
          <Text style={styles.textis}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Actions.history()}
          style={{
            flex: 0.1,
            borderBottomWidth: 1,
            backgroundColor: "#efefef",
            flexDirection: "row",
            borderColor: "#ad8761"
          }}
        >
          <Icon
            name="history"
            size={width * 0.07}
            style={{ alignSelf: "center", marginLeft: width * 0.055 }}
          />
          <Text style={styles.textis}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Actions.settings()}
          style={{
            flex: 0.1,
            borderBottomWidth: 1,
            backgroundColor: "#efefef",
            flexDirection: "row",
            borderColor: "#ad8761"
          }}
        >
          <Icon
            name="cog"
            size={width * 0.07}
            style={{
              alignSelf: "center",
              marginLeft: width * 0.055
            }}
          />
          <Text style={styles.textis}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Actions.popTo("login")}
          style={{
            flex: 0.1,
            borderBottomWidth: 1,
            backgroundColor: "#efefef",
            flexDirection: "row",
            borderColor: "#ad8761"
          }}
        >
          <Icon
            name="sign-out"
            size={width * 0.07}
            style={{
              alignSelf: "center",
              marginLeft: width * 0.055
            }}
          />
          <Text style={styles.textis}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  textis: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    marginLeft: width * 0.05,
    marginTop: height * 0.03
  }
});

function mapUser(state) {
  return {};
}

export default connect(
  mapUser,
  {}
)(Drawer);
