import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: orderCreate,
    isLoading: isCreating,
    reset,
  } = useMutation({
    mutationFn: createOrder,
    onSuccess: (newOrder) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      reset();
      navigate(`/order/${newOrder.id}`);
    },
  });

  return { orderCreate, isCreating };
}
