import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <h1>{error.statusText}</h1>
      <h3>{error.status}, {error.data}</h3>
    </div>
  )
}

export default ErrorPage
