import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Details from "./Views/Details/Details";
import Form from "./Views/Form/Form";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Views/Home/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ViewAbout from "./Views/About/ViewAbout";

function App() {
  const navigate = useNavigate();
  const dataLoaded = useSelector((state) => state.dataLoaded);
  useEffect(() => {
    !dataLoaded && navigate("/");
  }, [dataLoaded]);

  return (
    <div className="App">
      {useLocation().pathname !== "/" ? <NavBar /> : null}

      <Routes>
        <Route path="/viewAbout" Component={ViewAbout} />
        <Route path="/details/:id" Component={Details} />
        <Route path="/home" Component={Home} />
        <Route path="/form" Component={Form} />
        <Route path="/" Component={Landing} />
      </Routes>
    </div>
  );
}

export default App;
