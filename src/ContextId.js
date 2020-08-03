import React, { useState, createContext } from 'react';

export const ContextToId = createContext();

export const ContextId = props => {
  const [idToDelete, setIdToDelete] = useState();
  return (
    <ContextToId.Provider value={[idToDelete, setIdToDelete]}>
      {props.children}
    </ContextToId.Provider>
  );
};
