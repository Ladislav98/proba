import MenuItem from "./MenuItem";
import Loader from "../../ui/Loader";
import { useMenu } from "./useMenu";

function Menu() {
  const { products, isLoading } = useMenu();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className="divide-y divide-stone-200">
      {products
        .filter((product) => product.price < 250)
        .map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
    </ul>
  );
}

export default Menu;
