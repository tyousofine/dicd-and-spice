import { useContext } from "react";
import { ColorContext } from "../components/context/colorContext";

export const useColor = () => {
    const context = useContext(ColorContext);

    return context;
}