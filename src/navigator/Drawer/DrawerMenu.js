import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'

import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth:1,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderBottomWidth:1 ,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'white'

  },
  drawerMenu: {
    fontSize: 30,
  },
  menuContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  }
})

const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.gray}
        backgroundColor="white"
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    <View style={styles.menuContainer}>
      <View style={styles.main}>
        <Text
          style={styles.drawerMenu}
          onPress={() => {
            navigation.navigate('CameraExample')
          }}
        > 카메라 example </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.drawerMenu}>위치 example</Text>
      </View>
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
