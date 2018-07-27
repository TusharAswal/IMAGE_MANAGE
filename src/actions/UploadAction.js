import { Alert } from "react-native";

import { UPLOAD_SUCCESS, UPLOAD_FAIL, UPLOAD_REQUEST } from "../utils/types";

export function uploadImage(image) {
  let token1 = "2f105d51150dcdb";
  let token2 = "a5e98c24de8db81c19bbb89e001d1a81a50ae57e";
  return dispatch => {
    dispatch({ type: UPLOAD_REQUEST });
    fetch(`https://api.imgur.com/3/image`, {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${token1}`,
        Authorization: `Bearer ${token2}`,
        "Content-Type": "application / json"
      },
      body: JSON.stringify(image)
    })
      .then(response => response.json())
      .then(responseJson => {
        Alert.alert("Image Uploaded");
        console.log("IMAGE UPLOAD RESPONSE", responseJson);
      })
      .catch(err => {
        if (err) {
          console.log("error", err);
          dispatch({ type: UPLOAD_FAIL });
        }
      });
  };
}
