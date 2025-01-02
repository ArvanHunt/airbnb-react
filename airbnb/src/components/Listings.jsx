import { listings } from "../data/listings";


const Listings = () => {
    const listings = [
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 1,
        title: "KolechaFesar, India",
        location: "Pavana Lake",
        price: "₹19,400 night",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Lonavala, India",
        location: "Pavana Lake",
        price: "₹22,999 night",
        image: "https://via.placeholder.com/300",
      }
      // Add more listings
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{listing.title}</h3>
              <p className="text-gray-600 text-sm">{listing.location}</p>
              <p className="text-gray-900 font-bold">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Listings;
  