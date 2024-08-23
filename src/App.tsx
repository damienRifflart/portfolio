import { motion } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { TextAnimation } from "./components/TextAnimation";
import { LineItem } from "./components/LineItem";
import { ExpCard } from "./components/expCard";
import { useEffect, useState } from "react";

function App() {
  const [isAccueilVisible, setIsAccueilVisible] = useState(true);
  const [scrollPercent, setScrollPercent] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      {/* Makes the accueil section hidden when scrolling down*/}
      if (scrollPosition > window.innerHeight / 1.5) {
        setIsAccueilVisible(false);
      } else {
        setIsAccueilVisible(true);
      }
      setScrollPercent((scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);
  console.log(window.innerHeight)

  return (
    <>
      <div className={`sticky h-3 rounded top-0 bg-[var(--accent)] absolute z-20`} style={{ width: `${scrollPercent}%` }}></div>
      <NavBar />

      {/* Accueil */}
      <section className={`flex flex-col justify-center items-center fixed h-screen transition-opacity duration-50 opacity-100' ${!isAccueilVisible ? 'opacity-0' : null}`}>
        <div className="flex flex-row gap-[30rem] w-4/5">
          <div className="ml-[10rem] flex items-center justify-center">
            <div className="bg-[var(--accent)] w-[40rem] h-[18rem] rounded-full blur-[80px] absolute"></div>
            <h1 className="text-white text-6xl text-center absolute font-bold">Bienvenue👋</h1>
          </div>

          <motion.div initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}>
            <div className="flex items-center text-justify justify-center relative presentationDiv">
                <h1 className="text-5xl presentation">
                  Je suis{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold">
                  Damien RIFFLART
                </span>
                  , passionné par le développement web et le piano.
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profil Section */}
      <section className="relative">
        <div className="min-h-screen flex items-center justify-center">
          {/* This empty div ensures the Profil section starts after the viewport height */}
        </div>

        <div id="profil">
          <div className="bg-[#181823] text-white pt-10 pb-10"> 
            <TextAnimation firstWord={"Qui"} secondWord={"suis-je?"} />

            <div className="flex justify-center">
              <p className="text-4xl w-4/5 text-justify leading-10">
                Je suis actuellement en classe de première au lycée Louis Armand à Mulhouse, suivant un cursus scientifique jusqu'à la fin de la terminale, avec une{" "}
                <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold">
                  section anglais
                </span>
                . Curieux par tout ce qui m’entoure, je consacre mon temps libre à la programmation, au Rubik's cube, aux sciences, et à bien d’autres activités (musique, lecture...). Désireux d'apprendre toujours plus dans tous les domaines, je sais{" "}
                <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold">
                  m’adapter{" "}
                </span>
                rapidement et travailler de manière{" "}
                <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] font-bold">
                  autonome{" "}
                </span>
                lorsque cela est nécessaire.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-20 justify-center mt-[6rem]">
            <div className="flex flex-col w-[30rem]">
              <img src={"/rubiks.png"} alt={"Rubik's Cube"} />
              <p className="text-2xl text-gray-900 mt-5 ml-2">
                J'ai toujours aimé battre mes propres records en essayant d'apprendre de nouvelles techniques.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <img src={"/orgue.jpg"} alt={"Orgue"} className={"rounded-3xl"} />
              <p className="text-2xl text-gray-900 mt-2">
                J'ai débuté en musique avec le piano, mais je me suis rapidement tourné vers l'orgue. Aujourd'hui, j'aime joué des deux, avec une petite préférence pour l'orgue 😁.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="mt-[5rem]" id="formation">
        <TextAnimation firstWord={"Ma"} secondWord={"formation"} />

        <div className="ml-10 mt-[7rem] mr-10">
          <div className="flex flex-row gap-[7rem]">
            <LineItem title={"Collège Jean-Monnet"} description={"De la 6ème à la 4ème, j’ai été scolarisé au collège de Dannemarie."} niveau={"Collège"}/>
            <LineItem title={"Collège privé Jean XXIII"} description={"J’ai ensuite suivi ma formation en 3ème à Mulhouse."} niveau={"Collège"}/>
            <LineItem title={"Lycée Louis Armand"} description={"Depuis, je suis scolarisé à Mulhouse en Section Européenne Scientifique Anglais (SESA) jusqu’à la terminale."} niveau={"Lycée"}/>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-[15rem]" id="experience">
        <div>
          <TextAnimation firstWord={"Mon"} secondWord={"expérience"} />
        </div>

        <div className="mt-10 mb-20 ml-10 w-3/4 flex flex-col">
          <ExpCard
            title={"Pharmacie de Dannemarie"}
            description={"Au cours de mon stage de troisième, j'ai eu l'occasion de travailler dans une pharmacie. Cela m'a permis de comprendre le fonctionnement d'une officine, d'observer les discussions entre les pharmaciens et leurs clients, ainsi que les conseils délivrés."}
            img={"public/pharmacie.jpg"}
            url={"https://pharmaciedelaportedalsace.mesoigner.fr/"}
          />
        </div>
      </section>
    </>
 );
}

export default App;
