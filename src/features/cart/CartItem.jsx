import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentquantityById } from "./cartSlice";

function CartItem({ item }) {
  const { productId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentquantityById(productId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 s m:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          productId={productId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem productId={productId} />
      </div>
    </li>
  );
}

export default CartItem;
