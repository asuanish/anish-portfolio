import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Global.styled";
import NavBar from "./components/layout/NavBar";
import { TopBanner } from "./components/layout/TopBanner";

function Main() {
  const theme = {
    colors: {
      white: "rgba(240, 247, 255,1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 206, 158,1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51,153, 1)",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TopBanner />
        <NavBar />
        <Header />
        <h1>Hello World this is Anish Joglekar!</h1>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Main;
