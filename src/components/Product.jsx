import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div
      className="bg-gray-50 flex flex-col items-center justify-between rounded-xl shadow-md ring-1 ring-gray-300 
  hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 
   hover:ring-2 hover:ring-slate-700 hover:shadow-lg"
    >
      <div>
        <p className="text-gray-700  text-lg text-left truncate w-40 mt-1 font-bold">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-xs text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt={post.title} className="h-full w-full object-contain" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p.id == post.id) ? (
          <button
            className="bg-gray-700 text-white border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-800 transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="bg-gray-700 text-white border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-800 transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;


