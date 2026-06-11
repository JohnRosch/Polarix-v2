import client1 from "../assets/client1.jpg";
import { FaQuoteLeft } from "react-icons/fa";


const testimonial = {
  name: "Tracy Fickett",
  role: "Founder, BUSBooks, LLC",
  comment:
    "BUSBooks has been very pleased with the Polarix Solutions team's performance. The team consistently communicates well, responds promptly, and demonstrates a strong dedication to their work. They are reliable, professional, and committed to supporting our operations effectively. Their attention to detail and willingness to assist have made them a valuable part of our workflow. We appreciate their continued effort and professionalism.",
  image: client1,
};

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 text-center mt-10 sm:mt-16 md:mt-20 mb-8 sm:mb-12 md:mb-16">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16 text-sm sm:text-base">
          Trusted by business owners and professionals who value clarity, accuracy, and dependable support.
        </p>

        <div className="flex justify-center px-1 sm:px-2">
          <article className="group relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center gap-6 sm:gap-8">
              <div className="shrink-0 rounded-full border-4 border-cyan-100 p-1 bg-white shadow-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 text-center md:text-center">
                <FaQuoteLeft className="text-cyan-600 text-xl mb-3 mx-auto" />
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-center">
                  “{testimonial.comment}”
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-cyan-700 transition-colors duration-300 text-center">
                  {testimonial.name}
                </h3>
                <p className="text-sm sm:text-base text-cyan-700 font-medium text-center">{testimonial.role}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
