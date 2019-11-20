import React from "react";
import "./Portfolio.css";
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json
        });

      });
  }
  render() {
    return (
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 portfolio">
              <h3 className="textcontact">Portfolio</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 portfolio">
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry lorem ipsum Lorem Ipsum is simply dummy text of
                the printing
              </p>
              <p>
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 buttonAll portfolio">
              <button type="button" className="btn btn-secondary">
                All
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-outline-primary">
                Design
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-outline-danger">
                Identity
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-outline-success">
                Photography
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-outline-info">
                Ilustration
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <div className="row  card1">
            {this.state.items.map((list, index) =>
             (index < 9 &&
              <div className="col-md-4 imageEffect" key={list.id}>
                <div className="card">
                  <img
                    className="card-img-top cardImage"
                    id="img01"
                    src={list.url}
                    alt="Card1 cap"
                  ></img>
                  <div className="overlay">
                  <i className="fa fa-link icon" ></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
