import React from "react";
import {
  TextInput,
  Button,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image
} from "react-native";

import { login } from "../actions/LoginAction";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";
import { clearHistory } from "../actions/DetailsAction";

const { height, width } = Dimensions.get("window");

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  clear_History = () => {
    this.props.clearHistory();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#bfb6ad"
        }}
      >
        <View
          style={{
            flex: 0.1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: width * 0.03
            }}
            onPress={() => {
              Actions.drawerOpen();
            }}
          >
            <Icon name="bars" size={height * 0.05} color={"white"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.8,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: height * 0.035,
              fontWeight: "bold",
              color: "white"
            }}
          >
            {this.props.heading}
          </Text>
        </View>
        {this.props.heading == "HISTORY" ? (
          <View
            style={{
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{ marginRight: width * 0.03 }}
              onPress={() => {
                this.clear_History();
              }}
            >
              <Icon name="trash" size={height * 0.05} color={"white"} />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flex: 0.1
            }}
          />
        )}
      </View>
    );
  }
}

function mapUser(state) {
  return {};
}

export default connect(
  mapUser,
  { clearHistory }
)(Header);
