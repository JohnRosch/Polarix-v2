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
    description: `Mark took up Bachelor of Science in Accountancy and graduated from the Polytechnic University of the Philippines Sta Mesa Branch in 2015. 
      He passed the Certified Public Accountant Licensure Exam in May 2016 and has been working in the field for almost 10 years.
      Mark began his career as an Accounting Assistant at Getz Pharmaceuticals, where he was responsible for preparing expense reimbursement forms for medical representatives. 
      He then transferred to PwC AC Manila, starting out as an Audit Associate. During his tenure at PwC AC Manila, Mark was part of the pilot team for the US Territory. 
      He was also given the opportunity to be seconded to the PwC Puerto Rico Branch, to be trained specifially for the Cash and Equity Financial
       Statement Line Items under the Center of Excellence Team. Later on in his career, he was selected to be a part of the audit team for the Australian Territory, 
       specifically the Extension of Team Senior Pilot Program. Around 2022, he was then assigned to the Industrial Products sector of the United States territory wherein as an Audit Manager
       , part of his responsibilities included performing manager reviews on the workpapers of offshore and onshore audit associates and senior associates, 
       conducting touchpoint calls with the engagement team's senior manager, director, and partner, and participating in the performance assessment of his audit staff 
       during career round table discussions. 
       In his personal time, Mark enjoys playing basketball and computer games such as DOTA 2. A fun fact about Mark is that he is a dedicated Swiftie.`,
    image: member1,
  },
  {
    name: "Yle Nicole Ebreo",
    position: "Senior Auditor",
    description:
      `Yle graduated from Lyceum of Alabang in 2019 as a Dean's Lister. With around five years of professional experience, she has developed a robust skill set in auditing and financial analysis.
Yle's prior work experience includes a four-year tenure at SGV, where she served as a Senior Associate. In this role, she performed audits for various industries, including retail and merchandising, auto-vehicle dealerships, engineering, schools, hospitals, and listed holding companies.
In her personal time, Yle loves reading young adult novels and watching series. While she doesn't play online or video games, she enjoys participating in challenging team activities. A fun fact about Yle is that most of her travels are motivated by her love for attending concerts.									
`,
    image:
      member4,
  },
  {
    name: "Chloie Veronica Domingo",
    position: "Senior Auditor",
    description:
      `Chloie graduated from the Polytechnic University of the Philippines, Sta. Mesa Branch in 2020. With over three years of professional experience, she previously worked at SGV, where she honed her skills in auditing. Her audit experience spans a diverse range of industries, including manufacturing, food and beverages, construction, human resource services, mining, retail, and financing.
Outside of her professional life, Chloie enjoys playing the acoustic guitar and engaging in sports like swimming and badminton, albeit in a casual manner. A fun fact about Chloie is that she once served as a preacher for small youth groups on college campuses. This role allowed her to build meaningful relationships with young adults, listen to their experiences, and speak to their spiritual and personal journeys through regular gatherings, discussions, and mentorship.
Interestingly, dyeing her hair blonde has become her unique coping mechanism when dealing with stress.`,
    image:
      member5,
  },

  {
    name: "Sheila Fabellar",
    position: "Senior Accountant",
    description: `Sheila graduated from Southville International School and Colleges in 2021, earning the distinction of Cum Laude. She hold certifications in Bookkeeping NC III and as a Certified QuickBooks User. With over four years of professional experience, she has developed a strong foundation in accounting and financial management through various roles.
Sheila began her career at Southville International School and Colleges as an Audit Associate, wherein she conducted audits of the company and its affiliates. Following this, she worked as an Accountant at the Asian Association of School HRMD, Inc. Returning to Southville International School and Colleges, she served as an Accounting Associate, preparing journal entries and recording them in the Microsoft Dynamics GP system. She then advanced to the role of Accounting Coordinator, wherein she continued her previous tasks and additionally oversaw and assisted three associates (two AR associates and one Allied Business Unit associate). Her most recent position was the  Acting Accounting Head at Southville International School and Colleges. In this role, she continued her responsibilities from the Accounting Associate and Coordinator positions, prepared reports and schedules for external audits at fiscal year-end.
Regarding Sheila's hobbies and interests, she loves doing water activities like snorkeling, swimming, and riding water thrill rides. She also enjoys running, reading books, and watching detective movies. Additionally, she is an avid sports enthusiast, playing basketball, volleyball, and badminton. A fun fact about Sheila is that in high school, she was part of the Black Light Theatre Performers, using her hands to create captivating performances.								
`,
    image:
      member2,
  },

  {
    name: "Kathleen Parreno",
    position: "Senior Tax Accountant",
    description:
      `Kathleen graduated from the National College of Business and Arts - Fairview Branch in 2023. She is a Certified QuickBooks ProAdvisor - Level 1 and 2. With over a year of professional experience, Kathleen has honed her skills in accounting and financial management.
Her prior working experience includes a four-month stint at UNA Tax and Accounting Services as an Accounting Intern under the Tax and Bookkeeping department. In this role, she supported the team with various audit tasks and client bookkeeping responsibilities, working alongside senior auditors and accountants to ensure accurate financial reporting and compliance.
Kathleen enjoys reading novels, watching documentaries, k-dramas, and other thrillers and psychological horror films. She is also a foodie who loves exploring different cuisines. In her free time, she engages in yoga, plays board games, and goes roller skating. A fun fact about Kathleen is that gore, thrills, and horror don’t scare her—she watches them with a poker face.						
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
      `Nhyssa graduated Cum Laude from Southville International School and Colleges in 2022. She is a Certified Tax Technician and brings over three years of professional experience in accounting and finance, complemented by five years as a working student.
She began her career as an Accounts Associate at South SEED-LPDH College, where she managed accounts payable and receivable, payroll, bookkeeping, bank reconciliation, and tax preparation and filing, while also providing support for financial statement preparation and administrative tasks. Nhyssa later joined Southville International School and Colleges as an Internal Audit Coordinator, supervising operational audits, monitoring statutory compliance, and coordinating with government offices.
Her early experience as a working student at Southville gave her hands-on exposure to cashiering, payment verification and posting, bank transactions, checking employee advances, and assisting in check requests and disbursement processes—building a strong foundation for her accounting career.
Outside of work, Nhyssa enjoys creative pursuits and was an active member of the Monarchs Dance Troupe during her college years, performing at school events and internal competitions.							
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
            <p className="text-gray-700 text-justify mb-8">
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
