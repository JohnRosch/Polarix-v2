import { useState } from "react";
import member1 from "../assets/mark1.jpg";
import member2 from "../assets/Sheila.jpg";
import member3 from "../assets/Kathleen.jpg";
import member4 from "../assets/Yle.jpg";
import member5 from "../assets/Chloie.jpg";
// PANG ABANG FOR NEW MEMBER import member6 from "../assets/Marc.jpg";
import member7 from "../assets/nhyssa.jpg";
import { motion, AnimatePresence } from "framer-motion";


const teamMembers = [
  {
    name: "Mark Daniel Diwa",
    position: "Managing Director",
    description: `
      Mark earned his Bachelor of Science in Accountancy from the Polytechnic University of the Philippines Sta. Mesa branch in 2015 and passed the CPA Licensure Examination in May 2016. He has developed extensive experience in audit, offshore delivery, and US accounting practices through both leadership and client-facing roles.\n
      At Polarix, Mark leads the firm’s operations and oversees the delivery of services to CPA firms across the United States. He is actively involved in audit engagements, financial reporting oversight, and process optimization, ensuring consistent quality and efficiency across teams. His experience includes supporting clients in industries such as not-for-profit organizations, professional services, healthcare, and regulated entities, with a strong focus on compliance-driven environments and scalable offshore support. \n
      Prior to founding Polarix, Mark worked at PwC AC Manila, where he was part of the US audit practice and contributed to global initiatives, including a secondment to PwC Puerto Rico under the Center of Excellence. He later supported US engagements as part of the Australian and US territories, where he performed senior-level reviews, coordinated with onshore teams, and contributed to staff development and performance management. \n
      Fun Fact: Mark enjoys playing basketball and computer games such as DOTA 2, and is a dedicated Swiftie.
    `,

    image: member1,
  },
  {
    name: "Yle Nicole Ebreo",
    position: "Senior Auditor",
    description:
      `Yle graduated from Lyceum of Alabang in 2019 as a Dean’s Lister and has built a strong foundation in audit and financial reporting across both Philippine and US engagements.\n
       At Polarix, she plays a key role in supporting US-based audits, particularly for not-for-profit organizations, foundations, and community-based institutions. Her experience includes working with entities involved in education, grant funding, and social impact initiatives, where she performs audit procedures, prepares workpapers, and supports financial statement reviews in accordance with US standards.\n
       Prior to joining Polarix, Yle worked at SGV as a Senior Associate, handling audits across industries including retail, healthcare, engineering, and listed companies.\n
       Fun Fact: Many of Yle’s travels are inspired by her love for attending concerts.									
`,
    image:
      member4,
  },
  {
    name: "Chloie Veronica Domingo",
    position: "Senior Auditor",
    description:
      `Chloie graduated from the Polytechnic University of the Philippines in 2020 and has developed solid experience in audit engagements across various industries.\n
       At Polarix, she supports US audit and review engagements for clients including not-for-profit organizations, healthcare providers, professional associations, and fundraising entities. Her responsibilities include performing audit testing, preparing documentation, and supporting engagement deliverables within tight reporting timelines.\n
       She previously worked at SGV, where she gained exposure to industries such as manufacturing, construction, retail, financing, and human resource services.\n
       Fun Fact: Chloie enjoys playing the acoustic guitar and previously led small youth groups, mentoring students through discussions and community activities.
`,
    image:
      member5,
  },

  {
    name: "Sheila Fabellar",
    position: "Senior Accountant",
    description: 
      `Sheila graduated Cum Laude from Southville International School and Colleges in 2021 and holds certifications in Bookkeeping NC III and as a Certified QuickBooks User.\n
       At Polarix, she supports US clients in bookkeeping, financial reporting, and month-end close processes. She has experience handling accounts for professional service firms, multi-entity structures, and healthcare-related businesses. Her work includes maintaining general ledgers, preparing reports, and supporting audit and tax readiness.\n
       She previously held progressive roles at Southville, where she advanced to Acting Accounting Head and managed accounting operations and audit coordination.\n
       Fun Fact: Sheila enjoys water activities, running, and was part of a Black Light Theatre group in high school.						
`,
    image:
      member2,
  },

  {
    name: "Kathleen Parreno",
    position: "Senior Tax Accountant",
    description:
      `Kathleen graduated from the National College of Business and Arts – Fairview in 2023 and is a Certified QuickBooks ProAdvisor (Level 1 and 2).\n
       At Polarix, she supports US tax and bookkeeping engagements, including preparation of individual and business tax returns. She works with clients in real estate, service-based businesses, and multi-entity structures, assisting in maintaining accurate financial records and ensuring timely compliance.\n
       She began her career supporting tax and accounting engagements, where she developed hands-on experience in bookkeeping and audit support.\n
       Fun Fact: Kathleen enjoys thrillers and horror films, and watches them completely unfazed.

`,
    image:
      member3,
  },

// PANG ABANG FOR THE NEW MEMBER
//   {
//     name: "Marc Bien Modelo",
//     position: "Tax Accountant",
//     description:
//       `Bien graduated from the Tanauan Institute in 2018. With around four years of professional experience, he previously worked as a Tax Accountant, where he was responsible for required filings with the Bureau of Internal Revenue (BIR).
// Bien has a passion for reading self-help books, which reflects his continuous pursuit of personal growth. He also enjoys playing basketball and video games in his leisure time. A fun fact about Bien is that he always remembers the story but not the names of characters or people, whether in movies or real-life experiences.									
// `,
//     image:
//       member6,
//   },

  {
    name: "Nhyssa Adaoag",
    position: "Accountant",
    description:
      `Nhyssa graduated Cum Laude from Southville International School and Colleges in 2022 and is a Certified Tax Technician. She brings a strong foundation in accounting developed through both academic and hands-on experience.\n
       At Polarix, she supports US clients in bookkeeping, payroll, reconciliations, and financial reporting. Her experience includes working with educational institutions, not-for-profit organizations, healthcare providers, and small business operations.\n
       Her background includes roles in accounting and internal audit, where she handled accounts payable and receivable, payroll, tax compliance, and operational audits.\n
       Fun Fact: Nhyssa enjoys dancing and was an active member of her college dance troupe, performing in events and competitions.							
`,
    image:
      member7,
    imagePosition: "object-top"
  },
  
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const managerCard = teamMembers[0];
  const otherMembers = teamMembers.slice(1);

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 text-center mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20">Meet Our Team</h2>
      
      {/* Manager Card - Top Center */}
      <div className="flex justify-center mb-12 sm:mb-16 md:mb-20">
        <div
          onClick={() => setSelectedMember(managerCard)}
          className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow bg-white w-full max-w-xs sm:max-w-sm">
          <img
            src={managerCard.image}
            alt={managerCard.name}
            className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 sm:p-6 text-center flex-1 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-800 group-hover:text-cyan-700">
              {managerCard.name}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm font-medium">
              {managerCard.position}
            </p>
          </div>
        </div>
      </div>

      {/* Other Team Members - 3 Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {otherMembers.map((member, i) => (
          <div
            key={i}
            onClick={() => setSelectedMember(member)}
            className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow bg-white">
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-96 object-cover ${member.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-300`}
            />
            <div className="p-6 text-center flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-cyan-700">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm font-medium">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
  <AnimatePresence>
    {selectedMember && (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-40 h-40 object-cover rounded-full mb-6"
            />
            <h3 className="text-3xl font-bold text-cyan-700 text-center mb-2">
              {selectedMember.name}
            </h3>
            <p className="text-lg font-medium text-gray-600 text-center mb-6">
              {selectedMember.position}
            </p>
            <p className="text-gray-700 text-justify mb-8 whitespace-pre-line">
              {selectedMember.description}
            </p>
            <button
              onClick={() => setSelectedMember(null)}
              className="mt-4 text-white bg-cyan-500 hover:bg-red-600 px-6 py-2 rounded-full transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
  )}
</AnimatePresence>


    </section>
  );
}
