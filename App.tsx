import * as React from "react"
import {
  createDrawerNavigator
} from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import {
  Box, Center, NativeBaseProvider, Text
} from "native-base"
import CustomDrawer from './components/CustomDrawer'
import Favourites from "./screens/Favourites"
import YourCart from "./screens/YourCart"
import Start from "./screens/Start"
import YourOrders from "./screens/YourOrders"
global.__reanimatedWorkletInit = () => {}
const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <Box flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          overlayColor: 'transparent',
          drawerStyle: {
            width: 250,
            paddingTop: 60,
          },
          drawerType: "back",
        }}
      >
        <Drawer.Screen name="Start" component={Start}/>
        <Drawer.Screen name="Your Cart" component={YourCart} />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="Your Orders" component={YourOrders} />
      </Drawer.Navigator>
    </Box>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
