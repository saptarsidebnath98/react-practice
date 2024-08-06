import App from './App.jsx'
import Profile from './components/Profile.jsx';
import Contacts from './components/Contacts.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Knowledge from './components/Knowledge.jsx';
import Game from './components/Game.jsx';

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>
    },
    {
      path: "profile",
      element: <Profile/>,
      children: [
        {
          path: "knowledgeZone",
          element: <Knowledge/>,
        },
        {
          path: "gameZone",
          element: <Game/>,
        }
      ]
    },
    {
      path: "contacts",
      element: <Contacts/>,
    },
  ]

  export default routes;