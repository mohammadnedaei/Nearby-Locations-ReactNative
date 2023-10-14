/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SafeAreaView, { Dimensions, Text, View } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

function App(): JSX.Element {
  const width = Dimensions.get('window').width;
  return (
    <View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              {index}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;
