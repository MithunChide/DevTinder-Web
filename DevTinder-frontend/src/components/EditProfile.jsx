import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../utils/constans";
import { useDispatch } from 'react-redux';
import UserCard from './UserCard';
import { addUser } from "../utils/userSlice"

const EditProfile = ({user}) => {
   const [firstName, setFirstName] = useState(user?.data?.firstName || '');
   const [lastName, setLastName] = useState(user?.data?.lastName || '');
   const [about, setAbout] = useState(user?.data?.about || '');
   const [age, setAge] = useState(user?.data?.age || '');
   const [gender, setGender] = useState(user?.data?.gender || '');
   const [photoUrl, setPhotoUrl] = useState(user?.data?.photoUrl || '');
   const [error, setError] = useState("");
   const [showToast, setShowToadt] = useState(false);
   const dispatch = useDispatch();

    const saveProfile = async () => {
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", {
                firstName, lastName, age, gender, about, photoUrl
            }, {
                withCredentials: true
            });
            dispatch(addUser(res?.data))
            setShowToadt(true);
            setTimeout(() => setShowToadt(false), 2000);
        } catch(err) {
            setError(err.response.data, "Something went wrong");
        }
    }

  return (
<>
    <div className='flex justify-center gap-6'>
     <div className="flex justify-center my-6">
             <div className="card bg-neutral w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">Edit Profile</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">First Name:</span>
                        </label>
                        <input 
                            type="text" 
                            value={firstName}
                            placeholder="First Name" 
                            className="input input-bordered w-full max-w-xs my-2" 
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text-alt">Last Name: </span>
                        </label>
                        <input 
                            type="text" 
                            value={lastName}
                            placeholder="Last Name" 
                            className="input input-bordered w-full max-w-xs my-2" 
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text-alt">Age:</span>
                        </label>
                        <input 
                            type="text" 
                            value={age}
                            placeholder="age" 
                            className="input input-bordered w-full max-w-xs my-2" 
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text-alt">Gender:</span>
                        </label>
                        <input 
                            type="text" 
                            value={gender}
                            placeholder="gender" 
                            className="input input-bordered w-full max-w-xs my-2" 
                            onChange={(e) => setGender(e.target.value)}
                        />
                         <label className="label">
                            <span className="label-text-alt">PhotoURL:</span>
                        </label>
                        <input 
                            type="text" 
                            value={photoUrl}
                            placeholder="url" 
                            className="input input-bordered w-full max-w-xs my-2" 
                            onChange={(e) => setPhotoUrl(e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text-alt">About:</span>
                        </label>
                        <input 
                            type="text" 
                            value={about}
                            placeholder="about" 
                            className="input input-bordered w-full max-w-xs my-2" 
                            onChange={(e) => setAbout(e.target.value)}
                        />
                        </div>
                        <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                    </div>
                </div>
            </div>
        </div>
        <UserCard user={{firstName, lastName, age, gender, about, photoUrl}}/>
    </div>
    
    {showToast && (
        <div className="toast toast-top toast-center">
        <div className="alert alert-success">
            <span>Your Profile saved successfully</span>
        </div>
    </div>
    )} 
</>
    
  )
}

export default EditProfile