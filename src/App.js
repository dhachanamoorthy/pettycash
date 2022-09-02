import "./App.css";

import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Page } from "./components/Page/Page";
import { Home } from "./pages/Home/Home";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
export const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Page>
          <Home />
        </Page>
        <NavBar />
      </div>
    </ThemeProvider>
  );
};

export default App;
