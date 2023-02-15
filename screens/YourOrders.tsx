import { Center, Text } from "native-base"
import * as React from "react"
import DrawerView from "../components/DrawerView"

export default function YourOrders() {
  return (
    <DrawerView>
      <Center>
        <Text mt="12" fontSize="18">
          This is YourOrders page.
        </Text>
      </Center>
    </DrawerView>
  )
}
