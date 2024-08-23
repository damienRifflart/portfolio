import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from "lucide-react"
import { useMediaQuery } from 'react-responsive'

export function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 880 });

    return (
        <>
        {!isMobile && (
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4 }}>
                <nav className="text-4xl mt-7 mr-10">
                <ul className="flex flex-row justify-between items-center w-full">
                    <div className="flex justify-center w-full absolute gap-6">
                    <li className="mx-3"><a href="#profil" className="hover:text-[var(--accent)] hover:text-3xl transition-all">profil</a></li>
                    <li className="mx-3"><a href="#formation" className="hover:text-[var(--accent)] hover:text-3xl transition-all">formation</a></li>
                    <li className="mx-3"><a href="#experience" className="hover:text-[var(--accent)] hover:text-3xl transition-all">expérience</a></li>
                    </div>

                    <li className="ml-auto bg-[var(--accent)] rounded-lg p-3 z-10 hover:-translate-y-0.5 transition-all hover:shadow-xl text-white font-bold">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                </nav>
            </motion.div>
        )}

        {isMobile && (
            <nav className='flex justify-center mt-5'>
                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }} onClick={() => setIsNavOpen(!isNavOpen)}>
                    {isNavOpen ? <X /> : <Menu />}
                </motion.button>
                {isNavOpen && (
                    <ul className="flex flex-row text-center gap-2 absolute ml-10 mt-7">
                            <li className="mx-3"><a href="#profil" className="hover:font-bold transition-all text-xl">profil</a></li>
                            <li className="mx-3"><a href="#formation" className="hover:font-bold transition-all text-xl">formation</a></li>
                            <li className="mx-3"><a href="#experience" className="hover:font-bold transition-all text-xl">expérience</a></li>
                            <li className="mx-3"><a href="#contact" className="hover:font-bold transition-all text-xl">contact</a></li>
                    </ul>
                )}
            </nav>
        )}
        </>
    )
}