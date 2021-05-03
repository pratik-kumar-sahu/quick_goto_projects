import React, { Component } from "react";
import RegisteredUser from "../RegisteredUser/RegisteredUser";
import "./SignUp.css";

const errors = [
  "",
  "Input field cannot be empty",
  "Name should be atleast 4 characters long",
  "Email should include @ and . symbols",
  "Phone number should be of 10 numbers",
  "Address should be atleast 6 characters long",
  "Password must be minimum 6 characters",
];

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    data: null,
    errorName: errors[0],
    errorEmail: errors[0],
    errorPhone: errors[0],
    errorAddress: errors[0],
    errorPassword: errors[0],
    loading: false,
  };

  clickHandler = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      address,
      password,
      loading,
      errorName,
      errorEmail,
      errorPhone,
      errorAddress,
      errorPassword,
    } = this.state;

    const errorArr = [
      errorName === errors[0],
      errorPassword === errors[0],
      errorEmail === errors[0],
      errorAddress === errors[0],
      errorPhone === errors[0],
    ];

    if (!name) {
      this.setState({
        errorName: errors[1],
      });
    }

    if (!email) {
      this.setState({
        errorEmail: errors[1],
      });
    }

    if (!phone) {
      this.setState({
        errorPhone: errors[1],
      });
    }

    if (!address) {
      this.setState({
        errorAddress: errors[1],
      });
    }

    if (!password) {
      this.setState({
        errorPassword: errors[1],
      });
    }

    if (
      name &&
      email &&
      phone &&
      address &&
      password &&
      !errorArr.includes(false)
    ) {
      this.setState({
        loading: !loading,
      });

      setTimeout(() => {
        this.setState({
          name: "",
          email: "",
          phone: "",
          address: "",
          password: "",
          data: {
            userName: this.state.name,
            greet: "Your data has been saved successfully ✌️",
          },
          loading: false,
        });
      }, 4000);
    }
  };

  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const val = value.trim();

    if (name === "name") {
      if (!val) {
        this.setState({
          [name]: value,
          errorName: errors[1],
        });
      } else if (val.length < 4) {
        this.setState({
          [name]: value,
          errorName: errors[2],
        });
      } else {
        this.setState({
          [name]: value,
          errorName: errors[0],
        });
      }
    }

    if (name === "email") {
      if (!val) {
        this.setState({
          [name]: value,
          errorEmail: errors[1],
        });
      } else if (val.includes("@") && val.includes(".")) {
        this.setState({
          [name]: value,
          errorEmail: errors[0],
        });
      } else {
        this.setState({
          [name]: value,
          errorEmail: errors[3],
        });
      }
    }

    if (name === "phone") {
      if (!val) {
        this.setState({
          [name]: value,
          errorPhone: errors[1],
        });
      } else if (val.length < 10 || val.length > 10) {
        this.setState({
          [name]: value,
          errorPhone: errors[4],
        });
      } else {
        this.setState({
          [name]: value,
          errorPhone: errors[0],
        });
      }
    }

    if (name === "address") {
      if (!val) {
        this.setState({
          [name]: value,
          errorAddress: errors[1],
        });
      } else if (val.length < 6) {
        this.setState({
          [name]: value,
          errorAddress: errors[5],
        });
      } else {
        this.setState({
          [name]: value,
          errorAddress: errors[0],
        });
      }
    }

    if (name === "password") {
      if (!val) {
        this.setState({
          [name]: value,
          errorPassword: errors[1],
        });
      } else if (val.length < 6) {
        this.setState({
          [name]: value,
          errorPassword: errors[6],
        });
      } else {
        this.setState({
          [name]: value,
          errorPassword: errors[0],
        });
      }
    }
  };

  render() {
    const { name, email, phone, address, password, loading } = this.state;

    return (
      <>
        <div className="container">
          <form className="form">
            <input
              name="name"
              type="text"
              className="form-input"
              value={name}
              autoFocus
              placeholder="Enter full name"
              onChange={this.changeHandler}
            />
            {this.state.errorName ? (
              <div className="error">{this.state.errorName}</div>
            ) : null}
            <input
              name="email"
              type="email"
              className="form-input"
              value={email}
              placeholder="Enter email"
              onChange={this.changeHandler}
            />
            {this.state.errorEmail ? (
              <div className="error">{this.state.errorEmail}</div>
            ) : null}
            <input
              name="phone"
              type="number"
              className="form-input"
              value={phone}
              placeholder="Enter phone number"
              onChange={this.changeHandler}
            />
            {this.state.errorPhone ? (
              <div className="error">{this.state.errorPhone}</div>
            ) : null}
            <input
              name="address"
              type="text"
              className="form-input"
              value={address}
              placeholder="Enter address"
              onChange={this.changeHandler}
            />
            {this.state.errorAddress ? (
              <div className="error">{this.state.errorAddress}</div>
            ) : null}
            <input
              name="password"
              type="password"
              className="form-input"
              value={password}
              placeholder="Enter password"
              onChange={this.changeHandler}
            />
            {this.state.errorPassword ? (
              <div className="error">{this.state.errorPassword}</div>
            ) : null}
            <input
              type="submit"
              value="Submit"
              className={loading ? "form-submit disabled" : "form-submit"}
              onClick={this.clickHandler}
            />
          </form>
        </div>

        <RegisteredUser data={this.state.data} loading={loading} />
      </>
    );
  }
}

export default SignUp;
