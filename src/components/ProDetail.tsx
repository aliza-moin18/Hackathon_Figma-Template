import Image from "next/image";
import Link from "next/link";
import { FaStar, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const ProductDetail = () => {
  const product = {
    name: "B&B Italian Sofa",
    price: 32.0,
    originalPrice: 50.0,
    description: "A stylish, comfortable, and modern sofa designed for luxurious living spaces.",
    rating: 4.5,
    image: "/sofa.png",
    features: [
      "All frames constructed with hardwood solids and laminates",
      "Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails",
      "Arms, backs, and seats are structurally reinforced",
    ],
    categories: ["Furniture", "Sofas", "Living Room"],
    tags: ["Modern", "Comfortable", "Luxury"],
    reviews: [
      { username: "John Doe", comment: "Great quality and looks fantastic in my living room.", rating: 5 },
      { username: "Jane Smith", comment: "Very comfortable but a bit pricy.", rating: 4 },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto bg-[#F1F0FF] p-8 shadow-lg rounded-lg w-full">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 relative group">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain rounded-lg group-hover:scale-105 transition-all duration-300"
          />
          <div className="absolute top-2 right-2 text-white p-2 bg-pink-600 rounded-full">
            <FaStar size={20} />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="w-full md:w-1/2">
          <h1
            className="text-3xl text-[#151875] mb-4 leading-tight tracking-wide"
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: "bolder",
            }}
          >
            {product.name}
          </h1>

          {/* Price and Discount */}
          <div className="flex items-center gap-4 mb-4">
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-lg">${product.originalPrice.toFixed(2)}</span>
            )}
            <span className="text-2xl text-pink-600 font-bold">${product.price.toFixed(2)}</span>
          </div>

          {/* Product Rating */}
          <div className="flex items-center mb-4">
            {[...Array(Math.floor(product.rating))].map((_, idx) => (
              <FaStar key={idx} className="text-yellow-400" size={20} />
            ))}
            {product.rating % 1 !== 0 && <FaStar className="text-gray-300" size={20} />}
            <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
          </div>

          {/* Product Features */}
          <div className="space-y-4 mb-6">
            {product.features.map((feature, idx) => (
              <p key={idx} className="text-sm text-gray-400 flex items-center">
                <span className="w-3 h-3 rounded-full bg-pink-600 inline-block mr-2"></span>
                {feature}
              </p>
            ))}
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6 flex items-center gap-4">
            <Link href="/cart">
              <button className="px-6 py-2 font-bold bg-pink-500 text-white shadow-lg hover:bg-purple-700 transition">
                Add to Cart
              </button>
            </Link>
          </div>

          {/* Product Categories */}
          <div className="mt-4 text-sm text-gray-500">
            <span className="font-semibold text-black">Categories: </span>
            {product.categories.join(", ")}
          </div>

          {/* Product Tags */}
          <div className="mt-4 text-sm text-gray-500">
            <span className="font-semibold text-black">Tags: </span>
            {product.tags.join(", ")}
          </div>

          {/* Social Share Buttons */}
          <div className="mt-6 flex gap-4">
            <span className="font-semibold text-black">Share: </span>
            <FaFacebook size={20} className="text-blue-600 hover:text-blue-800 cursor-pointer" />
            <FaInstagram size={20} className="text-pink-700 hover:text-pink-900 cursor-pointer" />
            <FaTwitter size={20} className="text-blue-400 hover:text-blue-600 cursor-pointer" />
            <FaPinterest size={20} className="text-red-600 hover:text-red-800 cursor-pointer" />
          </div>

          {/* Product Reviews */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Customer Reviews</h3>
            <div className="space-y-4 mt-4">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, idx) => (
                      <FaStar key={idx} className="text-yellow-400" size={16} />
                    ))}
                    <span className="text-sm text-gray-600">{review.username}</span>
                  </div>
                  <p className="text-sm text-gray-500">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;