export default function Product_card({
    image,
    brand = "Zidio®",
    title = "Men Shirt 1",
    price = 699,
    originalPrice = 1899,
    discount,
    rating = 4.5,
    showBadge = true,
    showRating = true
  }) {
    return (
      <div className="w-[220px] mx-8 border rounded-lg overflow-hidden shadow hover:shadow-md transition bg-[#1a1a1a] hover: cursor-pointer">
        <div className="relative">
          <img 
            src={`./Men_products/${image}`} 
            alt={title} 
            className="w-full h-[280px] object-cover"
          />
  
          {showBadge && (
            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
              OVERSIZED FIT 
            </div>
          )}
  
          {showRating && (
            <div className="absolute bottom-2 left-2 bg-white text-yellow-500 text-sm px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
              ⭐ {rating}
            </div>
          )}
        </div>
  
        <div className="p-3 flex flex-col gap-1">
          <p className="text-sm text-gray-100 font-semibold">{brand}</p>
          <p className="text-xs text-gray-300">{title}</p>
  
          <div className="flex items-center gap-2 mt-1">
            <p className="text-base font-semibold text-white">₹{price}</p>
            <p className="text-xs text-gray-400 line-through">₹{originalPrice}</p>
            {discount && <p className="text-xs text-green-400 font-medium">{discount}</p>}
          </div>
        </div>
      </div>
    );
  }
  