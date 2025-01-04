"use client";

import Image from "next/image";

export default function ShopexOffer() {
  const offers = [
    {
      id: 1,
      icon: "/Shopex/img1.jpg", 
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 2,
      icon: "/Shopex/img2.jpg", 
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 3,
      icon: "/Shopex/img3.jpg", 
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 4,
      icon: "/Shopex/img4.jpg", 
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-6 mb-12">
    {/* Header */}
      <h2 className="text-center text-[43px] font-bold text-[#151875] mb-8">
        What Shopex Offer!
      </h2>

    {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white shadow-lg rounded-lg p-12 text-center"
          >
    {/* Icon */}
        <div className="flex justify-center mb-4">
              <Image
                src={offer.icon}
                alt={offer.title}
                width={90}
                height={60}
                className="object-contain"
              />
            </div>

    {/* Title */}
         <h3 className="text-lg font-semibold text-[#151875] mb-2">
            {offer.title}
         </h3>

    {/* Description */}
        <p className="text-gray-400 text-sm">{offer.description}</p>
    </div>
        ))}
      </div>
    </section>
  );
};