import { motion } from "framer-motion"

export function LineItem({title, description, niveau}: {title: string, description: string, niveau:string}) {
    return(
        <div className="flex flex-row items-start">
            <div className="w-[80px] h-[40px] mr-4">
                <img src={niveau === "Collège" ? "public/college.png" : "public/lycee.png"} alt="Icon" />
            </div>

            <div className="flex flex-col overflow-hidden">
                <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }}>
                    <p className="text-4xl font-bold font-sen lineTitle">{title}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }}>
                    <p className="text-2xl font-inter mt-1 break-words w-9/10 lineDesc">{description}</p>
                </motion.div>
            </div>
        </div>
    )
}