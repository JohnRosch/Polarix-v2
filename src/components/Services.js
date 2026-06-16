import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaClipboardCheck,
  FaBookOpen,
} from "react-icons/fa";

const services = [
  {
    title: "Tax Services (Individuals, Businesses and Not-for-Profit Organizations)",
    description:
      `Our firm provides specialized offshore support for the preparation of U.S. tax returns for individuals, businesses, 
      and not-for-profit organizations. We focus on delivering accurate, compliant, and timely tax preparation through a team of 
      highly experienced professionals.`,
    icon: <FaFileInvoiceDollar className="text-6xl text-green-900" />,
    modal: (
      <div className="space-y-3 sm:space-y-4 text-gray-700">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Individual Tax Returns</h3>
          <p className="text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
              We deliver accurate, timely, and compliance-driven tax preparation services for individuals, ensuring full alignment with federal, 
              state, and local regulations. Our team is experienced in handling complex filing scenarios and works as a reliable extension 
              of CPA firms to meet demanding deadlines without compromising quality.
          </p>
          <ul className="list-disc ml-5 sm:ml-6 text-xs sm:text-sm space-y-1 sm:space-y-1.5">
            <li>Form 1040</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Business Tax Returns</h3>
           <p className="text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
              We provide end-to-end tax preparation support for business entities, helping firms efficiently manage high 
              volumes while maintaining technical accuracy and regulatory compliance.
          </p>

          <ul className="list-disc ml-5 sm:ml-6 text-xs sm:text-sm space-y-1 sm:space-y-1.5">
            <li>Form 1120 (Corporation)</li>
            <li>Form 1120S (S-Corporation)</li>
            <li>Form 1065 (Partnership)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Others</h3>
          <ul className="list-disc ml-5 sm:ml-6 text-xs sm:text-sm space-y-1 sm:space-y-1.5">
            <li>Form 990</li>
            <li>CHAR500 / CHAR660 (NY State Charities Bureau)</li>
            <li>CRI-200</li>
            <li>CRI-300R</li>
            <li>Form 5500</li>
          </ul>
        </div>
      </div>
    )
  },

  {
    title: "Audit & Attest Services",
    description:
      `Our firm delivers specialized offshore audit support designed to help CPA firms and accounting practices maximize 
      efficiency and maintain the highest standards of quality. We focus on the most critical aspects of the audit 
      process—strategic planning and risk assessment, precise substantive testing, and clear, professional reporting.`,
    icon: <FaBalanceScale className="text-6xl text-green-900" />,
    modal: (
      <div className="space-y-4 sm:space-y-6 text-gray-700">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Full Audit Services</h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
            We deliver high-quality audit support designed to strengthen assurance, improve transparency, 
            and help organizations meet regulatory and stakeholder expectations. Our company has developed a strong 
            specialization in not-for-profit organizations, with deep experience in financial reporting, grant compliance, 
            and donor-restricted funding structures.
            <br />
            <br />
            Our team understands the complexities of nonprofit environments, including funding accountability, 
            program-based reporting, and regulatory scrutiny, allowing us to provide meaningful audit support that goes 
            beyond standard procedures.
            <br />
            <br />
            Our audit procedures include:

          </p>

          <ul className="list-disc ml-5 sm:ml-6 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <li><span className="font-semibold">Walkthroughs of Key Processes</span> –  Evaluating internal controls, operational workflows, and compliance structures, including grant and program-specific controls</li>
            <li><span className="font-semibold">Risk Assessment Procedures</span> – Identifying areas of material risk, with particular focus on revenue recognition, contributions, grants, and restricted funds</li>
            <li><span className="font-semibold">Substantive Testing</span> – Performing detailed testing to obtain sufficient and appropriate audit evidence, including grant expenditures and compliance-related transactions</li>
            <li><span className="font-semibold">Preparation of Financial Statements</span> – Supporting the preparation of financial statements, including nonprofit-specific disclosures and reporting requirements</li>
          </ul>

          <p className="mt-2 sm:mt-4 italic text-xs sm:text-sm leading-relaxed">We integrate seamlessly with our clients’ audit teams, enhancing capacity, improving turnaround times, and maintaining consistent audit quality across engagements.</p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Attest Services</h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">For clients who do not require a full audit, we offer limited assurance services:</p>
          <ul className="list-disc ml-5 sm:ml-6 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <li><span className="font-semibold">Review Engagements</span> – We perform analytical procedures and targeted inquiries to provide limited assurance, with a strong understanding of nonprofit reporting frameworks and financial statement presentation</li>
            <li><span className="font-semibold">Agreed-Upon Procedures</span> – Targeted procedures based on your specific needs</li>
            <li><span className="font-semibold">Compilation Services</span> – Assembling financial statements based on information provided (without assurance)</li>
          </ul>
        </div>
      </div>
    )
  },

  {
    title: "Compilations and Agreed Upon Procedures",
    description:
      `Our firm offers comprehensive compilations and agreed-upon procedures services.`,
    icon: <FaClipboardCheck className="text-6xl text-green-900" />,
    modal: (
      <div className="space-y-4 sm:space-y-6 text-gray-700">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Compilation Services</h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">We deliver high-quality financial statement compilations that go 
            beyond basic assembly, ensuring clarity, consistency, and decision-useful reporting aligned with applicable accounting standards. 
            Our team has deep experience supporting not-for-profit organizations, including the presentation of donor-restricted funds, 
            program-based reporting, and grant-related disclosures.
            <br />
            <br />
            Our compilation services include:
            </p>
          <ul className="list-disc ml-5 sm:ml-6 space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
            <li>Balance Sheets</li>
            <li>Income Statements</li>
            <li>Cash Flow Statements</li>
            <li>Customized financial and management reports</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Agreed-Upon Procedures</h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">We provide targeted, high-impact agreed-upon procedures designed to 
            address specific risks, compliance requirements, and operational concerns. Polarix has developed a strong niche in supporting 
            not-for-profit organizations, particularly those subject to grant funding and regulatory oversight.
            <br />
            <br />
            Our procedures include:  
          </p>

          <ul className="list-disc ml-5 sm:ml-6 space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
            <li>Account reconciliations</li>
            <li>Transaction testing and validation</li>
            <li>Grant and regulatory compliance verification</li>
            <li>Customized analytical and investigative procedures</li>
          </ul>
          <br />

          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">We specialize in indirect cost rate (ICR) assessments and related 
            procedures, a highly technical and in-demand area for organizations receiving government funding. Our team evaluates cost 
            classifications, reviews allocation methodologies, and ensures alignment with applicable regulatory frameworks, 
            helping clients establish defensible cost structures, strengthen compliance, and maximize funding recovery.
          </p>

        </div>
      </div>
    )
  },

  {
    title: "Bookkeeping & Accounting Services",
    description:
      `We provide reliable and scalable bookkeeping and accounting support designed to help CPA firms and businesses maintain accurate 
      financial records, improve visibility, and support informed decision-making. Our team has experience supporting a range of industries, 
      including professional services, not-for-profit organizations, healthcare, and other compliance-driven sectors that require structured, 
      timely, and reliable financial reporting.`,
    icon: <FaBookOpen className="text-6xl text-green-900" />,
    modal: (
      <div className="space-y-4 sm:space-y-6 text-gray-700">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Day-to-Day Bookkeeping</h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">We manage your daily financial transactions with precision and consistency, ensuring your books remain accurate and up to date:</p>
          <ul className="list-disc ml-5 sm:ml-6 space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
            <li>Recording income and expenses</li>
            <li>Reconciling bank and credit card accounts</li>
            <li>Maintaining general ledgers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Financial Reporting</h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">We deliver clear, timely, and decision-ready financial reports to support operational and strategic needs:</p>
          <ul className="list-disc ml-5 sm:ml-6 space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
            <li>Balance Sheets</li>
            <li>Profit &amp; Loss Statements</li>
            <li>Cash Flow Reports</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">QuickBooks Expertise</h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Our team is highly proficient in QuickBooks 
            Online and Desktop, enabling efficient setup, management, and optimization of your accounting systems:</p>

          <ul className="list-disc ml-5 sm:ml-6 space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
            <li>Seamless setup and customization</li>
            <li>Efficient data entry and categorization</li>
            <li>Real-time financial tracking and reporting</li>
            <li>Troubleshooting and system optimization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Year-End Preparation</h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">We ensure your books are audit- and tax-ready, 
            reducing bottlenecks and improving turnaround during critical reporting periods:</p>

          <ul className="list-disc ml-5 sm:ml-6 space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
            <li>Adjusting journal entries</li>
            <li>Trial balance review</li>
            <li>Coordination with tax preparers or auditors</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">Additional Capabilities</h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">We offer specialized support for more complex accounting needs, 
            including:</p>
            
          <ul className="list-disc ml-5 sm:ml-6 space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
            <li>Grant and contract accounting</li>
            <li>Cost allocations and methodology support</li>
          </ul>
        </div>

      </div>
    )
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 text-center mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20">
        Our Services
      </h2>

      <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedService(service)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 shadow-md hover:shadow-2xl hover:border-cyan-700 transition-all duration-300"
            style={{
              backgroundImage: "radial-gradient(circle at top left, #f9fafb, #ffffff)",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 line-clamp-3">{service.title}</h3>
              <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <button className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors whitespace-nowrap">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-md sm:max-w-xl md:max-w-2xl w-full p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl relative max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-4 sm:mb-6 leading-tight">
                {selectedService.title}
              </h2>

              <div className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                {selectedService.modal}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="mt-6 sm:mt-8 block mx-auto px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
