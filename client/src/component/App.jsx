import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
          <div><Header/></div>
            <Route path="/" exact Component={StreamList} />
            <Route path="/streams/new" exact Component={StreamCreate} />
            <Route path="/streams/delete" exact Component={StreamDelete} />
            <Route path="/streams/edit" exact Component={StreamEdit} />
            <Route path="/streams/show" exact Component={StreamShow} />
          </div>
        </BrowserRouter>
        App Component
      </div>
    );
  }
}

export default App;
