import { Product } from "../../../sanity.types";

export type FavoriteState = {
  favorites: Product[];
};
export type FavoriteAction = { type: "FAV_CLICK"; payload: Product };

export const initialState: FavoriteState = {
  favorites: [],
};

function favoriteClick(state: FavoriteState, product: Product) {
  const productExists = state.favorites.find(
    (item) => item._id === product._id
  );

  //if product exists, we will remove it from the list
  if (productExists)
    return {
      ...state,
      favorites: state.favorites.filter((item) => item._id !== product._id),
    };

  return {
    ...state,
    favorites: [...state.favorites, product],
  };
}

export const favoriteReducer = (
  state: FavoriteState = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case "FAV_CLICK":
      return favoriteClick(state, action.payload);

    default:
      return state;
  }
};

export default favoriteReducer;
