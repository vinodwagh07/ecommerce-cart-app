import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-5 border border-gray-200 transition hover:shadow-lg mt-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="w-[30%]">
          <img className="object-contain w-full h-[150px]" src={item.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {item.description}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
              className="text-red-700 bg-red-100 hover:bg-red-200 transition-all duration-200 cursor-pointer rounded-full p-2"
              onClick={removeFromCart}
            >
              <AiFillDelete className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
