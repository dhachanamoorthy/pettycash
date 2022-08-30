import "./App.css";

import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Page } from "./components/Page/Page";
import { Home } from "./pages/Home";
import { Loader } from "./components/Loader/Loader";
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Page>
        <Loader/>
      </Page>
      <NavBar />
    </div>
  );
}

export default App;
