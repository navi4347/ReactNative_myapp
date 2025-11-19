import Colors from "@/theme/colors";
import Typography from "@/theme/typography";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleProp, TextStyle, TouchableOpacity } from "react-native";

type IconType = "material" | "ion" | "feather";

interface IconProps {
  name: string;
  type?: IconType;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  type = "material",
  size = Typography.heading2,
  color = Colors.black,
  style,
  onPress,
}) => {
  const IconComponent =
    type === "ion"
      ? Ionicons
      : type === "feather"
      ? Feather
      : MaterialCommunityIcons;

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <IconComponent
          name={name as any}
          size={size}
          color={color}
          style={style}
        />
      </TouchableOpacity>
    );
  }

  return (
    <IconComponent name={name as any} size={size} color={color} style={style} />
  );
};

export default Icon;
