import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ternary from "./components/01ternaryOperator";
import Style from "./components/02inlineStyle";
import TinS from "./components/03ternaryInStyle";
import ListArray from "./components/04listMap";
import ObjectMap from "./components/05objectMap";
import Age from "./components/07statesAge";
import Input from "./components/08statesInputValue";
import Show from "./components/09showText";
import Color from "./components/10textColor";
import Count from "./components/11exersizeCount";
import Todo from "./components/12todoExample";
import Example from "./components/todo";
import UseEffect from "./components/14textUseeffect";
import API from "./components/15fetchAPI";
import API1 from "./components/16fetchPartyEx";
import APIAGE from "./components/17apiAgeEx";
import { Home } from "./components/19reactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Form } from "./components/20form";
import ToggleFunction from "./components/21toggle";
import CountHook from "./components/23countUsingHook";
import { Provider } from "react-redux";
import { store } from "./store";
import { Homes } from "./pagesForRedux/Home";
import { Contact } from "./pagesForRedux/Contact";
import { Login } from "./pagesForRedux/Login";

//by using the Context method you can pass the props for all the pages

export const AppContext = createContext();
function App() {
  const client = new QueryClient();
  const [userName, setUserName] = useState("Praveen L");
  //NORMAL FUNCTION

  // const User = () => {
  //   return (
  //     <div>
  //       <h1>Pruthvi</h1>
  //       <h1>24</h1>
  //       <h1>Pruthvi@gmail.com</h1>
  //     </div>
  //   );
  // };

  //Props-> props are the javascript objects that exists inside the argument of some sort of components

  const User = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.email}</h1>
      </div>
    );
  };

  // const name = <h1>Pruthvi</h1>;
  // const age = <h2>24</h2>;
  // const email = <h3>pruthvi@gmail.com</h3>;

  // const user = (
  //   <div>
  //     {name}
  //     {age}
  //     {email}
  //   </div>
  // );
  return (
    <div className="App">
      {/* //Here we use the App context */}
      {/* Provider provides the data to the below components */}
      {/* Then pass the Props */}
      <AppContext.Provider value={{ userName, setUserName }}>
        <QueryClientProvider client={client}>
          <Provider store={store}>
            <Router>
              <Link to="/"> Home </Link>
              <Link to="/login"> Login </Link>
              <Link to="/contact"> Contact </Link>
              {/* <div>
          <Link to="/ternary">Ternary</Link>
          <Link to="/style">Style</Link>
          <Link to="/ternaryinstyle">TinS</Link>
          <Link to="/listmap">ListArray</Link>
          <Link to="/objectmap">ObjectMap</Link>
        </div> */}
              <Routes>
                <Route path="/" element={<Homes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/home" element={<Home />} />
                <Route
                  path="/ternary"
                  //without useContext we need to pass the props like here userName={userName} setUserName={setUserName} inside
                  // which ever the page you want to change
                  element={<Ternary />}
                />
                <Route path="/style" element={<Style />} />
                <Route path="/ternaryinstyle" element={<TinS />} />
                <Route path="/listmap" element={<ListArray />} />
                <Route path="/objectmap" element={<ObjectMap />} />
                <Route path="/statesage" element={<Age />} />
                <Route path="/input" element={<Input />} />
                <Route path="/showtext" element={<Show />} />
                <Route path="/count" element={<Count />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/useeffect" element={<UseEffect />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/api1" element={<API />} />
                <Route path="/api2" element={<API1 />} />
                <Route path="/api3" element={<APIAGE />} />
                {/* //page not found route */}
                {/* <Route path="*" element={<h1>OOPS Page Not Found !!</h1>} /> */}
                <Route path="/form" element={<Form />} />
                <Route path="/toggle" element={<ToggleFunction />} />
                <Route path="/counthook" element={<CountHook />} />
              </Routes>
            </Router>
          </Provider>
        </QueryClientProvider>
      </AppContext.Provider>

      {/* <APIAGE />
      <API1 />
      <API />
      <UseEffect />
      <Example />
      <Todo />
      <Count />
      <Show />
      <Color />
      <Input />
      <Age />
      <User name="Pruthvi" age={24} email="pruthvi@123" />
      <User name="balu" age={23} email="balu@1999" />
      <Ternary />
      <Style />
      <TinS />
      <ListArray />
      <ObjectMap /> */}
      {/* <User />
      <User /> */}
      {/* <h1>{user}</h1>
      <h1>{user}</h1>
      <h1>{user}</h1>
      <h1>{user}</h1> */}
    </div>
  );
}
export default App;
