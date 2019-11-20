import React from 'react'
import './Contact.css'
class  Contact extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city:'',
            email:'',
            textarea:''
        }
    }
    InputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);     
    }
    onFormSubmitted = (e) => {
         alert('Form  was submitted'); 
        e.preventDefault ();  
       this.setState({ name: '',
       address: '',
       city:'',
       email:'',
       textarea:'' }); 
    }
        render(){
    return (
        <div>
            <div className="container-fluid contact  ">
                <div className="row">
                    <div className="col-md-12 contact-heading">
                        <h3 className="textcontact">Contact</h3></div></div>
                <div className="row">
                    <div className="col-md-12 contact-p">
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem ipsum Lorem Ipsum is simply dummy text of the printing </p>
                        <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ipsum dolor sit amet. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-flex">
                        <form className="form" onSubmit={this.onFormSubmitted.bind(this)} >
                            <input type="text" name="name" value={this.state.name} placeholder="Enter your Name" className="input-filed"  onChange={this.InputChangeHandler} required></input>
                            <input type="text" name="address" value={this.state.address} placeholder="Enter your Address" className="input-filed"  onChange={this.InputChangeHandler}  required></input>
                            <input type="text" name="city" value={this.state.city} placeholder="Enter your city" className="input-filed"  onChange={this.InputChangeHandler}  required></input>
                            <input type="email" name="email" value={this.state.email} placeholder="Enter your Email Address" className="input-filed"  onChange={this.InputChangeHandler}  required></input>
                            <textarea type="text" rows="5" name="textarea" value={this.state.textarea} placeholder="Enter your Email Message" className="input-filed"  onChange={this.InputChangeHandler}  required></textarea>
                            <button type="submit" className="btn btn-dark submit-btn" >Submit</button>
                        </form>
                    </div>
                </div>
               
            </div>
        </div>


    )
}
}
export default Contact