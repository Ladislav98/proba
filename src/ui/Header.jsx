import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Order Pizza</Link>
      <SearchOrder />
      <p>hello</p>
    </header>
  );
}

export default Header;
