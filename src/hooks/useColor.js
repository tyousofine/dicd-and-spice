import { useContext } from "react";
import { ColorContext } from "../components/context/colorContext";

export const useColor = () => {
    const context = useContext(ColorContext);

    if (context === undefined) {
        throw new Error("useTheme() must be used inside a ThemeProvider");

    }

    return context;
}