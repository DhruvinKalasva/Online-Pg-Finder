import React, { useState } from 'react'
import "./Register.css"
import axios from "axios";

function Register() {

  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dmjtjncfo/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };

      await axios.post("/auth/register", newUser);

      alert("User details has been registered");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);



  return (
    
    <div class="registerbody">
  <div class="registercontainer">
    <div class="registerheading">Registration</div>
    <div class="registercontent">
      <form class="registerform" action="#">
        <div class="user-details">
          
          <div class="top-user">
          <div class="input-box username-box">
            <span class="details">Username</span>
            <input onChange={handleChange} id='username' type="text" placeholder="Enter your username" required />
          </div>
          <div class="input-box">
          <span class="details">Image</span>
          
            <label htmlFor="file">
                  <img class="userimage" htmlFor="file"
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                  />
                </label>
            <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
          </div>
          </div>

          <div class="input-box">
            <span class="details">Email</span>
            <input onChange={handleChange} id='email' type="email" placeholder="Enter your email" required />
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input onChange={handleChange} id='phone' type="text" placeholder="Enter your number" required />
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input onChange={handleChange} id='password' type="password" placeholder="Enter your password" required />
          </div>
        </div>
        
        <div>
          <button onClick={handleClick}>Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Register