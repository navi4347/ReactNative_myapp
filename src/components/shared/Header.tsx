import Colors from "@/theme/colors";
import Spacing from "@/theme/spacing";
import Typography from "@/theme/typography";

import React from "react";
import { FlexAlignType, StyleSheet, Text, View, ViewStyle } from "react-native";

interface HeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  style?: ViewStyle;
}

const mapAlign = (align: "left" | "center" | "right"): FlexAlignType => {
  switch (align) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    default:
      return "center";
  }
};

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  align = "center",
  style,
}) => (
  <View style={[styles.container, { alignItems: mapAlign(align) }, style]}>
    <Text style={styles.title}>{title}</Text>
    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.lg,
  },
  title: {
    fontSize: Typography.FontSize.heading2,
    fontWeight: Typography.FontWeight.bold, // ← replaced "700"
    color: Colors.black,
  },
  subtitle: {
    fontSize: Typography.FontSize.body,
    color: Colors.gray,
    marginTop: Spacing.xs,
  },
});

export default Header;
