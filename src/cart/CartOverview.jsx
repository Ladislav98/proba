import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800">
      <p>
        <span>23 pizza</span>
        <span>25 euro</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
