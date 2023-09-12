import backImg from "../assets/excavator-1.jpg";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const Home = () => {
  const containerStyle = {
    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backImg})`,
    //backgroundColor: "rgba(0, 0, 0, 0.5)", // Replace with your desired background color and opacity
  };
  return (
    <div>
      <div
        className=" flex flex-col justify-center  bg-cover bg-no-repeat bg-center min-h-[100vh] px-4 py-9 overflow-x-hidden"
        //style={{ backgroundImage: `url(${backImg})` }}
        style={containerStyle}
      >
        <h1 className="text-white font-[barlow] font-black text-3xl text-center ">
          We help you build your feature{" "}
        </h1>
        <p className="text-white text-center my-8">
          The heart and soul of Titam Rentals comes down to one thing and one
          thing only: helping people. You, our customer, are who we design all
          our services and technologies around and you have inspired our
          three-word philosophy – Built around you. This philosophy is behind
          everything we do. It’s what defines us and is what sets us apart in
          the industry.
        </p>
        <form
          action=""
          className="flex items-center justify-between bg-white w-[80%] mx-auto px-5 py-[8px] rounded-3xl"
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none w-[90%]"
          />

          <button>
            <svg
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
            >
              <path
                d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
                fill="##242c3f"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
