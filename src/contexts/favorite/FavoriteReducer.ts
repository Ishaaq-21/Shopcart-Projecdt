import { Product } from "../../../sanity.types";

export type FavoriteState = {
  favorites: Product[];
};
export type FavoriteAction =
  | { type: "FAV_CLICK"; payload: Product }
  | { type: "RESET_FAV" };

export const initialState: FavoriteState = {
  favorites: [],
};
export const getSavedWishList = (): FavoriteState => {
  if (typeof window === "undefined") return initialState;
  try {
    const raw = localStorage.getItem("wishlistState");
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as Partial<FavoriteState>;
    return {
      ...initialState,
      ...parsed,
    };
  } catch {
    return initialState;
  }
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

function resetFavorite(state: FavoriteState) {
  return {
    ...state,
    favorites: [],
  };
}

export const favoriteReducer = (
  state: FavoriteState = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case "FAV_CLICK":
      return favoriteClick(state, action.payload);
    case "RESET_FAV":
      return resetFavorite(state);
    default:
      return state;
  }
};

export default favoriteReducer;
