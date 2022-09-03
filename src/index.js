import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Home } from "./pages/Home/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Add } from "./pages/Home/Add";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/report" element={<Home />} />
          <Route path="/settings" element={<Home />} />
          <Route path="add" element={<Add />} />
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
