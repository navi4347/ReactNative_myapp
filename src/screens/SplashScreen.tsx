import Colors from "@/theme/colors";
import Spacing from "@/theme/spacing";
import Typography from "@/theme/typography";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  View,
} from "react-native";

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

type SplashNavProp = NativeStackNavigationProp<RootStackParamList, "Splash">;

const SplashScreen = () => {
  const navigation = useNavigation<SplashNavProp>();
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const [fontLoaded, setFontLoaded] = useState(false);

  // Load custom font
  useEffect(() => {
    const loadFont = async () => {
      try {
        // Load font using native asset system
        await new Promise((resolve) => setTimeout(resolve, 300)); // small delay for safety
        setFontLoaded(true);
      } catch (e) {
        console.log("Font load error:", e);
      }
    };

    loadFont();
  }, []);

  // After font loads → run fade animation → go to Login
  useEffect(() => {
    if (!fontLoaded) return;

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(() => {
        navigation.replace("Login");
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [fontLoaded, fadeAnim, navigation]);

  // Show loader until font is ready
  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.bottomCenterText}>
        Designed by <Text style={styles.magnetob}>N-tech Global Solutions</Text>
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomCenterText: {
    position: "absolute",
    bottom: Spacing.lg,
    alignSelf: "center",
    color: Colors.white,
    fontSize: Typography.FontSize.small,
  },
  magnetob: {
    fontFamily: "MagnetobFont", // custom font (now safely loaded)
    fontSize: Typography.FontSize.small,
  },
});

export default SplashScreen;
