import React from 'react';
import { FaCheck, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { LiaSearchPlusSolid } from 'react-icons/lia';

const ShopPage = () => {
  // Product data
  const products = [
    { id: 1, title: 'Dictum morbi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 29.99, image: '/Shop/shop1.jpeg', rating: 4 },
    { id: 2, title: 'Sodales sit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 49.99, image: '/Shop/shop2.jpeg', rating: 3 },
    { id: 3, title: 'Nibh varius', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 19.99, image: '/Shop/shop3.jpeg', rating: 5 },
    { id: 4, title: 'Mauris quis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 39.99, image: '/Shop/shop4.jpeg', rating: 2 },
    { id: 5, title: 'Morbi sagittis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 59.99, image: '/Shop/shop5.jpeg', rating: 4 },
    { id: 6, title: 'Ultricies venenatis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 99.99, image: '/Shop/shop6.jpeg', rating: 2 },
    { id: 7, title: 'Scelerisque dignissim', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 69.99, image: '/Shop/shop7.jpeg', rating: 3 },
    { id: 8, title: 'Ultricies venenatis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 99.99, image: '/Shop/shop2.jpeg', rating: 2 },
    { id: 9, title: 'Scelerisque dignissim', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 69.99, image: '/Shop/shop4.jpeg', rating: 3 },
  ];

  // Filters data
  const brandFilters = [
    'Coaster Furniture',
    'Fusion Dot High Fashion',
    'Unique Furniture Restor',
    'Dream Furniture Flipping',
    'Young Repurposed',
    'Green DIY Furniture',
  ];

  const discountOffers = ['20% Cashback', '5% Cashback Offer', '25% Discount Offer'];

  const ratingFilters = [
    { rating: 4, count: '(2341)' },
    { rating: 3, count: '(1726)' },
    { rating: 2, count: '(258)' },
    { rating: 1, count: '(25)' },
  ];

  const categories = [
    'Prestashop',
    'Magento',
    'Bigcommerce',
    'osCommerce',
    '3dcart',
    'Bags',
    'Accessories',
    'Jewellery',
    'Watches',
  ];

  const priceRanges = [
    '$0.00 - $150.00',
    '$150.00 - $350.00',
    '$350.00 - $504.00',
    '$450.00 +',
    '$10.00 - 20000$',
  ];

  const colors = [
    { name: 'Blue', color: 'bg-blue-500' },
    { name: 'Orange', color: 'bg-orange-500' },
    { name: 'Brown', color: 'bg-orange-800' },
    { name: 'Green', color: 'bg-green-500' },
    { name: 'Purple', color: 'bg-purple-500' },
    { name: 'Sky', color: 'bg-sky-500' },
  ];

  return (
    <div className='max-w-7xl mx-auto'> {/* Container for the content */}

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 mt-10 px-6 sm:px-12">
        <h2 className="text-xl font-bold mb-4 sm:mb-0 sm:text-left text-center">
          Ecommerce Accessories & Fashion Item <br />
          <span className="text-sm text-gray-400">About 9,620 results (0.62 seconds)</span>
        </h2>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-6 sm:items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="perPage" className="mr-2 text-sm font-medium text-gray-600">
              Per Page:
            </label>
            <select id="perPage" className="border border-gray-300 rounded p-2 text-sm">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
          </div>
          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="sortBy" className="mr-2 text-sm font-medium text-gray-600">
              Sort By:
            </label>
            <select id="sortBy" className="border border-gray-300 rounded p-2 text-sm">
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="view" className="mr-2 text-sm font-medium text-gray-600">
              View:
            </label>
            <select id="view" className="border border-gray-300 rounded p-2 text-sm">
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sidebar & Filters Section */}
      <div className="flex flex-col sm:flex-row gap-6 sm:px-12">
        <div className="w-full sm:w-1/4 bg-white p-6 space-y-8">
          {/* Brand Filter */}
          <div>
            <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Product Brand</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {brandFilters.map((brand, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="mr-2 text-blue-600" />
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Discount Offer */}
          <div>
            <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Discount Offers</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {discountOffers.map((offer, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="mr-2 text-pink-600" />
                  {offer}
                </li>
              ))}
            </ul>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Rating</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {ratingFilters.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="mr-2 text-yellow-500" />
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>
                      {starIndex < item.rating ? <FaStar className="text-yellow-500" /> : <FaRegStar className="text-yellow-500" />}
                    </span>
                  ))}
                  <span className="ml-2">{item.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="mr-2 text-pink-600" />
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Price Range</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {priceRanges.map((range, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="mr-2 text-green-600" />
                  {range}
                </li>
              ))}
            </ul>
          </div>

          {/* Color Filter */}
          <div>
            <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Filter by Color</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
              {colors.map((color, index) => (
                <li key={index} className="flex items-center">
                  <span className={`w-4 h-4 ${color.color} rounded-full mr-2`}></span>
                  {color.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Listing Section */}
        <div className="w-full sm:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={230}
                    className="object-cover rounded-lg mb-4"
                  />
                  <div className="flex flex-col items-start w-full">
                    <h3 className="text-lg font-semibold text-[#111C85]">{product.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                    <div className="flex justify-between w-full items-center">
                      <p className="text-xl font-bold text-[#111C85]">${product.price}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <span key={index}>
                            {index < product.rating ? <FaStar className="text-yellow-500" /> : <FaRegStar className="text-yellow-500" />}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4 text-[#111C85]">
                    <button aria-label="Add to Cart" className="bg-white rounded-full shadow-md py-2 px-3 hover:bg-gray-100">
                      <FiShoppingCart size={20} />
                    </button>
                    <button aria-label="Add to Wishlist" className="bg-white rounded-full shadow-md py-2 px-3 hover:bg-gray-100">
                      <FaRegHeart size={20} />
                    </button>
                    <button aria-label="Search Product" className="bg-white rounded-full shadow-md py-2 px-3 hover:bg-gray-100">
                      <LiaSearchPlusSolid size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Image Section */}
      <div className="flex justify-center mt-14 mb-14">
        <Image src="/Blog/News.png" alt="News Letter" width={700} height={600} />
      </div>
    </div>
  );
};

export default ShopPage;