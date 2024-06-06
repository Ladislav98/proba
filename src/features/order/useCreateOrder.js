import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../../api/api";
import { redirect } from "react-router-dom";

export function useCreateOrder() {
  const queryClient = useQueryClient();

  const {
    mutate,
    isLoading: isCreating,
    reset,
  } = useMutation({
    mutationFn: createOrder,
    onSuccess: (newOrder) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      reset();
      redirect(`/order/${newOrder.id}`);
    },
  });

  return { mutate, isCreating };
}
