type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: {
    name: string;
  };
};

export default Product;
