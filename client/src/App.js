import React, { useEffect } from "react";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import { Container } from "reactstrap";

import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => store.dispatch(loadUser()), []);
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
