import "./App.css";

import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Page } from "./components/Page/Page";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Page>
        <Home />
      </Page>
      <NavBar />
    </div>
  );
}

export default App;
