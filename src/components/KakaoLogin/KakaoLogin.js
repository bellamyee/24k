import React from 'react';
import { View, Modal } from "react-native";
import { WebView } from 'react-native-webview';
import axios from 'axios';
// other import settings...
const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = ({ navigation }) => {
  function LogInProgress(data) {
    // access code는 url에 붙어 장황하게 날아온다.

    // substringd으로 url에서 code=뒤를 substring하면 된다.
    const exp = "code=";
    var condition = data.indexOf(exp);
    if (condition != -1) {
      var request_code = data.substring(condition + exp.length);
      requestToken(request_code);
    }
  };

  const requestToken = async (request_code) => {
    var returnValue = "none";
    var request_token_url = "https://kauth.kakao.com/oauth/token";
    axios({
      method: "post",
      url: request_token_url,
      params: {
        grant_type: 'authorization_code',
        client_id: 'ic',
        redirect_uri: 'url',
        code: request_code,
      },
    }).then(function (response) {
      returnValue = response.data.access_token;
    }).catch(function (error) {
      console.log('error', error);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        scalesPageToFit={false}
        style={{ marginTop: 30 }}
        source={{ uri: 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=7fdad91278da191fa544236b41e27607&redirect_uri=http://localhost:19000/redirect' }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={(event) => { LogInProgress(event.nativeEvent["url"]); }}
      />
    </View>
  );
};


export default KakaoLogin;

