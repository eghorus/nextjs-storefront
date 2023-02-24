import Image from "next/image";
import Product from "../models/product";

type UserProductsListProps = {
  products: Product[];
  isWishList?: boolean;
};

const UserProductsList = ({ isWishList = false, products }: UserProductsListProps) => {
  let subtotal = products.reduce((total, current) => (total += +current.price), 0);

  return (
    <div className="m-auto mb-5 max-w-xl">
      <ul className="mb-5 flex flex-col divide-y border-y">
        {/* TODO: remove slice */}
        {products.slice(0, 5).map(({ id, title, price, images, category: { name: categoryName } }) => (
          <li key={id} className="flex gap-5 py-5">
            <div className="relative h-24 w-32 overflow-hidden rounded-sm">
              <Image src={images[0]} alt={title} fill className="object-cover" />
            </div>
            <div>
              <div className="mb-1 font-semibold">{title}</div>
              <div className="text-neutral-400">{categoryName}</div>
            </div>
            <div className="ml-auto flex flex-col justify-between">
              <div className="font-semibold">${price}</div>
              <button
                type="button"
                className="text-sm font-semibold text-indigo-600 transition-all hover:text-indigo-700 hover:underline"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">Subtotal</div>
        <div className="text-lg font-bold">${subtotal.toLocaleString("en-US")}</div>
      </div>
      {!isWishList && (
        <>
          <p className="mb-10 text-neutral-400">Shipping and taxes will be calculated at checkout.</p>
          <button
            type="button"
            className="m-auto block w-full max-w-sm rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white transition-all hover:bg-indigo-700"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default UserProductsList;