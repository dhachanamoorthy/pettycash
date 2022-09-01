import "./App.css";

import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Page } from "./components/Page/Page";
import { Loader } from "./components/Loader/Loader";
import { Error_404 } from "./components/Error/404";
import { Home } from "./pages/Home/Home";
import { Report } from "./pages/Report";
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Page>
        <Home/>

      </Page>
      <NavBar />
    </div>
  );
}

export default App;
