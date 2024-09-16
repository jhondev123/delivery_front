import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    title: string;
    price: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('https://fakestoreapi.com/products?limit=5');
                setProducts(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="mt-4">
            <h1>Produtos</h1>
            <ul className="list-group">
                {products.map((product) => (
                    <li key={product.id} className="list-group-item">
                        {product.title} - R$ {product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;