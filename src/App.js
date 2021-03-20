import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddFakePlayer from "./components/AddFakePlayer/AddFakePlayer";
import Counter from "./components/Counter/Counter";
import CounterInput from "./components/CounterInput/CounterInput";
import CreatePlayer from "./components/CreatePlayer/CreatePlayer";
import Friend from "./components/Friend/Friend";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import JsonUser from "./components/JsonUser/JsonUser";
import NotFound from "./components/NotFound/NotFound";
import Player from "./components/Player/Player";
import SinglePlayer from "./components/SinglePlayer/SinglePlayer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/friend'>
          <Friend></Friend>
        </Route>
        <Route path='/jsonUser'>
          <JsonUser></JsonUser>
        </Route>
        <Route path='/player'>
          <Player></Player>
        </Route>
        <Route path='/singlePlayer/:playerId'>
          <SinglePlayer></SinglePlayer>
        </Route>
        <Route path='/addFakePlayer'>
          <AddFakePlayer></AddFakePlayer>
        </Route>
        <Route path='/createPlayer'>
          <CreatePlayer></CreatePlayer>
        </Route>
        <Route path='/counter'>
          <Counter></Counter>
        </Route>
        <Route path='/inputCounter'>
          <CounterInput></CounterInput>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
