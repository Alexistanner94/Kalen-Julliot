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
import { Image } from "cloudinary-react";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      price: "",
      phone_number: "",
      image: "",
      file: null,
      post: false,
      error: false,
      upload: false
    };

    // Defined as local variable
    this.widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dk6qbnew3",
        uploadPreset: "wcd5iji1"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          this.setState({
            image: result.info.secure_url,
            upload: true
          });
        }
      }
    );

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectorFiles) {
    console.log(selectorFiles);
    this.setState({
      file: selectorFiles[0]
    });
  }

  handleOnChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleOnChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  };

  handleOnChangePrice = (e) => {
    this.setState({
      price: e.target.value
    });
  };

  handleOnChangePhoneNumber = (e) => {
    this.setState({
      phone_number: e.target.value
    });
  };

  handleOnChangeFile = (e) => {
    let file_name = e.target.files[0].name;
    console.log(file_name);
    var path = (window.URL || window.webkitURL).createObjectURL(
      e.target.files[0]
    );
    console.log("path", path);
    //this.handleChange(e.target.files)
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      phone_number: this.state.phone_number,
      image: this.state.image
    };

    const postStatus = await PostRegistration(data);
    console.log("postResult", postStatus.data);
    if (postStatus === 200) {
      this.setState({
        title: "",
        description: "",
        price: "",
        phone_number: "",
        image: "",
        file: "",
        post: true,
        error: false,
        upload: true
      });
    } else
      this.setState({
        error: true,
        post: false,
        upload: false
      });
  };

  showWidget = (widget) => {
    this.widget.open();
  };

  checkUploadResult = (resultEvent) => {
    if (resultEvent.event === "success") {
      console.log(resultEvent.info.secure_url);
    }
  };

  render() {
    const { post, error } = this.state;
    if (this.state.post) {
      return <Redirect to={{ pathname: "/dashboard" }} />;
    }
    const divStyle = {
      color: "green"
    };
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
            {this.state.upload ? null : (
              <div>
                <button
                  id="upload_widget"
                  class="cloudinary-button"
                  onClick={this.showWidget}
                >
                  Upload files
                </button>
              </div>
            )}
            {this.state.upload ? (
              <div style={divStyle}>
                <p>Image successsfuly uploaded</p>
              </div>
            ) : null}
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
