import { useCartContext } from "@/contexts/CartFavContextProvider";
import { Product } from "../../../../sanity.types";
import IncrementDecrementQuantity from "./IncrementDecrementQuantity";

const ExistingCartItem = ({ product }: { product: Product }) => {
  const { cartState } = useCartContext();
  const productCount = cartState.getItemCountById(cartState, product._id);

  return (
    <div className="w-full">
      <div className="quantity flex justify-between items-center w-full">
        <span className="text-sm text-black/70 mr-1">Quantity</span>
        <IncrementDecrementQuantity product={product} />
      </div>
      <hr className="my-2" />
      <div className="subtotal flex justify-between items-center font-semibold text-sm">
        <span>SubTotal</span>
        <span className="text-lg">
          ${"  "}
          {product.price ? product.price * productCount : 0}
        </span>
      </div>
    </div>
  );
};

export default ExistingCartItem;
