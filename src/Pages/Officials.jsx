import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: true,
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
        const response = await axios.get("http://localhost:5000/api/officials");
        console.log(response.data); // Inspect the response
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
