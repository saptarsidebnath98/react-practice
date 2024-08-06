import { Link } from "react-router-dom"

const App = () => {
  return (
    <div>
      <h1>Hi I am the main App Component.</h1>
      <p>This is the main thing bruh.</p>
      <Link to="profile">Profile</Link>
      <br />
      <Link to="contacts">Contacts</Link>
    </div>
  )
}

export default App
