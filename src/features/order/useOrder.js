import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../api/api";

export function useOrder(orderId) {
  const {
    isLoading,
    error,
    data: order,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrder(orderId),
  });

  return { isLoading, error, order };
}
