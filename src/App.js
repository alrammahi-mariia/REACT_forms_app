import React, { Component } from "react";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import PostsList from "./PostsList";
import axios from "axios";
import EditForm from "./EditForm";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    showPopup: false,
    updatePopup: false,
    data: [],
    currentNote: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:3010/notes")
      .then((res) => this.setState({ data: res.data }));
  }

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popUpHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup }); // ! - toggle
  };

  closeHandler = () => {
    window.location.reload();
  };

  submitHandler = () => {
    axios
      .post("http://localhost:3010/notes", this.state.inputData)
      .then((res) => console.log(res))
      .catch((error) => console.log("error", error));

    this.closeHandler();
  };

  deleteHandler = (id) => {
    console.log("delete id", id);
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const notes = this.state.data.filter((item) => item.id !== id);
      this.setState({ data: notes });
    });
  };

  updateHandler = (item) => {
    this.setState({ updatePopup: true, currentNote: item });
  };

  inputUpdateHandler = (e) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        [e.target.name]: e.target.value,
      },
    });
  };

  postHandler = (id) => {
    axios
      .put(`http://localhost:3010/notes/${id}`, this.state.currentNote)
      .then((res) => res.data);
  };

  updatePutHandler = (id) => {
    axios.put(`http://localhost:3010/notes/${id}`, this.state.currentNote);
  };

  render() {
    return (
      <div>
        {this.state.updatePopup && (
          <EditForm
            {...this.state.currentNote}
            change={this.updateHandler}
            submit={this.updatePutHandler(this.state.currentNote.id)}
          />
        )}
        <Form change={this.inputHandler} submit={this.popUpHandler} />
        <View {...this.state.inputData} />
        <PostsList data={this.state.data} delete={this.deleteHandler} />
        {this.state.showPopup && (
          <Popup
            close={this.closeHandler}
            {...this.state.inputData}
            submit={this.submitHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
