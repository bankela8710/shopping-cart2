import React, { createContext, useEffect, useState } from 'react';
import img1 from '../Images/ci1.jpg';
import img11 from '../Images/ci11.jpg';
import img12 from '../Images/ci12.jpg';
import img13 from '../Images/ci13.jpg';
import img14 from '../Images/ci14.jpg';
import img2 from '../Images/ci2.jpg';
import img21 from '../Images/c21.jpg';
import img22 from '../Images/c22.jpg';
import img23 from '../Images/c23.jpg';
import img24 from '../Images/c24.jpg';
import img3 from '../Images/ci3.jpg';
import img31 from '../Images/ci31.jpg';
import img32 from '../Images/ci32.jpg';
import img33 from '../Images/ci33.jpg';
import img4 from '../Images/ci4.jpg';
import img41 from '../Images/ci41.jpg';
import img42 from '../Images/ci42.jpg';
import img43 from '../Images/ci43.jpg';
import img5 from '../Images/ci5.jpg';
import img51 from '../Images/ci51.jpg';
import img52 from '../Images/ci52.jpg';
import img53 from '../Images/ci53.jpg';
import img54 from '../Images/ci54.jpg';



export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Watch Product 01",
            "images": [
                img1,
                img11,
                img12,
                img13,
                img14
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and",
            "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
        {
            "_id": "2",
            "title": "Watch Product 02",
            "images": [
                img2,
                img21,
                img22,
                img23,
                img24
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and",
            "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 201,
            "count":1
        },
        {
            "_id": "3",
            "title": "Watch Product 03",
            "images": [
                img3,
                img31,
                img32,
                img33

            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and",
            "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 301,
            "count":1
        },
        {
            "_id": "4",
            "title": "Watch Product 04",
            "images": [
                img4,
                img41,
                img42,
                img43

            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and",
            "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 401,
            "count":1
        },
        {
            "_id": "5",
            "title": "Watch Product 05",
            "images": [
                img5,
                img51,
                img52,
                img53,
                img54

            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and",
            "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 501,
            "count":1
        },
    ])

    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert('The product has been addes to cart')
        }

    }
    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart);
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart

    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}