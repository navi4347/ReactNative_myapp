const Typography = {
  FontFamily: {
    title: "MagnetobFont",
    default: "Roboto",
  },
  FontSize: {
    heading1: 32,
    heading2: 24,
    body: 16,
    small: 12,
  },
  FontWeight: {
    thin: "100" as const,
    light: "300" as const,
    regular: "400" as const,
    medium: "500" as const,
    semiBold: "600" as const,
    bold: "700" as const,
    extraBold: "800" as const,
    heavy: "900" as const,
  },
};

export default Typography;
