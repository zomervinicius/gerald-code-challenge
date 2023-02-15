import * as React from "react"
import {
    DrawerContentScrollView, useDrawerProgress
} from "@react-navigation/drawer"
import {
    Box, Divider, HStack, Pressable, Text, VStack
} from "native-base"
import Animated, {
    interpolate,
    useAnimatedStyle
} from "react-native-reanimated"

const CustomDrawer = (props) => {
  const drawerProgress = useDrawerProgress()

  const viewStyles2 = (type) =>
    useAnimatedStyle(() => {
      const val = type === "top" ? -100 : 100   
      const translateY = interpolate(drawerProgress.value, [0, 1], [val, 0])
      const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1])
      return {
        transform: [{ translateY }],
        opacity,
      }
    })

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: "#111132", borderTopLeftRadius: 40}}
    >
      <Animated.View style={[viewStyles2("top")]}>
        <VStack space="6" my="2" ml="3" mr="6" mt="10">
          <Box px="4">
            <Text bold color="white" fontSize="20">
              Beka
            </Text>
          </Box>
          <VStack divider={<Divider bg="gray.500" />} space="4">
            <VStack space="3">
              {props.state.routeNames.map((name, index) => (
                <Pressable
                  px="5"
                  py="3"
                  rounded="md"
                  bg={
                    index === props.state.index
                      ? "rgba(246, 132, 103, 0.3)"
                      : "transparent"
                  }
                  onPress={(event) => {
                    props.navigation.navigate(name)
                  }}
                >
                  <HStack space="7" alignItems="center">
                    <Text
                      fontWeight="500"
                      fontSize="20"
                      color={
                        index === props.state.index
                          ? "rgb(246, 132, 103)"
                          : "white"
                      }
                    >
                      {name}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack>
            <VStack space="5">
              <VStack space="3">
                <Pressable px="5" py="3">
                  <HStack space="7" alignItems="center">
                    <Text color="white" fontWeight="500" fontSize="20">
                      Sign Out
                    </Text>
                  </HStack>
                </Pressable>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </Animated.View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
