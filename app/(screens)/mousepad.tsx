import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const Mousepad = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const drag = Gesture.Pan().onChange((event) => {
    console.log(event.absoluteX, event.absoluteY);
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  //   const clickGesture = Gesture.Tap()
  //     .numberOfTaps(2)
  //     .onStart(() => {
  //       console.log("touched");
  //     });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={drag}>
        {/* <GestureDetector gesture={clickGesture}> */}
        <View style={styles.main}>
          <Text>Mousepad</Text>
        </View>
      </GestureDetector>
      {/* </GestureDetector> */}
    </GestureHandlerRootView>
  );
};

export default Mousepad;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
