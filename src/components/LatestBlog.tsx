import Image from 'next/image';

const Latestblog = () => {
  const blogPosts = [
    {
      title: "Top Essential Trends in 2021",
      imageSrc: "/Latest/blog1.jpeg",
      author: "SaberAli",
      date: "21 August 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
    {
      title: "Top Essential Trends in 2021",
      imageSrc: "/Latest/blog2.jpeg",
      author: "Surfauxion",
      date: "21 August 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
    {
      title: "Top Essential Trends in 2021",
      imageSrc: "/Latest/blog3.jpeg",
      author: "SaberAli",
      date: "21 August 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-11 mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">Latest Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.title} className="bg-white hover:text-red-500 rounded-lg shadow-md overflow-hidden">
            <Image 
              src={post.imageSrc}
              alt={post.title}
              width={500} 
              height={300} 
              className="object-cover" 
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2 mb-10">
                <span className="text-xs text-gray-500">{post.author}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 hover:text-red-500 text-sm">{post.description}</p>
              <button className="mt-2 inline-block text-black px-4 py-2 underline rounded-md hover:text-red-500 ">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestblog;