import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyleButton from "../styleButton";
const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <ImageBackground source={image} style={styles.imagebackground}>
      <View style={styles.carContainer}>
        {/* MARK: HEADER */}
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}&nbsp;
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>

        {/* MARK: BUTTONS */}
        <View style={styles.buttonsContainer}>
          <StyleButton
            type="primary"
            content={"Custom Order"}
            onPress={() => console.warn("costom order was press")}
          />
          <StyleButton
            type="secondary"
            content={"Existing Inventory"}
            onPress={() => console.warn("costom order was press")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default CarItem;
