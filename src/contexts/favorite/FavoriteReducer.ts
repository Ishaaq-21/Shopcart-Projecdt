import { Product } from "../../../sanity.types";

export type FavoriteState = {
  favorites: Product[];
};
export type FavoriteAction =
  | { type: "ADD_FAVORITE"; payload: Product }
  | { type: "REMOVE_FAVORITE"; payload: Product };

export const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteReducer = (
  state: FavoriteState = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
