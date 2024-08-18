import { motion } from 'framer-motion';
import { Menu, X } from "lucide-react"

export function MenuButton({ isNavOpen, setIsNavOpen }: { isNavOpen: boolean, setIsNavOpen: (isOpen: boolean) => void }) {
    return (
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <X /> : <Menu />}
      </motion.button>
    );
}