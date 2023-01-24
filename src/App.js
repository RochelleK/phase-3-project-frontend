import "./App.css";
import Header from "./components/Header";
import PersonalProfile from "./components/PersonalProfile";
import Browse from "./components/Browse";
import Matches from "./components/Matches";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <PersonalProfile />
      <Browse />
      <Matches />
    </div>
  );
}

export default App;
