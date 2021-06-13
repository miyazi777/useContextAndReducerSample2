import React, {useContext} from 'react';
import { CountContext, CountContextProvider } from './CountReducer';

function App() {
  return (
    <div>
      <h1>use-context & use-reducer sample</h1>
      <CountContextProvider>
        <Test/>
      </CountContextProvider>
    </div>
  );
}

export default App;

const Test = () => {
  const countContext = useContext(CountContext)

  const {state, dispatch} = countContext

  return (
    <>
      <h2>Test Component</h2>
      <div>count: {state.count}</div>
      <button onClick={ () => dispatch({ type: 'increment' }) }>plus</button>
    </>
  );
}
