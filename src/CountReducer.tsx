import React, {ReactNode, useReducer} from 'react';

type StateType = {
  count: number
}

type Actions = {
  type: 'increment'
  payload?: number
}

type ContextType = {
  state: StateType
  dispatch: React.Dispatch<Actions>
}

export const CountContext = React.createContext({} as ContextType)

type Props = {
  children: ReactNode | ReactNode[];
};

const countReducer = (state: StateType, action: Actions): StateType => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1 }
    default:
      return state
  }
}

export const CountContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(countReducer,  { count: 0 })

  return (
    <CountContext.Provider value={ { state, dispatch } }>
      { children }
    </CountContext.Provider>
  );
}

