import Product_card from "./utilities/Product_card";
import Footer from "./Footer";
import { useRef } from "react";


const Banner = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  

  
  return (
    <div className="w-full h-screen flex flex-col bg-slate-950">
        
        {/* Banner */}
        <div className="banner relative">
          <div className="h-screen">
            <img className="home-img opacity-80" src="home-image.jpg" />
            <div class="yellow-overlay"></div>
          </div>
          <div className="home-content-big absolute top-[32vw] left-[4vw] flex flex-col items-start gap-[1vw]">
            <div className="details">
              <p className="title text-[3.5vw] font-medium">
                Every Hero Requires A Suite
              </p>
              <p className="content text-[1.2vw]">
                We provide you with out latest collections of superhero suites and goodies
              </p>
            </div>
            <button className="border border-white py-[.5vw] px-[1vw] capitalize rounded-[.5vw] cursor-pointer">
              shop now
            </button>
          </div>

        </div>

        {/* Trendings and recently seen */}
        <div className="w-full h-auto p-5 flex flex-col items-center bg-slate-950">
            {/* Heading of section : trending */}
            <div className="text-5xl font-medium mb-10">Trending</div>
            <div className="w-[80%] h-auto py-5 flex flex-col items-center">

              {/*Most popular in men */}
              <div className="flex w-full justify-center">
              
              <Product_card 
                image="Men_shirt_1.webp"
                brand="Bewakoof®"
                title="Men's Chocolate Brown Iron Truck Graphic T-shirt"
                price={699}
                originalPrice={1899}
                discount="63% OFF"
                rating={4.5}
              />

              <Product_card 
                image="Men_shirt_2.webp"
                brand="Bewakoof®"
                title="Black Panther shirt"
                price={999}
                originalPrice={2999}
                rating={4.5}
              />

              <Product_card 
                image="Men_shirt_2.webp"
                brand="Bewakoof®"
                title="Black Panther shirt"
                price={999}
                originalPrice={2999}
                rating={4.5}
              />

              </div>

            </div>

            <div className="border-[1px] border-white w-[80%] rounded-4xl my-5"></div>

            {/* Section of searches */}

            <div className="text-4xl font-medium mb-10">See search results here</div>
            <div className="w-[80%] h-[600px] scrollbar-hide border-2 border-white rounded-xl overflow-y-auto flex flex-col items-center p-4">

                {/* First row */}
                <div className="flex gap-2 p-2">
                  <Product_card 
                    image="Men_shirt_1.webp"
                    brand="Bewakoof®"
                    title="Men's Chocolate Brown Iron Truck Graphic T-shirt"
                    price={699}
                    originalPrice={1899}
                    discount="63% OFF"
                    rating={4.5}
                  />

                  <Product_card 
                    image="Men_shirt_1.webp"
                    brand="Bewakoof®"
                    title="Men's Chocolate Brown Iron Truck Graphic T-shirt"
                    price={699}
                    originalPrice={1899}
                    discount="63% OFF"
                    rating={4.5}
                  />

                  <Product_card 
                    image="Men_shirt_2.webp"
                    brand="Bewakoof®"
                    title="Black Panther shirt"
                    price={999}
                    originalPrice={2999}
                    rating={4.5}
                  />

                  <Product_card 
                    image="Men_shirt_2.webp"
                    brand="Bewakoof®"
                    title="Black Panther shirt"
                    price={999}
                    originalPrice={2999}
                    rating={4.5}
                  />
                </div>

                {/* second row */}
                <div className="flex gap-2 p-2">
                  <Product_card 
                    image="Men_shirt_1.webp"
                    brand="Bewakoof®"
                    title="Men's Chocolate Brown Iron Truck Graphic T-shirt"
                    price={699}
                    originalPrice={1899}
                    discount="63% OFF"
                    rating={4.5}
                  />

                  <Product_card 
                    image="Men_shirt_1.webp"
                    brand="Bewakoof®"
                    title="Men's Chocolate Brown Iron Truck Graphic T-shirt"
                    price={699}
                    originalPrice={1899}
                    discount="63% OFF"
                    rating={4.5}
                  />

                  <Product_card 
                    image="Men_shirt_2.webp"
                    brand="Bewakoof®"
                    title="Black Panther shirt"
                    price={999}
                    originalPrice={2999}
                    rating={4.5}
                  />

                  <Product_card 
                    image="Men_shirt_2.webp"
                    brand="Bewakoof®"
                    title="Black Panther shirt"
                    price={999}
                    originalPrice={2999}
                    rating={4.5}
                  />
                </div>
            </div>
            

        </div>

        <Footer></Footer>
    </div>
    
  );
};

export default Banner;
