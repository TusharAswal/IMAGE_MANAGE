import React from "react";
import {
  TextInput,
  Button,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  ImageBackground
} from "react-native";
import { login } from "../actions/LoginAction";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get("window");
class LoginContainer extends React.Component {
  componentDidMount() {
    this.props.login();
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "#bfb6ad",
          justifyContent: "center"
        }}
      >
        <ImageBackground
          source={{
            uri:
              "https://images.unsplash.com/photo-1505578399858-ce09b2f9485f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=84cc36b06fa5b60181d6885fc067d66f&w=1000&q=80"
          }}
          style={{
            height: height * 1,
            width: width * 1
          }}
        >
          <View
            style={{
              flex: 0.25
            }}
          >
            <Image
              source={{
                uri:
                  "https://frontify.com/assets/img/customers/logo-nasdaq-black.png"
              }}
              style={{
                height: height * 0.3,
                width: width * 0.65,
                alignSelf: "center"
              }}
            />
          </View>
          <View style={{ flex: 0.1 }} />
          <View
            style={{
              flex: 0.75
            }}
          >
            <View
              style={{
                //flex: 0.2,
                height: height * 0.7
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: width * 0.09,
                  backgroundColor: "#0004",
                  borderRadius: 10,
                  marginRight: width * 0.09,
                  marginLeft: width * 0.09
                }}
              >
                <View
                  style={{
                    flex: 0.15,
                    justifyContent: "center"
                  }}
                >
                  <Icon
                    name="user"
                    size={width * 0.05}
                    style={{
                      alignSelf: "center",
                      marginLeft: width * 0.04,
                      color: "white"
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 0.7
                  }}
                >
                  <TextInput
                    underlineColorAndroid={"transparent"}
                    placeholderTextColor={"white"}
                    placeholder="USERNAME"
                    style={{
                      fontSize: width * 0.05,
                      textAlign: "center",

                      fontWeight: "bold"
                    }}
                  />
                  <View
                    style={{
                      flex: 0.15,
                      justifyContent: "center"
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#0004",
                  borderRadius: 10,
                  marginTop: width * 0.04,
                  marginRight: width * 0.09,
                  marginLeft: width * 0.09
                }}
              >
                <View
                  style={{
                    flex: 0.15,

                    justifyContent: "center"
                  }}
                >
                  <Icon
                    name="key"
                    size={width * 0.05}
                    style={{
                      alignSelf: "center",
                      marginLeft: width * 0.04,
                      color: "white"
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 0.7
                  }}
                >
                  <TextInput
                    underlineColorAndroid={"transparent"}
                    placeholderTextColor={"white"}
                    placeholder="PASSWORD"
                    style={{
                      fontSize: width * 0.05,
                      textAlign: "center",
                      fontWeight: "bold"
                    }}
                  />
                  <View
                    style={{
                      flex: 0.15,
                      justifyContent: "center"
                    }}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => Actions.drawer()}
                style={{
                  borderRadius: 10,
                  marginTop: height * 0.025,
                  backgroundColor: "#0004",
                  width: width * 0.8,
                  alignSelf: "center",
                  justifyContent: "center",
                  flex: 0.14
                }}
              >
                <Text
                  style={{
                    fontSize: width * 0.06,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "black"
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
function mapUser(state) {
  return { loginReducer: state.loginReducer };
}

export default connect(
  mapUser,
  { login }
)(LoginContainer);
