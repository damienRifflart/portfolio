import { FaArrowAltCircleDown, FaLongArrowAltDown  } from "react-icons/fa";
import { motion } from "framer-motion"
import { useState } from "react";
import { MenuButton } from "./components/MenuButton";
import { NavBar } from "./components/NavBar";
import { TextAnimation } from "./components/TextAnimation";
import { LineItem } from "./components/LineItem";
import { ExpCard } from "./components/expCard";


function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>

      <NavBar isNavOpen={isNavOpen} />

      <div className="menu hidden">
        <MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>


      <div className="flex mt-[15rem] h-fit relative flex-col" id="accueil">
        <div className="flex inline accueil">
          <div className="w-2/5 h-1/2 ml-[15rem] mr-[15rem] flex items-center justify-center relative hello">
            <div className="bg-[var(--accent)] w-[40rem] h-[18rem] rounded-full blur-[80px] absolute blurBg"></div>
            <h1 className="text-white text-6xl absolute text-center welcome">Bienvenue👋</h1>
          </div>

          <div className="overflow-hidden">
            <motion.div initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}>
              <div className="w-4/5 h-1/2 flex items-center text-justify justify-center relative presentationDiv">
                <h1 className="text-5xl presentation">Je suis
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold"> Damien RIFFLART</span>
                  , étudiant en 1ère au lycée Louis Armand à Mulhouse.
                </h1>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full inline-flex justify-center items-center gap-5 mt-[13rem] separator flex">
          <hr className="border-4 rounded-2xl w-1/3 border-gray-400" />
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 20 }} viewport={{ once: false }} transition={{ duration: 0.5 }}>
            <FaArrowAltCircleDown color="gray" size={40} className="mt-[-1rem]"/>
          </motion.div>
          <hr className="border-4 rounded-2xl w-1/3 border-gray-400" />
        </div>
      </div>



      <div className="mt-[14rem]" id="profil">
        <div>
          <TextAnimation firstWord={"Qui"} secondWord={"suis-je?"} />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center mt-8">
            <p className="text-4xl w-4/5 text-justify leading-10 profil">
              Je suis actuellement en classe de première au lycée Louis Armand à Mulhouse, suivant un cursus scientifique jusqu'à la fin de la terminale, avec une &#32;
              <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold">
                section anglais
              </span>
              .
              Curieux par tout ce qui m’entoure, je consacre mon temps libre à la programmation, au Rubik's cube, aux sciences, et à bien d’autres activités (musique, lecture...).
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
              <p className="text-xl text-gray-600 mt-5 ml-2 photoDesc">J'ai toujours aimé battre mes propres records en essayant d'apprendre de nouvelles techniques.</p>
            </div>

            <div className="flex flex-col w-1/4 photo">
              <img src="/orgue.jpg" alt="Orgue" className="rotate-1 rounded-3xl"/>
              <p className="text-xl text-gray-600 mt-2 photoDesc">J'ai débuté en musique avec le piano, mais je me suis rapidement tourné vers l'orgue. Aujourd'hui, j'aime joué des deux, avec une petite préférence pour l'orgue 😁.</p>
            </div>
          </div>
        </div>
      </div>



      <div className="mt-[10rem]" id="formation">
        <div>
          <TextAnimation firstWord={"Ma"} secondWord={"formation"} />
        </div>
        
        <div className="ml-[15%] mt-20 relative">
          <div className="w-[20px] h-[calc(100%+5rem)] bg-[var(--secondary)] rounded-2xl absolute">
            <FaLongArrowAltDown  size={90} color="var(--secondary)" className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10" />
          </div>

          <div className="flex flex-col gap-[7rem] relative">
            <LineItem title={"Collège Jean-Monnet"} description={"De la 6ème à la 4ème, j’ai été scolarisé au collège de Dannemarie."}/>
            <LineItem title={"Collège privé Jean XXIII"} description={"J’ai ensuite suivi ma formation en 3ème à Mulhouse."}/>
            <LineItem title={"Lycée Louis Armand"} description={"Depuis, je suis scolarisé à Mulhouse en Section Européenne Scientifique Anglais (SESA) jusqu’à la terminale."}/>
          </div>
        </div>
      </div>

      <div className="mt-[15rem]" id="experience">
        <div>
          <TextAnimation firstWord={"Mon"} secondWord={"expérience"} />
        </div>
        
        <div className="mt-10 mb-20 ml-10 w-3/4 flex flex-col">
          <ExpCard 
            title={'Pharmacie de Dannemarie'}
            description={"Au cours de mon stage de troisième, j'ai eu l'occasion de travailler dans une pharmacie. Cela m'a permis de comprendre le fonctionnement d'une officine, d'observer les discussions entre les pharmaciens et leurs clients, ainsi que les conseils délivrés."}
            img={"src/assets/pharmacie.jpg"}
            url={"https://pharmaciedelaportedalsace.mesoigner.fr/"}
          />
        </div>
      </div>

    </>
  )
}

export default App
