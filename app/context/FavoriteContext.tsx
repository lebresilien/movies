"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { Movie } from "../../types";

type StateType = {
  fovorites: []
};

type ActionType = {
  type: string;
  payload: Movie
};

const initialState: StateType = {
    fovorites: [],
};

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return { 
          ...state, 
          favorites: [...state.fovorites, action.payload]
        };
      case "REMOVE":
        return { ...state, favorites: [] };
      default:
        return state;
    }
};

export const FavoriteContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const FavoriteContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <FavoriteContext.Provider value={{ state, dispatch }}>
        {children}
      </FavoriteContext.Provider>
    );
};
