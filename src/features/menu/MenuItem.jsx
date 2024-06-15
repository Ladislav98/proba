import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentquantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ product }) {
  const dispatch = useDispatch();
  const { id, title, tags, price, images, stock } = product;

  const currentQuantity = useSelector(getCurrentquantityById(id));
  const IsInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      productId: id,
      name: title,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  }
  return (
    <li
      className={`flex gap-4 py-2 ${stock <= 5 ? "opacity-50 grayscale" : ""}`}
    >
      <img
        src={images[0]}
        alt={title}
        className={`h-24 w-24 object-scale-down ${
          stock <= 5 ? "opacity-70 grayscale" : ""
        }`}
      />
      <div className="flex flex-col pt-2 grow">
        <p className="font-medium">{title}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {tags.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {stock > 5 ? (
            <p className="text-sm">{formatCurrency(price)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {IsInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                productId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem productId={id} />
            </div>
          )}

          {stock > 5 && !IsInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
