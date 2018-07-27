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
  Switch,
  Alert
} from "react-native";
import { Slider } from "react-native-elements";
import { login } from "../actions/LoginAction";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";
import { setQuality } from "../actions/DetailsAction";
import Header from "../components/Header";

var ImagePicker = require("react-native-image-picker");

const { height, width } = Dimensions.get("window");

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  compress = () => {
    this.props.setQuality(this.state.value);
    Alert.alert("Quality Set");
  };

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
          <Header heading={"SETTINGS"} />
        </View>
        <View
          style={{
            flex: 0.05
          }}
        />
        <View
          style={{
            flex: 0.3
          }}
        >
          <View
            style={{
              flex: 0.5,
              alignItems: "stretch",
              justifyContent: "center",
              marginHorizontal: 15
            }}
          >
            <Slider
              minimumValue={0}
              maximumValue={60}
              thumbTintColor="#bfb6ad"
              value={this.state.value}
              onValueChange={(value, compression) =>
                this.setState({ value, compression })
              }
            />
            <Text>
              Compression: {JSON.stringify(this.state.value).split(".", 1)}%
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity
              onPress={() => this.compress()}
              style={{
                borderRadius: 20,
                width: width * 0.4,
                backgroundColor: "#bfb6ad",
                alignSelf: "center",
                flex: 0.45,
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: width * 0.04,
                  color: "white"
                }}
              >
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              flex: 0.9
            }}
          >
            <Text
              style={{
                fontSize: width * 0.045,
                fontWeight: "bold",
                marginLeft: width * 0.04,
                flex: 0.95,
                marginTop: width * 0.03,
                color: "black"
              }}
            >
              Compress pictures ?
            </Text>
          </View>

          <Switch
            onValueChange={() => {
              this.compress();
            }}
            value={
              this.props.compression == undefined
                ? false
                : this.props.compression
            }
          /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  historytxt: {
    fontSize: width * 0.045,
    marginLeft: width * 0.02,
    marginTop: height * 0.02
  }
});
function mapUser(state) {
  return {
    compression: state.detailsReducer.compression
  };
}

export default connect(
  mapUser,
  { setQuality }
)(Settings);
