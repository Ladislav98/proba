import { useState } from "react";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useCreateOrder } from "./useCreateOrder";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utils/helpers";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  const [withPriority, setWithPriority] = useState(false);
  const { orderCreate, isCreating } = useCreateOrder();
  const cart = useSelector(getCart);
  const customer = useSelector((state) => state.user.username);

  const { register, handleSubmit, formState } = useForm();
  const { errors, isSubmitting } = formState;

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  function onSubmit(data) {
    const order = {
      customer,
      ...data,
      priority: withPriority,
      cart: cart.map((item) => ({
        pizzaId: item.productId,
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice: item.totalPrice,
      })),
    };
    orderCreate(order);
  }

  function onError(errors) {
    // console.log(errors);
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              disabled={isCreating}
              className="w-full input"
              {...register("phone", {
                required: "This field is required",
                validate: (value) =>
                  isValidPhone(value) || "Invalid phone number",
              })}
            />
            {errors?.phone?.message && (
              <p className="p-2 mt-2 text-xs text-red-700 bg-red-100 rounded-md">
                {errors?.phone?.message}
              </p>
            )}
          </div>
        </div>

        <div className="relative flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              disabled={isCreating}
              {...register("address", { required: "This field is required" })}
              className="w-full input"
            />

            {/* {errors?.address && (
              <p className="p-2 mt-2 text-xs text-red-700 bg-red-100 rounded-md">
                {errors?.address?.message}
              </p>
            )} */}
          </div>
        </div>

        <div className="flex items-center gap-5 mb-12">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            disabled={isCreating}
            className="w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            value={withPriority}
            {...register("priority")}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          {/* <input type="hidden" name="position" /> */}
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
