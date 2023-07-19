import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  console.log(user)

  return (
    <div class="loginback">
         <div class="logincontainer">
            <div class="loginheading">
               Login 
            </div>
            <form class="loginform" action="#">
               <div class="data">
                  <label>Username</label>
                  <input id="username" onChange={handleChange} type="text" required />
               </div>
               <div class="data">
                  <label>Password</label>
                  <input type="password" id="password" onChange={handleChange} required />
               </div>
               <div class="forgot-pass">
                  <a href="#">Forgot Password?</a>
               </div>
               <div class="btn">
                  <div class="inner"></div>
                  <button disabled={loading} onClick={handleClick}>login</button>
               </div>
                  {error && <span>{error.message}</span>}
               <div class="signup-link">
                  Not a member? <a href="/register">Signup now</a>
               </div>
            </form>
         </div>
    </div>
  );
};

export default Login;