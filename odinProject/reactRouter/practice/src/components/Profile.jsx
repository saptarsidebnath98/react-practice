import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hi I am Profile.</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, delectus?</p>
      <Outlet/>
      <ul>
        <li><Link to="knowledgeZone">Knowledge Zone</Link></li>
        <li><Link to="gameZone">Game Zone</Link></li>
      </ul>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default Profile
