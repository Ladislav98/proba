import { formatCurrency } from "../../utils/helpers";

function MenuItem({ product }) {
  const { id, title, tags, price, images, stock } = product;

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
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
