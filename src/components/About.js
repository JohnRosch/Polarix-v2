import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="about" className="mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20">
      {/* Hero Section - Plain White Background */}
      <section className="h-[35vh] sm:h-[40vh] bg-white flex items-center justify-center text-center px-4 sm:px-6">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4 sm:mb-6 md:mb-10">About Us</h1>
          <p className="text-sm sm:text-base md:text-xl max-w-2xl mx-auto text-gray-800">
            Discover how Polarix Solutions Inc. supports clients through premium financial and auditing services.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white text-gray-800 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl text-green-700 font-bold mb-4 sm:mb-6">Who We Are</h2>
            <p className="mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
            
              Polarix Solutions Inc. is a Philippine-based provider of high-quality auditing, bookkeeping, and taxation support services, 
              serving CPA firms and organizations primarily in the United States. Established in 2017, Polarix was built with the vision of 
              helping accounting firms scale efficiently by delivering reliable, cost-effective, and technically proficient offshore solutions.
              <br></br>
              <br></br>
              
              With a strong foundation rooted in U.S. accounting and compliance standards, our team is equipped to seamlessly integrate with 
              clients’ operations, functioning as a natural extension of their internal teams. While we maintain a strategic affiliation with 
              Caballero & Associates, a New Jersey-based CPA firm, Polarix has evolved to support a broader network of accounting firms and 
              businesses seeking dependable offshore talent.
              Our approach is centered on consistency, accountability, and quality. We work closely with our clients to understand their
              processes, timelines, and expectations, enabling us to deliver services that are not only accurate and timely but also aligned with 
              their growth objectives.
              <br></br>
              <br></br>
              
              As we continue to expand, Polarix remains committed to strengthening our capabilities, investing in our people, and building 
              long-term partnerships, positioning ourselves as a trusted offshore partner for firms looking to scale with confidence.

            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
              alt="Team working together"
              className="rounded-xl shadow-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[360px]"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-gray-300 hover:shadow-2xl transition-all duration-500" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">Mission Statement</h3>
            <p className="leading-relaxed text-xs sm:text-sm md:text-base text-gray-700">
              "To provide quality, reliable, and timely auditing, bookkeeping, and taxation services to individuals and small to mid-size organizations, leveraging our expertise and commitment to excellence."
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-gray-300 hover:shadow-2xl transition-all duration-500" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">Vision Statement</h3>
            <p className="leading-relaxed text-xs sm:text-sm md:text-base text-gray-700">
              "To be the premier provider of auditing, bookkeeping, and taxation services, empowering individuals and small to mid-size organizations with unparalleled expertise and dedication."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
