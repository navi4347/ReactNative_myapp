import Colors from "@/theme/colors";
import Spacing from "@/theme/spacing";
import Typography from "@/theme/typography";
import React from "react";
import { StyleSheet, Text } from "react-native";

interface InlineMessageProps {
  message?: string;
  type?: "error" | "success"; // Default is "error"
}

const InlineMessage: React.FC<InlineMessageProps> = ({
  message,
  type = "error",
}) => {
  if (!message) return null;

  return (
    <Text
      style={[styles.text, type === "error" ? styles.error : styles.success]}
    >
      {message}
    </Text>
  );
};

export default InlineMessage;

const styles = StyleSheet.create({
  text: {
    fontSize: Typography.FontSize.body,
    marginTop: Spacing.xs,
    marginBottom: Spacing.sm,
    textAlign: "center",
  },
  error: {
    color: Colors.error,
  },
  success: {
    color: Colors.success,
  },
});
