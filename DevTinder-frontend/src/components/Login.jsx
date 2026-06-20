import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [emailId, setEmailId] = useState("mithun@gmail.com");
    const [password, setPassword] = useState("Mithun@143");
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:7777/login", {
                emailId,
                password
            }, 
            {
                withCredentials: true
            });
            dispatch(addUser(res.data))
            navigate("/")
           
        } catch(err) {
            console.error(err);
        }
    }

  return (
        <div className="flex justify-center my-6">
             <div className="card bg-neutral w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div className="form-control w-full max-w-xs my-4">
                        <label className="label">
                            <span className="label-text">Email Address:</span>
                        </label>
                        <input 
                            type="text" 
                            value={emailId}
                            placeholder="Email Address..." 
                            className="input input-bordered w-full max-w-xs my-2" 
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text-alt">Password:</span>
                        </label>
                        <input 
                            type="text" 
                            value={password}
                            placeholder="Password..." 
                            className="input input-bordered w-full max-w-xs my-2" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>

                    <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login;