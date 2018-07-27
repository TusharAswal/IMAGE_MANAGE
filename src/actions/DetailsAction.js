import {
  SET_DETAILS_SUCCESS,
  SET_COMPRESSION_SUCCESS,
  GET_UPDATE_SUCCESS,
  CLEAR_HISTORY
} from "../utils/types";
import { Alert } from "react-native";
export function setDetails(image, name, date, size, height, width, type) {
  var data = [
    {
      _image: image,
      image_name: name,
      image_date: date,
      image_size: size,
      image_height: height,
      image_width: width,
      image_type: type
    }
  ];
  console.log("DATA", data);
  return dispatch => {
    dispatch({
      type: SET_DETAILS_SUCCESS,
      payload: data
    });
  };
}

export function setQuality(compression) {
  return dispatch => {
    dispatch({
      type: SET_COMPRESSION_SUCCESS,
      payload: compression
    });
  };
}

export function updatedData(updated) {
  return dispatch => {
    dispatch({
      type: GET_UPDATE_SUCCESS,
      payload: updated
    });
  };
}

export function clearHistory() {
  return dispatch => {
    Alert.alert(
      "Confirm",
      "Do you want to clear your history ?",
      [
        {
          text: "Cancel",
          onPress: () => alert("Canceled"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () =>
            dispatch({
              type: CLEAR_HISTORY
            })
        }
      ],
      { cancelable: false }
    );
    // dispatch({
    //   type: CLEAR_HISTORY
    // });
  };
}
