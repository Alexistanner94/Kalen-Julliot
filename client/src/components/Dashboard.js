import React from "react";
import ImgsViewer from "react-images-viewer";
import { Card, Button } from "react-bootstrap";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
import axios from "axios";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: []
    };
  }
  componentDidMount() {
    axios.get("/api/allPostData").then((response) => {
      this.setState({
        dataList: response.data
      });
      console.log(this.state.dataList[0].title);
    });
  }

  componentDidUpdate() {
    axios.get("/api/allPostData").then((response) => {
      this.setState({
        dataList: response.data
      });
      document.dataList = response.data;
    });
  }

  render() {
    function ReptileListItems() {
      const reptiles = ["alligator", "snake", "lizard"];

      return reptiles.map((reptile) => <li>{reptile}</li>);
    }

    function DataListItems() {
      //var dataList2;
      let reptiles = this.state.dataList;
      axios.get("/api/allPostData").then((response) => {
        reptiles = ["alligator", "snake", "lizard"];
      });

      return reptiles.map((data) => <li>{data}</li>);
    }
    return (
      <div>
        {this.state.dataList.map((anObjectMapped, index) => {
          // return <p key={anObjectMapped.title}>{anObjectMapped.title}</p>;

          return (
            <Card style={{ width: "18rem" }}>
              <Image
                key={anObjectMapped.Image}
                cloudName="dk6qbnew3"
                publicId={anObjectMapped.image}
                width="300"
                crop="scale"
              ></Image>
              <Card.Body>
                <Card.Title>{anObjectMapped.title}</Card.Title>
                <Card.Text>{anObjectMapped.description}</Card.Text>
                <Button variant="primary">{anObjectMapped.phone_number}</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
