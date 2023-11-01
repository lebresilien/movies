"use client";
import React, { Dispatch, createContext, useReducer } from "react";
import { Movi } from "../types";

type StateType = {
  favorites: Movi[]
};

type ActionType = {
  type: string;
  payload: Movi
};

const initialState: StateType = {
    favorites: [],
};

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return { 
          ...state, 
          favorites: [...state.favorites, action.payload]
        };
      case "REMOVE":
        return { 
          ...state, 
          favorites: state.favorites.filter((m) => m.id !== action.payload.id) 
        };
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
