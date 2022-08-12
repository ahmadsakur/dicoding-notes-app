import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
      titleMaxLength: 50,
      charLength: 0,
    };
  }

  // Handle Title Change Function
  handleTitleChange = (e) => {
    let title = e.target.value;
    const limit = this.state.titleMaxLength;
    const inputTitle = title.slice(0, limit);

    this.setState((data) => {
      return {
        ...data,
        title: inputTitle,
      };
    });
  };
  // Handle Note Change
  handleNoteChange = (e) => {
    this.setState({ note: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.note,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    if(this.state.title.length <= 0 || this.state.note.length <= 0){
      alert("Notes form had to be filled!")
    } else {
      this.props.onSubmit(data);
      this.setState({
        title: "",
        note: "",
      });
    }
  };

  render() {
    return (
      <div className="flex flex-col flex-1 justify-center">
        <div className="w-full sm:w-1/2 mx-auto">
          <div className="flex flex-row justify-between">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Title
            </label>
            <span className="block mb-2 text-sm font-medium text-gray-900 ">
              Char Limit : {this.state.titleMaxLength - this.state.title.length}
            </span>
          </div>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Note Title ..."
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="w-full sm:w-1/2 mx-auto">
          <label
            htmlFor="note"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Note
          </label>
          <textarea
            id="note"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Insert your note here"
            value={this.state.note}
            onChange={this.handleNoteChange}
          ></textarea>
        </div>
        <div className="w-full sm:w-1/2 mx-auto mt-2">
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Insert
          </button>
        </div>
      </div>
    );
  }
}
