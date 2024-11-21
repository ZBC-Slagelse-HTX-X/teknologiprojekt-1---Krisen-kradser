import { View, Text } from "react-native";
import E_beregner from "./e-beregner";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";

export default function e_beregnerLayout() {
  const { theme } = useTheme();
  const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;

  return (
      <View style={[{flex:1, alignItems:"flex-start"},{ backgroundColor: currentTheme.calculatorBackground }]}>
        <E_beregner/>
    </View>
  );
}