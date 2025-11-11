import { Product } from "../../../../sanity.types";

const ExistingCartItem = ({
  product,
  productCount,
}: {
  product: Product;
  productCount: number;
}) => {
  return (
    <div>
      <div className="quantity flex justify-between items-center">
        <span className="text-sm text-black/70">Quantity</span>
        <div>
          {" "}
          <span className="text-lg"> - </span>
          {productCount}
          <span className="text-lg"> + </span>
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
