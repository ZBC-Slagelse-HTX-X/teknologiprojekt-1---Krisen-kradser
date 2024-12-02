import { View } from "react-native";
import { useTheme } from "@/components/themeContext";
import { normalTheme, colorBlindTheme } from "@/constants/themes";
import Afgrøde_beregner from "./afgrøde-beregner";
  
export default function afgrøde_beregnerLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const currentTheme = theme === 'normal' ? colorBlindTheme:normalTheme;

  return (
    <View style={[{flex:1, alignItems:"flex-start"},{ backgroundColor: currentTheme.calculatorBackground }]}>
      <Afgrøde_beregner />
      {children}
    </View>
  );
}