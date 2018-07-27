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
  Keyboard,
  ScrollView,
  Alert
} from "react-native";
import { login } from "../actions/LoginAction";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { setDetails, updatedData } from "../actions/DetailsAction";
import { uploadImage } from "../actions/UploadAction";
import Header from "../components/Header";

var ImagePicker = require("react-native-image-picker");

const { height, width } = Dimensions.get("window");

class Details extends React.Component {
  constructor(props) {
    super(props);
    var index = this.props.data;
    this.state = {
      img_nameimage: "",
      img_name: "",
      img_date: "",
      img_size: "",
      img_height: "",
      img_width: "",
      img_type: ""
      // img_nameimage:
      //   this.props.index - 1 < 0
      //     ? ""
      //     : this.props.data[this.props.index - 1]._image,
      // img_name:
      //   this.props.index - 1 < 0
      //     ? ""
      //     : this.props.data[this.props.index - 1].image_name,
      // img_date:
      //   this.props.index - 1 < 0
      //     ? ""
      //     : this.props.data[this.props.index - 1].image_date,
      // img_size:
      //   this.props.index - 1 < 0
      //     ? ""
      //     : this.props.index - 1 < 0
      //       ? ""
      //       : this.props.data[this.props.index - 1].image_size,
      // img_height:
      //   this.props.index - 1 < 0
      //     ? ""
      //     : this.props.data[this.props.index - 1].image_height,
      // img_width:
      //   this.props.index - 1 < 0
      //     ? ""
      //     : this.props.data[this.props.index - 1].image_width,
      // img_type:
      //   this.props.index - 1 < 0
      //     ? ""
      //     : this.props.data[this.props.index - 1].image_type
    };
  }

  clearAll = () => {
    this.setState({
      image: "",
      img_name: "",
      img_date: "",
      img_size: "",
      img_height: "",
      img_width: "",
      img_type: ""
    });
  };

  setImage = () => {
    this.props.setDetails(
      this.state.image,
      this.state.img_name,
      this.state.img_date,
      this.state.img_size,
      this.state.img_height,
      this.state.img_width,
      this.state.img_type
    );
  };

  upload = () => {
    console.log("ASDADasd1", this.state.img_name);

    if (this.state.img_name == "") {
      console.log("ASDADasd2", this.state.img_name);
      Alert.alert("Please select an image to Upload");
    } else {
      console.log("ASDADasd3", this.state.img_name);

      this.props.uploadImage(this.state.image);
    }
  };
  render() {
    Keyboard.dismiss();
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={{ flex: 0.1 }}>
          <Header heading={"HOME"} />
        </View>
        <View style={{ flex: 0.35 }}>
          <View
            style={{
              flex: 1,

              justifyContent: "center"
            }}
          >
            {this.state.image == "" ? (
              <Text
                style={{
                  fontSize: width * 0.06,
                  textAlign: "center"
                }}
              >
                No Image
              </Text>
            ) : (
              <Image
                source={{ uri: this.state.image }}
                style={{
                  height: height * 0.3,
                  width: width * 0.5,
                  borderRadius: 200,
                  alignSelf: "center",
                  marginTop: height * 0.02
                }}
              />
            )}
          </View>
        </View>
        <View style={{ flex: 0.35, marginTop: width * 0.05 }}>
          <Text style={styles.details}>Name: {this.state.img_name}</Text>
          <Text style={styles.details}>Date: {this.state.img_date}</Text>
          <Text style={styles.details}>
            Size: {this.state.img_size}{" "}
            {this.state.img_size == "" ? null : "Kb"}
          </Text>
          <Text style={styles.details}>
            Height: {this.state.img_height}
            {this.state.img_height == "" ? null : "px"}
          </Text>
          <Text style={styles.details}>
            Width: {this.state.img_width}
            {this.state.img_width == "" ? null : "px"}
          </Text>
          <Text style={styles.details}>Type: {this.state.img_type}</Text>
        </View>
        <View
          style={{
            flex: 0.2,
            margin: width * 0.04,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 20,
              width: width * 0.4,
              backgroundColor: "#bfb6ad",
              alignSelf: "center",
              justifyContent: "center",
              flex: 0.45
            }}
            onPress={() => {
              //dismissKeyboard();
              const options = {
                quality: this.props.compression
                  ? this.props.compression / 100
                  : 0.5,
                maxWidth: 500,
                maxHeight: 500,
                storageOptions: {
                  skipBackup: true
                }
              };

              ImagePicker.showImagePicker(options, response => {
                console.log("Response = ", response);

                if (response.didCancel) {
                  console.log("User cancelled photo picker");
                } else if (response.error) {
                  console.log("ImagePicker Error: ", response.error);
                } else if (response.customButton) {
                  console.log(
                    "User tapped custom button: ",
                    response.customButton
                  );
                } else {
                  let source = {
                    uri: "data:image/jpeg;base64," + response.data
                  };
                  this.setState({
                    image: `data:image/jpeg;base64,${response.data}`,
                    img_name: response.fileName,
                    img_date: response.timestamp,
                    img_size: response.fileSize,
                    img_height: response.height,
                    img_width: response.width,
                    img_type: response.type
                  });
                  this.setImage();
                }
              });
            }}
          >
            <Text style={styles.clickable}>Select Image</Text>
          </TouchableOpacity>
          <View style={{ flex: 0.05 }} />
          <TouchableOpacity
            onPress={() => this.upload()}
            style={{
              borderRadius: 20,
              width: width * 0.4,
              backgroundColor: "#bfb6ad",
              alignSelf: "center",
              flex: 0.45,
              justifyContent: "center"
            }}
          >
            <Text style={styles.clear}>Upload</Text>
          </TouchableOpacity>
          <View style={{ flex: 0.05 }} />
          <TouchableOpacity
            onPress={() => this.clearAll()}
            style={{
              borderRadius: 20,
              width: width * 0.4,
              backgroundColor: "#bfb6ad",
              alignSelf: "center",
              flex: 0.45,
              justifyContent: "center"
            }}
          >
            <Text style={styles.clear}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  details: {
    fontSize: width * 0.045,
    margin: width * 0.01,
    fontWeight: "bold",
    marginLeft: width * 0.05,
    marginRight: width * 0.05
  },
  clickable: {
    textAlign: "center",
    fontSize: width * 0.04,
    color: "white"
  },
  clear: {
    textAlign: "center",
    fontSize: width * 0.04,
    color: "white"
  }
});
function mapUser(state) {
  return {
    data: state.detailsReducer.details,
    quality: state.detailsReducer.quality,
    index: state.detailsReducer.details.length,
    compression: state.detailsReducer.compression
  };
}

export default connect(
  mapUser,
  { setDetails, updatedData, uploadImage }
)(Details);
