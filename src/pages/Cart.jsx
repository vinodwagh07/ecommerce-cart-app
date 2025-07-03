// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem";

// const Cart = () => {
//   const { cart } = useSelector((state) => state);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     setTotalAmount(
//       Number(cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2))
//     );
//   }, [cart]);

//   return (
//     <div>
//       {cart.length > 0 ? (
//         <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
//           <div className="w-[100%] md:w-[60%] flex flex-col p-2">
//             {cart.map((item, index) => {
//               return <CartItem key={item.id} item={item} itemIndex={index} />;
//             })}
//           </div>

//           <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
//             <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
//               <div className="flex flex-col gap-5 ">
//                 <div className="font-semibold text-xl text-green-800 ">
//                   Your Cart
//                 </div>
//                 <div className="font-semibold text-5xl text-green-700  -mt-5">
//                   Summary
//                 </div>
//                 <p className="text-xl">
//                   <span className="text-gray-700 font-semibold text-xl">
//                     Total Items: {cart.length}
//                   </span>
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <p className="text-xl font-bold">
//                 <span className="text-gray-700 font-semibold">
//                   Total Amount:
//                 </span>{" "}
//                 ${totalAmount}
//               </p>
//               <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold py-3 mt-5 transition">
//                 Checkout Now
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="min-h-[80vh] flex flex-col items-center justify-center">
//           <h1 className="text-gray-700 font-semibold text-xl mb-2">
//             Your cart is empty!
//           </h1>
//           <Link to={"/"}>
//             <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
//               Shop Now
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      Number(cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2))
    );
  }, [cart]);

  return (
    <div className="min-h-[80vh] w-full py-10 px-4">
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Side - Cart Items */}
          <div className="w-full md:w-[60%] flex flex-col gap-5">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right Side - Summary */}
          <div className="w-full md:w-[40%]">
            <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-green-700">Your Cart</h2>
                <h3 className="text-4xl font-extrabold text-green-800">Summary</h3>
                <p className="text-lg text-gray-700">
                  Total Items: <span className="font-semibold">{cart.length}</span>
                </p>
              </div>

              <hr className="border-gray-300" />

              <div className="text-lg font-bold">
                <span className="text-gray-700">Total Amount:</span>{" "}
                <span>${totalAmount}</span>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white text-lg rounded-md py-3 font-semibold transition">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-green-700 rounded-lg text-white mt-4 px-6 py-3 font-semibold tracking-wide transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

