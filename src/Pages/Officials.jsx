import React from 'react';
import Slider from 'react-slick';
import officials_img from '../Images/officials_image.jpg';


const officials = [
  {
    id: 1,
    name: 'Pardo, Sofia M.',
    role: 'Brgy. Secretary',
    image: officials_img,
  },
  {
    id: 2,
    name: 'Mondidu, Dante A.',
    role: 'Brgy. Treasurer',
    image: officials_img,
  },
  {
    id: 3,
    name: 'Jeffrey P. Campaña',
    role: 'Brgy. Captain',
    image: officials_img,
  },
  {
    id: 4,
    name: 'Another Official',
    role: 'Brgy. Councilor',
    image: officials_img,
  },
  {
    id: 5,
    name: 'One More Official',
    role: 'Brgy. Councilor',
    image: officials_img,
  },
  {
    id: 6,
    name: 'Last Official',
    role: 'Brgy. Councilor',
    image: officials_img,
  },
];

const settings = {
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
        slidesToShow: 2, // Display 2 slides of barangay officials at a time on medium screens
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1, // Display 1 slide at a time on small screens
      }
    }
  ]
};

const Officials = () => {
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
            <div key={data.id} className="justify-center">
              <div className="bg-white shadow-2xl p-10 text-center">
                <div className="overflow-hidden rounded-full w-40 h-40 mx-auto mb-10">
                  <img src={data.image} alt={data.name} className="w-full h-full object-cover"/>
                </div>
                <div className="space-y-2">
                  <p className="font-bold">{data.name}</p>
                  <p className="text-sm text-blue-500">{data.role}</p>
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
