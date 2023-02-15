import { Center, Text } from "native-base"
import * as React from "react"
import DrawerView from "../components/DrawerView"

export default function Favourites() {
  return (
    <DrawerView>
      <Center>
        <Text mt="12" fontSize="18">
          This is Favourites page.
        </Text>
      </Center>
    </DrawerView>
  )
}
