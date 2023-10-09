import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Details from "./Views/Details/Details";
import Form from "./Views/Form/Form";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Views/Home/Home";

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <BrowserRouter>
        <NavBar />

        <Route path="/details/:id" component={Details} />
        <Route path="/home" component={Home} />
        <Route path="/form" component={Form} />
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
