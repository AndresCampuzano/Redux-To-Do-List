import React, { useState, createContext } from 'react';

export const ContextToModal = createContext();

export const ContextModal = props => {
  const [active, setActive] = useState(false);
  return (
    <ContextToModal.Provider value={[active, setActive]}>
      {props.children}
    </ContextToModal.Provider>
  );
};
