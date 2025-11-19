import Colors from "@/theme/colors";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loader = () => (
  <View style={styles.overlay}>
    <ActivityIndicator size="large" color={Colors.primary} />
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.transparent,
  },
});

export default Loader;
