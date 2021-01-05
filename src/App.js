import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

import { Provider } from "./context";

class App extends Component {
  render() {
    // const name = "Hassan";
    // const showHello = false;
    // const showMath = true;
    // const num1 = 40;
    // const num2 = 30;

    // let math;
    // if (showMath) {
    //   math = (
    //     <h3>
    //       {num1} + {num2} = {num1 + num2}
    //     </h3>
    //   );
    // } else {
    //   math = null;
    // }

    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>

            {/* {showHello ? <h2>Hello {name.toUpperCase()}</h2> : null}
        {math} */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;