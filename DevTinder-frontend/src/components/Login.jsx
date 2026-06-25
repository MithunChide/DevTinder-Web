import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constans";

const Login = () => {
    const [emailId, setEmailId] = useState("mithun@gmail.com");
    const [password, setPassword] = useState("Mithun@143");
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post( BASE_URL + "/login", {
                emailId,
                password
            }, 
            {
                withCredentials: true
            });
            dispatch(addUser(res.data))
            navigate("/")
           
        } catch(err) {
            setError(err?.response?.data || "Something went wrong")
        }
    }

  return (
        <div className="flex justify-center my-6">
             <div className="card bg-neutral w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div className="form-control w-full max-w-xs">
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
                        <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login;