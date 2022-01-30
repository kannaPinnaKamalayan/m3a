import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Analysis from "./pages/analysis";
import Admin from "./pages/admin";
import StockDetectSales from "./pages/StockDetectSales";
import StocksEnterStock from "./pages/StockEnterStock";
import Hubs from "./pages/hubandshop";
import StocksStore from "./pages/StocksStore";
import StocksHub from "./pages/StocksHub";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/analysis">
          <Analysis />
        </Route>

        <Route exact path="/hubs">
          <Hubs />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/stockstore">
          <StocksStore />
        </Route>

        <Route exact path="/stockhub">
          <StocksHub />
        </Route>
        <Route exact path="/addstock">
          <StocksEnterStock />
        </Route>
        <Route exact path="/detectsales">
          <StockDetectSales />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
