import React from 'react';
import Image from 'next/image';
import { FaStar, FaRegHeart } from 'react-icons/fa';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating?: number;
    originalPrice?: number;
    isOnSale?: boolean;
  };
  onAddToCart: (id: number) => void; // Callback function for adding product to cart
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { title, description, price, image, rating, originalPrice, isOnSale } = product;

  return (
    <div className="border p-4 rounded-md shadow-md group transition-transform transform hover:scale-105">
      {/* Product Image */}
      <div className="relative w-full h-64 mb-4">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md group-hover:opacity-80 transition-opacity duration-300"
        />
        {isOnSale && (
          <span className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 text-xs rounded-bl-md">
            Sale
          </span>
        )}
      </div>

      {/* Product Title */}
      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      {/* Product Rating */}
      <div className="flex items-center text-yellow-400 mb-2">
        {rating ? (
          <>
            {[...Array(Math.floor(rating))].map((_, idx) => (
              <FaStar key={idx} size={14} />
            ))}
            {rating % 1 !== 0 && <FaStar size={14} className="text-gray-300" />}
            <span className="ml-1 text-gray-600">({rating.toFixed(1)})</span>
          </>
        ) : (
          <span className="text-gray-500">No rating yet</span>
        )}
      </div>

      {/* Product Description */}
      <p className="text-gray-600 text-sm mb-2">{description}</p>

      {/* Price Section */}
      <div className="flex items-center justify-between">
        {isOnSale && originalPrice && (
          <p className="text-gray-500 line-through">${originalPrice.toFixed(2)}</p>
        )}
        <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart(product.id)}
        className="mt-4 w-full py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors duration-200"
      >
        Add to Cart
      </button>

      {/* Heart Icon (Wishlist) */}
      <button className="absolute top-2 right-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
        <FaRegHeart size={24} />
      </button>
    </div>
  );
};

export default ProductCard;