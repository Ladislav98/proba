import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-yellow-400 border-b border-stone-200 sm:px-6">
      <Link className="tracking-widest" to="/">
        {/* className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-orange-800 to-yellow-600" */}
        <span>order from lokalac</span>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
