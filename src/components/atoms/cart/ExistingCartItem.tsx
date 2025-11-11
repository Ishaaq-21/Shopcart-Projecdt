import { useCartContext } from "@/contexts/Cart/CartContextProvider";
import { Product } from "../../../../sanity.types";
import toast from "react-hot-toast";

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

    toast.success(`${product.name?.substring(0, 10)}... added successfully`);
  };
  const handleDecrement = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: product._id,
    });
    toast.success(`${product.name?.substring(0, 10)}... removed successfully`);
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
