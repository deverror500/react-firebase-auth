import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import UserProfile from "./pages/profile/UserProfile";
import Header from "./components/home/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/myProfile" exact element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
