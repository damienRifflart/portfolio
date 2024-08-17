import { FaArrowAltCircleDown } from "react-icons/fa";
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);


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

      <button className="hidden menu ml-3">
        {isOpen ? <X onClick={() => setIsOpen(false)}/> : <Menu onClick={() => setIsOpen(true)} />}
      </button>

      <nav>
          {isOpen && (
            <ul className="flex flex-col justify-between items-center text-center">
              <div className="flex flex-col justify-center absolute gap-2">
                <li className="mx-3"><a href="#accueil" className="hover:font-bold transition-all text-xl">Accueil</a></li>
                <li className="mx-3"><a href="#profil" className="hover:font-bold transition-all text-xl">Profil</a></li>
                <li className="mx-3"><a href="#experience" className="hover:font-bold transition-all text-xl">Expérience</a></li>
                <li className="mx-3"><a href="#formation" className="hover:font-bold transition-all text-xl">Formation</a></li>
              </div>
            </ul>
          )}
      </nav>

      <div className="flex mt-[15rem] h-[40vh] relative flex-col" id="accueil">
        <div className="flex inline accueil">
          <div className="w-2/5 h-1/2 ml-[15rem] mr-[15rem] flex items-center justify-center relative hello">
            <div className="bg-[var(--accent)] w-[40rem] h-[18rem] rounded-full blur-[80px] absolute blurBg"></div>
            <h1 className="text-white text-6xl absolute text-center welcome">Bienvenue👋</h1>
          </div>

          <motion.div initial={{ opacity: 0, x: 600 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="w-4/5 h-1/2 flex items-center text-justify justify-center relative presentationDiv">
              <h1 className="text-5xl presentation">Je suis
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold"> Damien RIFFLART</span>
                , étudiant en 1ère au lycée Louis Armand à Mulhouse.
              </h1>
            </div>
          </motion.div>
        </div>

        <div className="w-full inline-flex justify-center items-center gap-5 mt-[13rem] separator flex">
          <hr className="border-4 rounded-2xl w-1/3 border-gray-400" />
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 20 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <FaArrowAltCircleDown color="gray" size={40} className="mt-[-1rem]"/>
          </motion.div>
          <hr className="border-4 rounded-2xl w-1/3 border-gray-400" />
        </div>
      </div>

      <div className="mt-[14rem]" id="profil">
        <div className="inline flex justify-center text-5xl font-bold gap-4">
          <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
            <h1>Qui</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
            <h1 className="mt-5">suis-je?</h1>
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center mt-8">
            <p className="text-4xl w-4/5 text-justify leading-10 profil">
              Je suis actuellement en classe de première au lycée Louis Armand à Mulhouse, suivant un cursus scientifique jusqu'à la fin de la terminale, avec une &#32;
              <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold">
                section anglais
              </span>
              .
              Curieux par tout ce qui m’entoure, je consacre mon temps libre à la programmation, au Rubik's cube, aux sciences, et à bien d’autres activités (randonnées, lecture...).
              Désireux d'apprendre toujours plus dans tous les domaines, je sais &#32;
              <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold">
                m’adapter &#32;
              </span>
              rapidement et travailler de manière &#32;
              <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold">
                autonome &#32;
              </span>
              lorsque cela est nécessaire.
            </p>
          </div>

          <div className="w-fit flex flex-row gap-20 justify-center mt-[6rem] w-screen">
            <div className="flex flex-col w-1/4 photo">
              <img src="/Rubiks.png" alt="Rubik's Cube" className="-rotate-1"/>
              <p className="text-xl text-gray-600 mt-5 ml-2 photoDesc">Je cherche constamment à m’améliorer, que ce soit sur le Rubik’s cube ou en général.</p>
            </div>

            <div className="flex flex-col w-1/4 photo">
              <img src="/Randonee.png" alt="Randonée" className="rotate-1"/>
              <p className="text-xl text-gray-600 mt-2 photoDesc">Photo d’une randonnée pendant l’été 2023, dans les Alpes du Sud.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
