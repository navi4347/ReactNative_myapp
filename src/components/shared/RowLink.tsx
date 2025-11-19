import Colors from "@/theme/colors";
import Spacing from "@/theme/spacing";
import Typography from "@/theme/typography";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface RowLinkProps {
  leftLabel?: string;
  leftHighlight?: boolean;
  onLeftPress?: () => void;

  rightLabel?: string;
  rightHighlight?: boolean;
  onRightPress?: () => void;

  center?: boolean;
}

const RowLink: React.FC<RowLinkProps> = ({
  leftLabel,
  leftHighlight = false,
  onLeftPress,
  rightLabel,
  rightHighlight = false,
  onRightPress,
  center = false,
}) => {
  const renderText = (
    label: string,
    highlight: boolean,
    onPress?: () => void
  ) => (
    <Text
      style={[styles.text, highlight && styles.link]}
      onPress={highlight ? onPress : undefined}
    >
      {label}
    </Text>
  );

  if (center) {
    return (
      <View style={styles.centerRow}>
        {leftLabel && renderText(leftLabel, leftHighlight, onLeftPress)}
        {leftLabel && rightLabel && <View style={{ width: Spacing.xs }} />}
        {rightLabel && renderText(rightLabel, rightHighlight, onRightPress)}
      </View>
    );
  }

  return (
    <View style={styles.row}>
      {leftLabel && renderText(leftLabel, leftHighlight, onLeftPress)}
      {rightLabel && renderText(rightLabel, rightHighlight, onRightPress)}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spacing.sm,
  },
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Spacing.sm,
    alignItems: "center",
  },
  text: {
    fontSize: Typography.FontSize.body,
    color: Colors.black,
  },
  link: {
    color: Colors.primary,
    fontWeight: Typography.FontWeight.regular, // ← replaced "400"
  },
});

export default RowLink;
