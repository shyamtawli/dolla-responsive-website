import React, {useState} from "react";

const Signin = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("")
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleemail = (e) =>{
      setEmail(e.target.value);
    }
    const handlepass = (e) =>{
      setPassword(e.target.value);
    }
  return (

    <div className={"register-form"}>

    <form className={"form-container"} onSubmit={handleSubmit}>


        <label className={"headOfLogin"}>Login to your Account</label>
        <label className={"label"} for="email">Email</label>
        <input className={"text-input"} onChange={handleemail} value={email} type={"email"} id = "Email"  name="email"/>
        <label className={"label"}>Password</label>
        <input className={"text-input"} onChange={handlepass} value={password} type={"password"} id="password"  name="password"/>
        <button className={"btn"} type={"submit"}> Log In</button>
        <div>Don't hava an account?</div> 
        <a className={"a1"} href="https://somthing.com">Register here</a>
    </form>

    </div>
  )
}

export default Signin