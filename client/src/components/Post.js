import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { PostRegistration } from "../services/PostService";
import Message from "../elements/Message";
import Error from "../elements/Error";
import {
  POST_FIELDS,
  REGISTRATION_MESSAGE,
  ERROR_IN_REGISTRATION
} from "../MessageBundle";
import axios from "axios";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      price: "",
      phone_number: "",
      image: "",
      post: false,
      error: false
    };
  }

  handleOnChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleOnChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleOnChangePrice = e => {
    this.setState({
      price: e.target.value
    });
  };

  handleOnChangePhoneNumber = e => {
    this.setState({
      phone_number: e.target.value
    });
  };

  handleOnChangeImage = e => {
    this.setState({
      image: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      phone_number: this.state.phone_number,
      image: this.state.image
    };

    const postStatus = await PostRegistration(data);
    if (postStatus === 200) {
      this.setState({
        title: "",
        description: "",
        price: "",
        phone_number: "",
        image: "",
        error: false
      });
    } else
      this.setState({
        error: true,
        post: false
      });
  };

  render() {
    const { post, error } = this.state;
    if (this.state.post) {
      return <Redirect to={{ pathname: "/dashboard" }} />;
    }
    return (
      <div className="Registration">
        <h1>{POST_FIELDS.POST_HEADING}</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <div className="fields">
              <p>{POST_FIELDS.TITLE}</p>
              <input
                type="text"
                value={this.state.title}
                name="Title"
                onChange={this.handleOnChangeTitle}
                required
              />
            </div>
            <div className="fields">
              <p>{POST_FIELDS.DESCRIPTION}</p>
              <textarea
                type="text"
                value={this.state.description}
                name="Description"
                onChange={this.handleOnChangeDescription}
                required
              />
            </div>
            <div className="fields">
              <p>{POST_FIELDS.PRICE}</p>
              <input
                type="number"
                value={this.state.price}
                name="Price"
                onChange={this.handleOnChangePrice}
                required
              />
            </div>
            <div className="fields">
              <p>{POST_FIELDS.PHONE_NUMBER}</p>
              <input
                type="text"
                value={this.state.phone_number}
                name="Phone_Number"
                onChange={this.handleOnChangePhoneNumber}
                required
              />
            </div>
            <div className="fields">
              <p>File Upload</p>
              <input
                type="text"
                value={this.state.image}
                name="image"
                onChange={this.handleOnChangeImage}
                required
              />
            </div>

            <br></br>
            <div className="buttons">
              <button type="submit" className="btn btn-primary">
                {POST_FIELDS.POST}
              </button>
              <Link to="/login">{POST_FIELDS.CANCEL}</Link>
            </div>
          </div>
          <br></br>
        </form>
        {error && <Error message={ERROR_IN_REGISTRATION} />}
        {post && <Message message={REGISTRATION_MESSAGE} />}
      </div>
    );
  }
}
