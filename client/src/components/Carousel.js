import React from "react";
import { Carousel } from "react-bootstrap/Carousel";

function Carousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDYyMTU1Mjc1/bill-murray-9542510-1-402.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://vsco.co/zakaryjullot/media/58ee51c982b72d066055fa04"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://vsco.co/zakaryjullot/media/5536dd5405561583188b457e"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel;
