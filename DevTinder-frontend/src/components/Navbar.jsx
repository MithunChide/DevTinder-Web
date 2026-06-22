import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constans";
import axios from "axios";

const Navbar = () => {

    const user = useSelector(store => store.user)
    
    const handleLogout = async () => {
      try {
          await axios.post(BASE_URL + "/logout", {}, {withCredentials:true})
      } catch(err) {
        console.error(err)
      }
    }

  return (
   <div className="navbar bg-neutral shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">👨‍💻DevTinder</Link>
  </div>
  { user && (
      <div className="flex gap-2 mx-6 items-center">
      <div className="px-2"> Welcome, {user.data?.firstName}</div>
      <div className="dropdown dropdown-end">
      
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="user photo"
              src={user.data?.photoUrl} />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><a>Settings</a></li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
      </div>
  )}
  
</div>
  )
}

export default Navbar