import { useDrawerProgress } from "@react-navigation/drawer"
import { Center, Text, View } from "native-base"
import * as React from "react"
import {StyleSheet} from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated"

export default function DrawerView({children}) {
  const drawerProgress = useDrawerProgress()
  const viewStyles = useAnimatedStyle(() => {
    const rotate = interpolate(
      drawerProgress.value,
      [0,1],
      [0, -15]
    )
    return {
      transform: [{ rotate: `${rotate}deg`}],
    }
  })
  return (
    <Animated.View style={[styles.container, viewStyles]}>
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white"},
})
