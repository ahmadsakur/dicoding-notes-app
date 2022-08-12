import React, { Component } from "react";
import Card from "./components/Card";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { getInitialData, showFormattedDate } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialData: getInitialData(),
      // query: []
    };

    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleSubmitValue = this.handleSubmitValue.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleArchive = this.handleArchive.bind(this);
  }
  render() {
    return (
      <>
        <Header />
        <section className="w-full px-8 text-gray-700 bg-white">
          <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <div className="mx-auto">Form Here</div>
          </div>
          <div className="flex flex-col md:flex-row w-full px-8 justify-between gap-x-2">
            <CardList title="Notes"/>
            <CardList title="Archive"/>
          </div>
        </section>
      </>
    );
  }
}

export default App;
