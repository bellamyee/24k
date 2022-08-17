import * as AppleAuthentication from 'expo-apple-authentication';
import PropTypes from "prop-types";
import Home from "../../pages/Home";
import {useDispatch, useSelector} from "react-redux";
import React, { useEffect } from 'react'
import { authenticate } from 'slices/app.slice'
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "../../navigator/Drawer";
function AppleLogin({ navigation }) {
  const { checked, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{ width: 200, height: 44 }}
      onPress={async () => {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          }
          );
          // signed in
          dispatch(authenticate({ loggedIn: true, checked: true }))
          navigation.navigate("Home");

        } catch (e) {
          if (e.code === 'ERR_CANCELED') {
            // handle that the user canceled the sign-in flow
          } else {
            // handle other errors
          }
        }
      }}
    />
  );
}

AppleLogin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

AppleLogin.defaultProps = {
  navigation: { navigate: () => null },
}
export default AppleLogin;
