import { useSelector } from 'react-redux'
import EditProfile from './EditProfile'
import { use } from 'react';

const Profile = () => {
  const user = useSelector(store => store.user);
  
  if (!user) {
    return <div>Loading...</div>
  }
  
  return (
    user && (
       <div>
      <EditProfile user={user}/>
    </div>
    )
  )
}

export default Profile