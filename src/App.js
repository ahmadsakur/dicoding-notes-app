import React, { Component } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Header from "./components/Header";
import { getInitialData } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialData: getInitialData(),
      keyword: "",
    };

    this.handleArchive = this.handleArchive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Handle Archive Function
  handleArchive(data) {
    data.archived ? (data.archived = false) : (data.archived = true);
    this.setState([...this.state.initialData, data]);
  }

  // Handle Delete Function
  handleDelete(data) {
    this.setState({
      initialData: this.state.initialData.filter((item) => item.id !== data.id),
    });
  }

  // Handle Search Function
  handleSearch(e) {
    this.setState({
      keyword: e.target.value.toLowerCase(),
    });
  }

  // Handle Submit Function
  handleSubmit(data) {
    this.setState({
      initialData: [...this.state.initialData, data],
    });
  }

  render() {
    const filterData = this.state.initialData.filter((item) => {
      return item.title.toLowerCase().includes(this.state.keyword);
    });

    return (
      <>
        <Header handleSearch={this.handleSearch} />
        <section className="w-full px-8 text-gray-700 bg-white">
          <div className="container flex items-center justify-center mx-auto">
            <Form onSubmit={this.handleSubmit}/>
          </div>
        </section>
        <section className="w-full sm:px-8 text-gray-700 bg-white">
          <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"></div>
          <div className="flex flex-col md:flex-row w-full px-8 justify-between gap-x-2">
            <CardList
              data={filterData}
              title="Notes"
              isArchived={false}
              archive={this.handleArchive}
              deleteNote={this.handleDelete}
            />
            <CardList
              data={filterData}
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
