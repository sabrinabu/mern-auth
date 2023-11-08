import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Headers from "./components/Headers";
import Sidebar from "./pages/sidebar/Sidebar";
import { useSelector } from "react-redux";

export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser)
  return (
    <BrowserRouter>
      {/* header */}
      <Headers />

      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={currentUser? "": <Signin />} />
        <Route path="/sign-up" element={currentUser?"": <Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}
