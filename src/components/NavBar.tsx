import { motion } from 'framer-motion';

export function NavBar({isNavOpen}: {isNavOpen: boolean}) {
    return (
        <>
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4 }}>
            <nav className="text-3xl mt-4 mr-10 navbar">
            <ul className="flex flex-row justify-between items-center w-full">
                <div className="flex justify-center w-full absolute gap-6 tabs">
                <li className="mx-3"><a href="#accueil" className="hover:text-[var(--accent)] hover:text-4xl transition-all">Accueil</a></li>
                <li className="mx-3"><a href="#profil" className="hover:text-[var(--accent)] hover:text-4xl transition-all">Profil</a></li>
                <li className="mx-3"><a href="#formation" className="hover:text-[var(--accent)] hover:text-4xl transition-all">Formation</a></li>
                <li className="mx-3"><a href="#experience" className="hover:text-[var(--accent)] hover:text-4xl transition-all">Expérience</a></li>
                </div>

                <li className="ml-auto bg-[#FFE53B] rounded-lg p-3 z-10 hover:-translate-y-0.5 transition-all hover:shadow-xl">
                <a href="#contact">Contacter</a>
                </li>
            </ul>
            </nav>
        </motion.div>

        {/* For mobile */}
        <nav>
            {isNavOpen && (
                <ul className="flex flex-col text-center gap-2 absolute ml-10">
                        <li className="mx-3"><a href="#accueil" className="hover:font-bold transition-all text-xl">Accueil</a></li>
                        <li className="mx-3"><a href="#profil" className="hover:font-bold transition-all text-xl">Profil</a></li>
                        <li className="mx-3"><a href="#formation" className="hover:font-bold transition-all text-xl">Formation</a></li>
                        <li className="mx-3"><a href="#experience" className="hover:font-bold transition-all text-xl">Expérience</a></li>
                </ul>
            )}
        </nav>
        </>
    )
}