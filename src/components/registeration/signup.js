import React, {Component}  from "react";
import loginImg from "../../login.svg";
import Form from "react-bootstrap/Form";
import "./signup.css"


export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            fullName: "",
            password: "",
            repeatPassword: "",
            gender: "",
            userNameError: "",
            fullNameError: "",
            passwordError: "",
            repeatPasswordError: ""


        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    validateForm(){
        let isValid = true
        if(!this.state.userName){
            this.setState({userNameError : "Requiered"})
            isValid =  false
        }
        if(!this.state.fullName){
            this.setState({fullNameError : "Requiered"})
            isValid =  false
        }
        if(!this.state.password){
            this.setState({passwordError : "Requiered"})
            isValid = false
        }
        if(!this.state.repeatPassword){
            this.setState({passwordError : "Requiered"})
            isValid = false
        }
       
        return isValid
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({userNameError: "", fullNameError: "", passwordError: "",repeatPasswordError: ""})
        const isValid = this.validateForm()  
    
        if (isValid) {
            const {name, value} = event.target
            this.setState({
                [name] : value
            })
            console.log(this.state)

        }        
    }

    render() {
        return (
            <div className="body">
                 <header className = "head">
                    <h1>Welcome to veterans league</h1>
                    <img id="img1" src={loginImg}></img>    
                </header>

                <h1>Sign up for free</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="input"
                        name= "userName" 
                        placeholder= "userName" 
                        onChange= {this.handleChange} 
                        value={this.state.userName}>
                    </input>
                    <div style={{color: "red"}}>{this.state.userNameError}</div> 
                    <br/>
                    
                    <input className="input"
                        name= "fullName" 
                        placeholder= "fullName" 
                        onChange= {this.handleChange}
                        value={this.state.fullName}>
                    </input>
                    <div style={{color: "red"}}>{this.state.fullNameError}</div>
                    <br/>

                    <input className="input"
                        name= "password" 
                        placeholder= "password" 
                        onChange= {this.handleChange}
                        value={this.state.password}>
                    </input>
                    <div style={{color: "red"}}>{this.state.passwordError}</div>

                    <br/>

                    <input className="input"
                        name= "repeatPassword" 
                        placeholder= "repeat password" 
                        onChange= {this.handleChange} 
                        value={this.state.repeatPassword} >
                    </input>
                    <div style={{color: "red"}}>{this.state.repeatPasswordError}</div>
                    <br/>

{/*                     <label className="input">
                        
                        <input 
                            type = "radio" 
                            name = "gender" 
                            value = "male"
                            checked = {this.state.gender === "male"}
                            onChange = {this.handleChange}
                        />
                        male
                        <input 
                            type = "radio" 
                            name = "gender" 
                            value = "female"
                            checked = {this.state.gender === "female"}
                            onChange = {this.handleChange}
                        />
                        female
                    </label> */}
                    <br/>
                    <br/>
                    <button className= "button"> Sign Up </button>
                    <br/>   
                </form>
                <br/>
                <h4> Already have an account ? <a href="/">Login</a></h4>

           </div>

        )
    }
}














/**
 *  <div className="base-container">
            <div className="header">Signup</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullName">Email</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className= "btn">
                    Signup
                    </button>
                </div>
            </div>
        </div>
 */


 /**
  * import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /// and other goodies 
    }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
  */