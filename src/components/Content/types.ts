import Animated from "react-native-reanimated"

export type TabModel = {
  name: string;
  anchor: number;
}

export type TContentProps = {
  y: Animated.Node<number>
  onMeasurement: (index: number, tab: TabModel) => void
}