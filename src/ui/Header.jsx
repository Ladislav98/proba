import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-yellow-400 border-b border-stone-200 sm:px-6">
      <Link className="tracking-widest" to="/">
        your local shop - order
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
