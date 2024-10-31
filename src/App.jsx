import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Character from "./components/Characters/Character";
import Spells from "./components/Magic/Spells";
import Staff from "./components/Leaders/Staff";
import Navbar from "./components/Header/Navbar";
import StaffDetails from "./pages/staff-details/StaffDetails";
import RavenClaw from "./components/House/RavenClaw";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/staff" element={<Staff />} />
          <Route path="/characters" element={<Character />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/staff/:id" element={<StaffDetails />} />
          <Route path="/raven-claw" element={<RavenClaw />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
