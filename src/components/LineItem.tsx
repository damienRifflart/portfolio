import { motion } from "framer-motion"

export function LineItem({title, description}: {title: string, description: string}) {
    return(
        <div className="flex flex-row items-start">
            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.3 }}>
                <div className="w-[40px] h-[40px] bg-[var(--accent)] rounded-full flex-shrink-0 -translate-x-1/4"></div>
            </motion.div>
            <div className="flex flex-col overflow-hidden">
                <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }}>
                    <p className="text-3xl font-bold font-sen">{title}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }}>
                    <p className="text-xl font-inter mt-1 break-words w-2/3">{description}</p>
                </motion.div>
            </div>
        </div>
    )
}