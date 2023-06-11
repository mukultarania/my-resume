import basic from "./basic";
import dark from "./dark";
import { THEME } from "../constants/theme";

export const getTheme = (themeName:Object) => {
    switch (themeName) {
        case THEME.DARK: return dark;
        default: return dark;
    }
};
