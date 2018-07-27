import React from "react";
import {
  TextInput,
  Button,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Switch
} from "react-native";

import { login } from "../actions/LoginAction";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar } from "react-native-elements";
import { setDetails } from "../actions/DetailsAction";
import Header from "../components/Header";

var ImagePicker = require("react-native-image-picker");

const { height, width } = Dimensions.get("window");

class Historyis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      name: "",
      date: "",
      switchState: false,
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 0.1
          }}
        >
          <Header heading={"HISTORY"} />
        </View>
        <ScrollView>
          {this.props.data.map((item, index) => {
            return (
              <View style={{ height: height * 0.22 }}>
                <View
                  style={{
                    backgroundColor: "white",
                    height: height * 0.19,
                    marginLeft: height * 0.025,
                    marginRight: height * 0.025,
                    marginTop: height * 0.015,
                    borderRadius: 20,
                    borderColor: "#dadada"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        flexDirection: "row"
                      }}
                    >
                      <View
                        style={{
                          flex: 0.25,
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Avatar
                          large
                          rounded
                          source={{
                            uri: item._image
                          }}
                          activeOpacity={0.7}
                        />
                      </View>
                      <View style={{ flex: 0.75, justifyContent: "center" }}>
                        <Text
                          style={{
                            fontSize: width * 0.045,
                            fontWeight: "bold",
                            color: "black"
                          }}
                        >
                          Name:
                        </Text>
                        <Text
                          style={{
                            fontSize: width * 0.04,
                            fontWeight: "bold",
                            color: "#909090"
                          }}
                        >
                          {item.image_name}
                        </Text>
                        <Text
                          style={{
                            fontSize: width * 0.045,
                            fontWeight: "bold",
                            color: "black"
                          }}
                        >
                          Type:
                        </Text>
                        <Text
                          style={{
                            fontSize: width * 0.035,
                            fontWeight: "bold"
                          }}
                        >
                          {item.image_type}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  historytxt: {
    fontSize: width * 0.045,
    marginLeft: width * 0.04,
    marginTop: height * 0.02
  }
});
function mapUser(state) {
  console.log("HISTORY", state);
  return {
    data: state.detailsReducer.details,
    updated: state.detailsReducer.updated
  };
}

export default connect(
  mapUser,
  {}
)(Historyis);
