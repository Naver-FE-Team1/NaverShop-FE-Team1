/**
 * List of products purchased 
 * file: Orders.jsx 
 */

import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase/firebase-config';
import ProductBar from '../../atoms/ProductBar/ProductBar';
import ProductItem from '../../molecules/ProductItem/ProductItem';

const Orders = (props) => {
    const { order } = props

    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        const [...productInfo] = order.productInfo

        const result = []
        productInfo.map(async (item) => {
            const productRef = doc(db, "products", item.productId)
            const productSnap = await getDoc(productRef)
            if (productSnap.exists()) {
                let data = JSON.stringify({ ...productSnap.data(), quantity: item.productQuantities })
                // console.log(data)
                result.push(JSON.parse(data))
            }
            else {
                console.log("error while getting products info");
            }
            setProductsList([...productsList, ...result])
        })
    }, [])

    return (
        <div>
            <ProductBar />
            {productsList.map((item, index) => {
                console.log(item);
                return (
                    <ProductItem
                        key={index}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        color={item.color[0]}
                        size={item.sizes[0]}
                        //TO DO: hide the - + buttons
                        quantity={item.quantity}
                        price={(item.price * item.quantity )}
                    />
                );
            })}
        </div>
    )
}

export default Orders