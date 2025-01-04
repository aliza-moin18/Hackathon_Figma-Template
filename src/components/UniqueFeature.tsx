
import Image from "next/image";

export default function ProductFeature() {
  return (
    <section className="bg-[#F1F0FF] py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-2">
     {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">

         <div className="relative">
     {/* Circle Background */}
            <div className="absolute -top-6 -left-6 w-402 h-402 bg-pink-300 rounded-full -z-10"></div>
            <Image
              src="/ProFeatured.png" 
              alt="Blue Chair"
              width={450}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>

    {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
        {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#151875] mb-6">
            Unique Features Of leatest & Trending Products
          </h2>

        {/* Features List */}
          <ul className="mb-6 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="h-3 w-3 bg-pink-500 rounded-full mt-1"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-start gap-2">
              <span className="h-3 w-3 bg-blue-500 rounded-full mt-1"></span>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li className="flex items-start gap-2">
              <span className="h-3 w-3 bg-teal-400 rounded-full mt-1"></span>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>

        {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-600 transition">
              Add To Cart
            </button>
            <div>
              <p className="text-md text-[#151875] font-bold">858 Italian Sofa</p>
              <p className="text-lg text-indigo-900">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};