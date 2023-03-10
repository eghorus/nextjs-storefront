import { useContext } from "react";
import Image from "next/image";
import { TbHeartPlus, TbShoppingCartPlus } from "react-icons/tb";
import type Product from "../models/product";
import Button from "./button";
import { UiContext } from "../store/uiContext";
import { ProductsContext } from "../store/productsContext";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    title,
    price,
    images,
    category: { name: categoryName },
  } = product;

  const uiCtx = useContext(UiContext);
  const { showToast } = uiCtx;
  const productsCtx = useContext(ProductsContext);
  const { addProductToCart, addProductToWishList } = productsCtx;

  const handleAddToCart = () => {
    addProductToCart(id);
    showToast("SUCCESS", "Product added to your cart.");
  };
  const handleAddToWishList = () => {
    addProductToWishList(id);
    showToast("SUCCESS", "Product added to your wishlist.");
  };

  return (
    <div className="group overflow-hidden rounded bg-slate-100 shadow-sm transition-all hover:shadow">
      <div className="relative h-56 w-full">
        <Image src={images[0]} alt={title} fill className="object-cover transition-all group-hover:opacity-70" />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <span className="font-semibold">{title}</span>
        <span>{categoryName}</span>
        <span className="font-semibold text-indigo-600">${price.toLocaleString("en-US")}</span>
      </div>
      <div className="mt-2 mb-6 flex items-center justify-center gap-4 px-4 [&>*]:grow">
        <Button variant="primary" onClick={handleAddToCart}>
          <TbShoppingCartPlus className="text-lg" /> Cart
        </Button>
        <Button variant="secondary" onClick={handleAddToWishList}>
          <TbHeartPlus className="text-lg" /> WishList
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
