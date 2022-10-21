/**
 * 
 */

import React from 'react'
import ProductBar from '../../atoms/ProductBar/ProductBar';
import ProductItem from '../../molecules/ProductItem/ProductItem';

const DATA_TEST = [
    {
        imgScr: "https://cf.shopee.vn/file/6aba1d32171c02c7e0c3d59a5f75fbb8",
        name: "Graystone vase",
        description: "A timeless ceramic vase with a tri color grey glaze.",
        color: "black",
        size: "25",
        quantity: 80,
        price: 85,
    }
]

const Orders = () => {


    return (
        <div>
            <ProductBar />
            {DATA_TEST.map((item, index) => {
                return (
                    <ProductItem
                        key={index}
                        imgScr={item.imgScr}
                        name={item.name}
                        description={item.description}
                        color={item.color}
                        size={item.size}
                        quantity={item.quantity}
                        price={item.price}
                    />
                );
            })}
        </div>
    )
}

export default Orders