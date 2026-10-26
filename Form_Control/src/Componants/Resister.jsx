
import { useState } from "react";

function Register() {

    // Store all input values
    const [input, setInput] = useState({
        name: "",
        usn: "",
        email: "",
        pass: "",
        cpass: "",
        mobile: ""
    });

    // Store error messages
    const [error, setError] = useState({});


    // Runs whenever the user types
    function handleInputs(e) {

        const name = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [name]: value
        });

        // Remove error for that input
        setError({
            ...error,
            [name]: ""
        });
    }


    // Check all inputs
    function validate() {

        let errors = {};


        // Name validation
        if (input.name === "") {
            errors.name = "Name is required";
        }
        else if (input.name.length < 3) {
            errors.name = "Name must have at least 3 characters";
        }
        else if (!/^[A-Za-z ]+$/.test(input.name)) {
            errors.name = "Name should contain only letters";
        }


        // Username validation
        if (input.usn === "") {
            errors.usn = "Username is required";
        }
        else if (input.usn.length < 6) {
            errors.usn = "Username must have at least 6 characters";
        }


        // Email validation
        if (input.email === "") {
            errors.email = "Email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
            errors.email = "Enter a valid email";
        }


        // Password validation
        if (input.pass === "") {
            errors.pass = "Password is required";
        }
        else if (input.pass.length < 6) {
            errors.pass = "Password must have at least 6 characters";
        }
        else if (!/[A-Z]/.test(input.pass)) {
            errors.pass = "Password must contain one uppercase letter";
        }
        else if (!/[0-9]/.test(input.pass)) {
            errors.pass = "Password must contain one number";
        }


        // Confirm password
        if (input.cpass === "") {
            errors.cpass = "Please confirm your password";
        }
        else if (input.pass !== input.cpass) {
            errors.cpass = "Passwords do not match";
        }


        // Mobile validation
        if (input.mobile === "") {
            errors.mobile = "Mobile number is required";
        }
        else if (!/^[6-9]\d{9}$/.test(input.mobile)) {
            errors.mobile = "Enter a valid 10-digit mobile number";
        }


        setError(errors);

        // If errors object is empty, form is valid
        return Object.keys(errors).length === 0;
    }


    // Runs when Register button is clicked
    function handleSubmit(e) {

        e.preventDefault();

        if (validate()) {
            alert("Registration Successful!");
            console.log(input);
        }
    }


    return (
        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow p-4 mt-5">

                        <h2 className="text-center mb-4">
                            Registration Form
                        </h2>


                        <form onSubmit={handleSubmit}>

                            {/* Name */}
                            <label>Name:</label>

                            <input
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={handleInputs}
                                className="form-control"
                                placeholder="Enter your name"
                            />

                            <span className="text-danger">
                                {error.name}
                            </span>


                            {/* Username */}
                            <label className="mt-3">
                                Username:
                            </label>

                            <input
                                type="text"
                                name="usn"
                                value={input.usn}
                                onChange={handleInputs}
                                className="form-control"
                                placeholder="Enter username"
                            />

                            <span className="text-danger">
                                {error.usn}
                            </span>


                            {/* Email */}
                            <label className="mt-3">
                                Email:
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={handleInputs}
                                className="form-control"
                                placeholder="Enter email"
                            />

                            <span className="text-danger">
                                {error.email}
                            </span>


                            {/* Password */}
                            <label className="mt-3">
                                Password:
                            </label>

                            <input
                                type="password"
                                name="pass"
                                value={input.pass}
                                onChange={handleInputs}
                                className="form-control"
                                placeholder="Enter password"
                            />

                            <span className="text-danger">
                                {error.pass}
                            </span>


                            {/* Confirm Password */}
                            <label className="mt-3">
                                Confirm Password:
                            </label>

                            <input
                                type="password"
                                name="cpass"
                                value={input.cpass}
                                onChange={handleInputs}
                                className="form-control"
                                placeholder="Confirm password"
                            />

                            <span className="text-danger">
                                {error.cpass}
                            </span>


                            {/* Mobile */}
                            <label className="mt-3">
                                Mobile Number:
                            </label>

                            <input
                                type="text"
                                name="mobile"
                                value={input.mobile}
                                onChange={handleInputs}
                                className="form-control"
                                placeholder="Enter mobile number"
                            />

                            <span className="text-danger">
                                {error.mobile}
                            </span>


                            {/* Button */}
                            <button
                                type="submit"
                                className="btn btn-primary w-100 mt-4"
                            >
                                Register
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;
