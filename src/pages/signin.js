
import React, {useState} from "react";
import {NavLogo} from "../components/Navbar/NavbarElements";

const Signin = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("")
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (

    <div className={"register-form"}>

    <form className={"form-container"} onSubmit={handleSubmit}>


        <label className={"headOfLogin"}>login to your acount</label>
        <label className={"label"} for="email">Email:</label>
        <input className={"text-input"} value={email} type={"email"} id = "Email"  name="email"/>
        <label className={"label"} htmlFor="password">Password:</label>
        <input className={"text-input"} value={password} type={"password"} id="password"  name="password"/>
        <button className={"btn"} type={"submit"}> log in</button>
        <div>Don't hava an account?</div> <a className={"a1"} href="https://somthing.com">register here</a>
    </form>

    </div>
  )
}

export default Signin