import React from "react";
import "./Team.css";
class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          names: json
        });
      });
  }
  render() {
    return (
      <div>
        <div className="container-fluid team">
          <div className="row">
            <div className="col-md-12 ourTeam">
              <h3 className="textcontact">Our Team</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12  ">
              <p className="team-p">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry lorem ipsum Lorem Ipsum is simply dummy text of
                the printing
              </p>
              <p className="team-p">
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="container teamimage">           
            <div className="row">
            {this.state.names.map((item,index) => 
                (index< 4 && 
              <div className="col-md-3" key={item.id}>
                <div className="row">
                  <div className="col-md-12 ">
                    <img
                      className="nameImage"
                      src="http://cdn.onlinewebfonts.com/svg/img_184513.png"
                      alt="team-icon"
                    ></img>
                  </div>
                </div>
                <div className="row">

                  <div className="col-md-12 imagetext  ">
                    <h6>{item.name}</h6>
                    <p className="image-p"> Lorem ipsum dolor sit amet,</p>
                    <p className="image-p">
                      consectetur adipiscing elit, sed do
                    </p>
                    <p className="image-p">consectetur adipiscing elit, sed</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img
                      className="emailImage "
                      src="https://cdn.icon-icons.com/icons2/614/PNG/128/mail-open-symbol-of-an-envelope-with-a-letter-inside_icon-icons.com_56495.png"
                      alt="team-icon"
                    ></img>
                  </div>
                </div>
              </div>
          
            
            ))}
      </div></div>
      </div></div>
    );
  }
}
export default Team
