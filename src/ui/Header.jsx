import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-pink-400 border-b border-stone-200 sm:px-6">
      <Link className="tracking-widest" to="/">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-purple-700">
          order from lokalac
        </span>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
