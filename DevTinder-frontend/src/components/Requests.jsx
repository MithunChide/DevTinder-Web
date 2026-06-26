import { useSelector } from 'react-redux'

import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constans'
import { useDispatch } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestSlice';


const Requests = () => {
    const requests = useSelector(store => store.request);
    const dispatch = useDispatch();

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, 
                {},
                 {
                withCredentials:true
            } )
            dispatch(removeRequest(_id))
        } catch (err) {
            console.error(err)
        }
    }

    const fetchRequest = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/receive", {
                withCredentials: true,
            })
            dispatch(addRequest(res?.data?.data))
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchRequest();
    }, [])
  
    
      if(!requests) return null;

    if(requests.length === 0) return <h1 className='text-center my-10'>No Connection Request Found</h1>

  return (
    <div className="text-center my-10">
        <h1 className="font-bold text-2xl mb-5">Pending Connection Requests</h1>
        {requests.map((request) => {
            const {_id, firstName, lastName, age, gender, about, photoUrl} = request.fromUserId;
            return (
                <div key={_id} className="flex items-center gap-4 m-4 p-4 border rounded-lg w-1/2 mx-auto bg-base-300">
                    <img src={photoUrl} alt="photo" className="w-20 h-20 rounded-full object-cover flex-shrink-0"/>
                    <div className="text-left">
                        <h2 className="font-bold">{firstName + " " + lastName}</h2>
                        {age && gender && <p>{age + ", " + gender}</p>}
                        <p>{about}</p>
                    </div>
                    <button className="btn btn-active btn-primary" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                    <button className="btn btn-active btn-secondary" onClick={() => reviewRequest("accepted", request._id)}>Accepted</button>
                </div>
            )
        })}
    </div>
  )
}

export default Requests