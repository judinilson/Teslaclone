import React from "react";
import { View, FlatList, Dimensions, Image } from "react-native";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://www.freepnglogos.com/uploads/tesla-logo-png-20.png",
        }}
      />
      <Image
        style={styles.menu}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/56/56763.png",
        }}
      />
    </View>
  );
};

export default Header;
