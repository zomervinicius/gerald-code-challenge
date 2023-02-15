import { Center, Text } from "native-base"
import * as React from "react"
import DrawerView from "../components/DrawerView"

export default function YourCart() {
  return (
    <DrawerView>
      <Center>
        <Text mt="12" fontSize="18">
          This is YourCart page.
        </Text>
      </Center>
    </DrawerView>
  )
}
