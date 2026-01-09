import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Emily Watson",
    role: "Regular Client",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "I have never felt more confident. The balayage expert here is a true artist! The atmosphere is so relaxing.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Bridal Package",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    text: "They made my wedding day perfect. The team arrived on time and was incredibly professional.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "VIP Member",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "Best grooming experience in the city. The private suite is a game changer for privacy.",
    rating: 5
  },
  {
    id: 4,
    name: "Jessica Lee",
    role: "Model",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    text: "I trust no one else with my hair. Whether it's a trim or a complete color change, the results are stunning.",
    rating: 5
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // Large Desktops
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024, // Laptops & Tablets (Changed from 2 to 1 for safety)
        settings: {
          slidesToShow: 1, // FORCE 1 COLUMN
          dots: true
        }
      },
      {
        breakpoint: 640, // Mobile Phones
        settings: {
          slidesToShow: 1, // FORCE 1 COLUMN
          dots: true,
          autoplay: false // User controls the swipe
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-20 bg-dark text-white relative overflow-hidden w-full">
      
      {/* Background Decor */}
      <div className="absolute top-5 left-5 text-gold opacity-5 pointer-events-none">
        <Quote className="w-24 h-24 md:w-64 md:h-64" strokeWidth={1} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
            Voices of Elegance
          </h2>
          <p className="text-gray-400 text-sm md:text-base">What our clients say about us</p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Slider {...settings} className="testimonial-slider pb-10">
            {testimonials.map((item) => (
              <div key={item.id} className="px-3 py-4"> {/* Padding between slides */}
                <motion.div 
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-between"
                  style={{ minHeight: '320px' }} // Force consistent height
                >
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4AF37" className="text-gold" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 font-light italic mb-8 leading-relaxed text-lg">
                    "{item.text}"
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-4">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-12 h-12 rounded-full object-cover border border-white/20" 
                    />
                    <div>
                      <h4 className="font-serif text-lg text-white flex items-center gap-2">
                        {item.name}
                        <CheckCircle size={14} className="text-gold" />
                      </h4>
                      <span className="text-xs text-gold/80 uppercase tracking-widest font-semibold">{item.role}</span>
                    </div>
                  </div>

                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Styles for Dots */}
      <style jsx global>{`
        .testimonial-slider .slick-dots li button:before {
          color: white;
          opacity: 0.2;
          font-size: 10px;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #D4AF37 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;