import { useQuery } from "@tanstack/react-query";
import MenuItem from "./MenuItem";
import Loader from "../../ui/Loader";

function Menu() {
  const API_URL = "https://dummyjson.com/products";
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch(API_URL).then((response) => response.json()),
  });

  console.log(data);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <ul className="divide-y divide-stone-200">
      {data.products
        .filter((product) => product.price < 250)
        .map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
    </ul>
  );
}

export default Menu;
