import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/api";

export function useMenu() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, error, isLoading };
}
