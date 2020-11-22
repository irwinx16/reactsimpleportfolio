import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3">
          <div className="card border-0">
            <img className="card-img-top rounded-circle" src="https://placehold.co/600" alt="headshot" />
            <div className="card-body">
              <h2 className="card-title"> My Name</h2>
              <hr />
              <p className="card-text h4">My Title</p>
            </div>
          </div>
        </div>
        <div className="col-8 offset-1">
          <div className="jumbotron bg-transparent m-0 p-1">
            <blockquote className="blockquote">
              <p className="lead">
                Pinterest thundercats venmo waistcoat lomo stumptown, poutine yr la croix quinoa photo booth. Keffiyeh cloud bread raclette typewriter humblebrag man braid, kitsch irony vaporware shoreditch polaroid. Snackwave plaid try-hard
                williamsburg yr. Cliche jean shorts leggings snackwave, celiac twee ethical squid hashtag cloud bread williamsburg enamel pin synth.
              </p>
              <Link to="/resume" className="btn btn-dark" role="button">
                Learn more
              </Link>
            </blockquote>
            <hr />
          </div>

          <h2 className="mb-5 text-center">Get in touch</h2>

          <div className="row justify-content-around">
            <a href="https://github.com/?" target="_black">
              <img src="https://docs.google.com/uc?id=1qenoe8B7YbccuDpLAmO312lxnVhy21s1" className="w-75" alt="github_icon" />
            </a>
            <a href="https://www.linkedin.com/in/?" target="_black">
              <img src="https://docs.google.com/uc?id=1DKGdcSWxeKopkfW_jeppr8xhrPbQW5BO" className="w-75" alt="linkedin_icon" />
            </a>
            <a href="mailto:your@email.com?subject=Interview Request - <POSITION>" target="_black">
              <img src="https://docs.google.com/uc?id=1XoFHduV6hfyasUBGMGYBNBQr6jXNnC_p" className="w-75" alt="email_icon" />
            </a>
            <a href="" target="_black">
              <img src="https://docs.google.com/uc?id=11DqVBbRU5SkAaCGYHovOj6lNZ12HvfDx" className="w-75" alt="resume_icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
