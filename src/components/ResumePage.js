import React from "react";

export const ResumePage = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">
          <h1 className="display-4">Developer Name</h1>
          <hr />
          <h3 className="lead">Developer Title</h3>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm-12 col-md-4">
          <h3>
            Skills
            <hr />
          </h3>
          <p>
            <ul className="list-unstyled">
              <li>Mongo, JavaScript, React,</li>
              <li>NodeJs, ExpressJs, AWS,</li>
              <li>PostgreSQL, Heroku, Git,</li>
              <li>HTML, Bootstrap, CSS,</li>
            </ul>
          </p>

          <h3 className="mt-5">
            Education
            <hr />
          </h3>
          <p>
            <span className="font-weight-bold">School Name</span> <br />
            <span>Field of study</span> <br />
            <span className="font-italic">Degree</span> <br />
            <span className="font-weight-lighter small">Month year - Month year</span>
          </p>
          <p>
            <span className="font-weight-bold">School Name</span> <br />
            <span>Field of study</span> <br />
            <span className="font-italic">Degree</span> <br />
            <span className="font-weight-lighter small">Month year - Month year</span>
          </p>
          <p>
            <span className="font-weight-bold">School Name</span> <br />
            <span>Field of study</span> <br />
            <span className="font-italic">Degree</span> <br />
            <span className="font-weight-lighter small">Month year - Month year</span>
          </p>
        </div>

        <div className="col-sm-12 col-md-8">
          <h3>
            Summary
            <hr />
          </h3>
          <p>
            Whatever pabst williamsburg, direct trade lumbersexual tumblr stumptown shabby chic sustainable. Meggings shaman humblebrag four loko vape, before they sold out post-ironic meditation heirloom la croix gastropub lyft. Post-ironic prism
            pug farm-to-table neutra. Lyft echo park poutine, intelligentsia art party bushwick typewriter taiyaki.
          </p>

          <h3 className="mt-5">
            Experience
            <hr />
          </h3>
          <div className="mb-4">
            <p>
              <span className="font-weight-bold">Company Name, ​</span>
              <span className="font-italic">​Position Title</span> <br />
              <span className="font-weight-lighter small">Month year - Month year | City, State.</span>
            </p>
            <ul>
              <li>Bushwick glossier man braid blog, godard kale chips kickstarter deep v farm-to-table flexitarian echo park you probably haven't heard of them seitan single-origin coffee</li>
            </ul>
          </div>

          <div className="mb-4">
            <p>
              <span className="font-weight-bold">Company Name, ​</span>
              <span className="font-italic">​Position Title</span> <br />
              <span className="font-weight-lighter small">Month year - Month year | City, State.</span>
            </p>
            <ul>
              <li>Fanny pack hammock whatever migas locavore celiac hashtag keytar austin af.</li>
              <li>Narwhal roof party lyft lumbersexual thundercats hexagon hella beard.</li>
              <li>Readymade live-edge cray direct trade, VHS unicorn tbh YOLO keffiyeh taiyaki.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p>
              <span className="font-weight-bold">Company Name,​ </span>
              <span className="font-italic">​Position Title</span> <br />
              <span className="font-weight-lighter small">Month year - Month year | City, State.</span>
            </p>

            <p>
              <span className="font-weight-bold">Project 1 name</span>
            </p>
            <ul>
              <li>Crucifix irony copper mug est snackwave banjo marfa man braid whatever flannel.</li>
              <li>Lo-fi ut aesthetic, biodiesel succulents kickstarter bushwick meditation YOLO proident vice plaid humblebrag before they sold out flexitarian.</li>
              <li>Man braid schlitz velit proident, everyday carry ullamco dreamcatcher.</li>
              <li>Pop-up knausgaard twee glossier hoodie.</li>
            </ul>

            <p>
              <span className="font-weight-bold">Project 2 name</span>
            </p>
            <ul>
              <li>Banjo waistcoat glossier, jianbing hammock edison bulb direct trade cred raclette.</li>
              <li>Roof party seitan anim banjo tousled trust fund, godard sriracha gochujang.</li>
              <li>Keffiyeh salvia duis, sriracha drinking vinegar gochujang migas quinoa meditation voluptate.</li>
              <li>XOXO truffaut tousled, chicharrones nisi sartorial post-ironic YOLO ipsum laborum microdosing hoodie dolore.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
