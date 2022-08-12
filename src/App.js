import React, { Component } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { getInitialData } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialData: getInitialData(),
    };

    this.handleArchive = this.handleArchive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  // Handle Archive Function
  handleArchive(data) {
    data.archived ? data.archived = false : data.archived = true;
    this.setState([...this.state.initialData, data]);
  }

  // Handle Delete Function
  handleDelete(data) {
    this.setState({
      initialData: this.state.initialData.filter((item) => item.id !== data.id),
    });
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
            <CardList
              data={this.state.initialData}
              title="Notes"
              isArchived={false}
              archive={this.handleArchive}
              deleteNote={this.handleDelete}
            />
            <CardList
              data={this.state.initialData}
              title="Archive"
              isArchived={true}
              archive={this.handleArchive}
              deleteNote={this.handleDelete}
            />
          </div>
        </section>
      </>
    );
  }
}

export default App;
