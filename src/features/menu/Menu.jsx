import { useQuery } from "@tanstack/react-query";
import MenuItem from "./MenuItem";
import Loader from "../../ui/Loader";
import { getProducts } from "../../api/api";

function Menu() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

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
