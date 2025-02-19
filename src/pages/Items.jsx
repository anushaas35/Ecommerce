import React, { useEffect, useState } from 'react'
import Products from '../componets22/Products';

const Items = () => {
    const [ Items, setItems]  = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setItems([...data]);
        };

    fetchData();
    }, []);

  return (
    <div>
    <h1>items page</h1>
    {Items.map((Item)=> (
        <h1 key={Item.id}>{Item.title}</h1>
    ))}
        </div>
  );
};

export default Items;