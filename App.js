import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';

import { Block } from './components';
import Navigation from './navigation';

const images = [
  require("./assets/icons/back.png"),
  require("./assets/icons/plants.png"),
  require("./assets/icons/seeds.png"),
  require("./assets/icons/flowers.png"),
  require("./assets/icons/sprayers.png"),
  require("./assets/icons/pots.png"),
  require("./assets/icons/fertilizers.png"),
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"),
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
  require("./assets/images/illustration_1.png"),
  require("./assets/images/illustration_2.png"),
  require("./assets/images/illustration_3.png"),
  require("./assets/images/avatar.png")
];

export default function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleResource = async () => {
    // caching images
    const cacheImages = images.map(img => {
      return Asset.fromModule(img).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={handleResource}
        onError={err => console.warn(err)}
        onFinish={() => setIsLoadingComplete(true)}
      />
    );
  }

  const result = (
    <Block white>
      <Navigation />
    </Block>
  );

  return result;
}
