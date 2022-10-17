// /*
//  * Dislay the product exist in shopping basket
//  * file: ProductCheckout.jsx
//  */
// import React from "react";
// import ProductBar from "../../atoms/ProductBar/ProductBar";
// import ProductItem from "../../molecules/ProductItem/ProductItem";

// const DATA_TEST = JSON.parse(localStorage.getItem("basket")).map(
//   (item, idx) => ({
//     imgScr: "https://cf.shopee.vn/file/6aba1d32171c02c7e0c3d59a5f75fbb8",
//     name: "Graystone vase",
//     description: "A timeless ceramic vase with a tri color grey glaze.",
//     color: "black",
//     size: item.size,
//     quantity: item.quantity,
//     price: 85,
//   })
// );

// // const DATA_TEST = [
// //   {
// //     imgScr: "https://cf.shopee.vn/file/6aba1d32171c02c7e0c3d59a5f75fbb8",
// //     name: "Graystone vase",
// //     description: "A timeless ceramic vase with a tri color grey glaze.",
// //     color: "black",
// //     size: "M",
// //     quantity: 1,
// //     price: 85,
// //   },
// //   {
// //     imgScr:
// //       "https://bizweb.dktcdn.net/thumb/1024x1024/100/345/647/products/z1979282456037-bc0f790f06327f9fa7fae97d3eb9d145.jpg?v=1595429261300",
// //     name: "Basic white vase",
// //     description: "Beautiful and simple this is one for the classics",
// //     color: "blue",
// //     size: "L",
// //     quantity: 1,
// //     price: 125,
// //   },
// // ];

// const ProductCheckout = () => {
//   return (
//     <div>
//       <ProductBar />
//       {DATA_TEST.map((item, index) => {
//         return (
//           <ProductItem
//             key={index}
//             imgScr={item.imgScr}
//             name={item.name}
//             description={item.description}
//             color={item.color}
//             size={item.size}
//             quantity={item.quantity}
//             price={item.price}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default ProductCheckout;
