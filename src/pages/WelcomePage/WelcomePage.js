import {StatusBar, StyleSheet, Text, View, Image} from "react-native";
import { WebView } from 'react-native-webview';
import AppleLogin from "../../components/AppleLogin/AppleLogin";
import { images } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {

  }
})

const WelcomePage = () => (
    <View style = {styles.root}>
      <Image
        style={styles.image}
        source={images.welcome}
      />
      <AppleLogin></AppleLogin>
    </View>
  //<KakaoLogin />
)
export default WelcomePage
