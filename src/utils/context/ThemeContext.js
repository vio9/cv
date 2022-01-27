import { createContext, useState } from "react";

export const ThemeContext = createContext({
	theme: "",
	updateTheme: (name) => {},
});

export default ThemeContext;
