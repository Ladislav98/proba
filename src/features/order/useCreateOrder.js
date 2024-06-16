import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/cartSlice";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    mutate: orderCreate,
    isLoading: isCreating,
    reset,
  } = useMutation({
    mutationFn: createOrder,
    onSuccess: (newOrder) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      reset();
      dispatch(clearCart());
      navigate(`/order/${newOrder.id}`);
    },
    // onError: (error) => {
    //   console.log(error);
    // },
  });

  return { orderCreate, isCreating };
}
