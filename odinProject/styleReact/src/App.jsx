import Button from "./components/Button/Button";
function App() {

  return (
    <>
      <Button/>
      <Button type="secondary" label="Submit"/>
      <Button type="error" label="Error"/>
      <Button type="activate" label="Activate"/>
    </>
  )
}

export default App
