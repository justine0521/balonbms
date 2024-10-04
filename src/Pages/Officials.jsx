import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Custom Previous Arrow Component
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-gray-400`} // Tailwind class for light gray color
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </div>
  );
};

// Custom Next Arrow Component
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-gray-400`} // Tailwind class for light gray color
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L12.17 12z" />
      </svg>
    </div>
  );
};

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 800,
  swipe: true,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "ease-in-out",
  pauseOnHover: true,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const Officials = () => {
  const [officials, setOfficials] = useState([]);

  useEffect(() => {
    const fetchOfficials = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/officials`);

        setOfficials(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficials();
  }, []);

  return (
    <section className="flex flex-col items-center mb-5">
      <div className="relative w-full bg-cover bg-center">
        <div className="relative inset-0 flex items-center justify-center">
          <div className="text-center text-black px-10 pt-10">
            <p className="text-2xl text-green-500">Balon Anito</p>
            <h1 className="text-5xl font-bold mb-4 text-green-500">Our Officials</h1>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 pb-12">
        <Slider {...settings}>
          {officials.map((data) => (
            <div key={data._id} className="justify-center">
              <div className="bg-white shadow-2xl p-10 text-center">
                <div className="overflow-hidden rounded-full w-40 h-40 mx-auto mb-10">
                  <img src={data.imageUrl} alt={data.fullname} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <p className="font-bold">{data.fullname}</p>
                  <p className="text-sm text-blue-500">{data.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Officials;
