import { RefObject } from "react"
import Animated from "react-native-reanimated"

export type THeaderProps = {
  y: Animated.Value<number>
  tabs: any
  scrollView: RefObject<Animated.ScrollView>
}