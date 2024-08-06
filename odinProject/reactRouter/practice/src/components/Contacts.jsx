import { Link } from "react-router-dom"

const Contacts = () => {
  return (
    <div>
      <h3>Hi I am Contacts.</h3>
      <ul>
        <li>Mobile: 8918221707</li>
        <li>email: debsapt211@gmail.com</li>
      </ul>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default Contacts
