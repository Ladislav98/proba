import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPriece = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between px-4 py-4 text-sm uppercase text-stone-200 bg-stone-800 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-300 text-semibold sm:space-x-6">
        <span>{totalCartQuantity} items</span>
        <span>{formatCurrency(totalCartPriece)} euro</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
