import { FaArrowAltCircleDown } from "react-icons/fa";
import { motion } from "framer-motion"

function App() {

  return (
    <>
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <nav className="text-3xl mt-4 mr-10 navbar">
          <ul className="flex flex-row justify-between items-center w-full">
            <div className="flex justify-center w-full absolute gap-6 tabs">
              <li className="mx-3"><a href="#accueil" className="hover:text-[var(--accent)] hover:text-4xl transition-all">Accueil</a></li>
              <li className="mx-3"><a href="#profil" className="hover:text-[var(--accent)] hover:text-4xl transition-all">Profil</a></li>
              <li className="mx-3"><a href="#experience" className="hover:text-[var(--accent)] hover:text-4xl transition-all">Expérience</a></li>
              <li className="mx-3"><a href="#formation" className="hover:text-[var(--accent)] hover:text-4xl transition-all">Formation</a></li>
            </div>

            <li className="ml-auto bg-[#FFE53B] rounded-lg p-3 z-10 hover:-translate-y-0.5 transition-all hover:shadow-xl">
              <a href="#contact">Contacter</a>
            </li>
          </ul>
        </nav>
      </motion.div>


      <div className="flex mt-[15rem] h-[40vh] relative flex-col">
        <div className="flex inline">
          <div className="w-2/5 h-1/2 ml-[15rem] flex items-center justify-center relative">
            <div className="bg-[var(--accent)] w-[40rem] h-[18rem] rounded-full blur-[80px] absolute"></div>
            <h1 className="text-white text-7xl absolute">Bienvenue👋</h1>
          </div>

          <motion.div initial={{ opacity: 0, x: 600 }} whileInView={{ opacity: 1, x: 300 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="w-3/5 h-1/2 ml-[3rem] flex items-center justify-center relative">
              <h1 className="text-5xl name">Je suis
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold"> Damien RIFFLART</span>
                , étudiant en 1ère au lycée Louis Armand à Mulhouse.
              </h1>
            </div>
          </motion.div>
        </div>

        <div className="w-full inline-flex justify-center items-center gap-5 mt-[13rem]">
          <hr className="border-4 rounded-2xl w-1/3 border-gray-400" />
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 20 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <FaArrowAltCircleDown color="gray" size={40} className="mt-[-1rem]"/>
          </motion.div>
          <hr className="border-4 rounded-2xl w-1/3 border-gray-400" />
        </div>
      </div>
    </>
  )
}

export default App
