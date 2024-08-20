import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type){
    case "INCREMENT" : 
      return {...state, count: state.count + 1};
    case "DECREMENT" : 
      return {...state, count: state.count - 1};
    case "RESET" : 
      return {...state, count: 0, hidden: false};
    case "TOGGLE_HIDDEN" :
      return {...state, hidden: !state.hidden}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0, hidden: false})

  return (
    <div>
     <h1>useReducer hook:</h1>
     <h3>Count: {state.count}</h3>
     <button onClick={()=> dispatch({type: "INCREMENT"})}>INCREMENT</button>
     <button onClick={()=> dispatch({type: "DECREMENT"})}>DECREMENT</button>
     <button onClick={()=> dispatch({type: "TOGGLE_HIDDEN"})}>
      {state.hidden ? "SHOW" : "HIDE"}
     </button>
     <button onClick={()=> dispatch({type: "RESET"})}>RESET</button>
     <p style={{display: state.hidden ? "none" : "block"}}>THIS IS A TEXT.</p>
    </div>
  )
}

export default App
