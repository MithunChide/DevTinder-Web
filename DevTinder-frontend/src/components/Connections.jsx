import axios from "axios"
import { BASE_URL } from "../utils/constans"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnection } from "../utils/connectionSlice"


const Connections = () => {
    const connections = useSelector(store => store.connection);
    const dispatch = useDispatch()
    
    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials:true,
            })
            dispatch(addConnection(res?.data?.data))
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchConnections()
    }, [])

    if(!connections) return null;

    if(connections.length === 0) return <h1 className='text-center my-10'>No Connection Found</h1>

  return (
    <div className="text-center my-10">
        <h1 className="font-bold text-2xl mb-5">Connections</h1>
        {connections.map((connection) => {
            const {_id, firstName, lastName, age, gender, about, photoUrl} = connection;
            return (
                <div key={_id} className="flex items-center gap-4 m-4 p-4 border rounded-lg w-1/2 mx-auto bg-base-300">
                    <img src={photoUrl} alt="photo" className="w-20 h-20 rounded-full object-cover flex-shrink-0"/>
                    <div className="text-left">
                        <h2 className="font-bold">{firstName + " " + lastName}</h2>
                        {age && gender && <p>{age + ", " + gender}</p>}
                        <p>{about}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Connections;