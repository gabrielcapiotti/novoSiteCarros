import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "#556b2f",
        secondary: "#a07009",
    }
};

interface ThemeDefaultProps {
    children: React.ReactNode;
}
function ThemeDefault({ children }: ThemeDefaultProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeDefault;




