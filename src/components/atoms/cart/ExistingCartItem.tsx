import { useCartContext } from "@/contexts/Cart/CartContextProvider";
import { Product } from "../../../../sanity.types";

const ExistingCartItem = ({
  product,
  productCount,
}: {
  product: Product;
  productCount: number;
}) => {
  const { state, dispatch } = useCartContext();
  const handleIncrement = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: product._id,
    });
  };
  return (
    <div>
      <div className="quantity flex justify-between items-center">
        <span className="text-sm text-black/70">Quantity</span>
        <div className="flex gap-3 items-center">
          {" "}
          <button onClick={handleDecrement} className="text-xl">
            {" "}
            -{" "}
          </button>
          {productCount}
          <button onClick={handleIncrement} className="text-xl">
            {" "}
            +{" "}
          </button>
        </div>
      </div>
      <hr className="my-2" />
      <div className="subtotal flex justify-between items-center font-semibold text-sm">
        <span>SubTotal</span>
        <span>{product.price ? product.price * productCount : 0}</span>
      </div>
    </div>
  );
};

export default ExistingCartItem;
