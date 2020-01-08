import React from "react";

function Container() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            {" "}
            About{" "}
          </a>
          <a class="navbar-brand" text="center" href="#">
            {" "}
            Gallery{" "}
          </a>
          <a class="navbar-brand" href="#">
            Show your Work!{" "}
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign Up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" scr="/Form">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead text-center text-white">
        <div class="masthead-content">
          <div class="container">
            <h1 class="masthead-heading mb-0">
              Visual Arts of Kalen & Julliot
            </h1>
            {/* <h2 class="masthead-subheading mb-0"></h2> */}
          </div>
        </div>
      </header>

      <section />
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img
                class="img-fluid rounded-circle"
                src="images/zak1.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">Creativity takes courage </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                aliquid, mollitia odio veniam sit iste esse assumenda amet
                aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                voluptatum molestiae adipisci, beatae obcaecati.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section />

      <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="p-5">
                <img
                  class="img-fluid rounded-circle"
                  src="images/zak2.png"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <h2 class="display-4">
                  “Every child is an artist. The problem is how to remain an
                  artist once we grow up.”
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section />
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img
                class="img-fluid rounded-circle"
                src="images/zak3.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">
                "Art enables us to find ourselves and lose ourselves at the same
                time."
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                aliquid, mollitia odio veniam sit iste esse assumenda amet
                aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                voluptatum molestiae adipisci, beatae obcaecati.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section />
    </div>
  );
}

export default Container;
