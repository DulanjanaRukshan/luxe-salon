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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // Tablet & Mobile
        settings: {
          slidesToShow: 1,
          dots: true,
          autoplay: false // Easier to read on mobile
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-dark text-white relative overflow-hidden w-full">
      
      {/* --- RESPONSIVE ARTISTIC BACKGROUND --- */}
      
      {/* 1. Large Watermark Quote (Smaller on Mobile) */}
      <div className="absolute top-5 left-5 md:top-10 md:left-10 text-gold opacity-5 pointer-events-none select-none">
        <Quote className="w-32 h-32 md:w-[300px] md:h-[300px]" strokeWidth={1} />
      </div>

      {/* 2. Golden Gradient Orbs (Scaled Down) */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gold/10 rounded-full blur-[60px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[400px] md:h-[400px] bg-purple-900/20 rounded-full blur-[50px] md:blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 border border-gold/30 rounded-full">
               <Quote className="text-gold w-6 h-6" />
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
            Voices of Elegance
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative px-2 md:px-0">
          <Slider {...settings} className="testimonial-slider pb-8 md:pb-12">
            {testimonials.map((item) => (
              <div key={item.id} className="px-2 md:px-4 py-4">
                <motion.div 
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg h-full min-h-[300px] md:min-h-[350px] flex flex-col justify-between"
                >
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#D4AF37" className="text-gold drop-shadow-lg" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 font-light italic mb-6 leading-relaxed text-sm md:text-lg">
                    "{item.text}"
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white/20" 
                    />
                    <div>
                      <h4 className="font-serif text-lg md:text-xl text-white flex items-center gap-2">
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

      {/* Mobile Dot Adjustments */}
      <style jsx global>{`
        .testimonial-slider .slick-dots {
            bottom: -10px;
        }
        .testimonial-slider .slick-dots li button:before {
          color: white;
          opacity: 0.2;
          font-size: 8px; /* Smaller dots on mobile */
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #D4AF37 !important;
          opacity: 1;
          font-size: 12px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;