import { motion } from "framer-motion";

function FallDown({children}){
    return(
        <motion.div
        initial={{ y: -300 }}
        whileInView={{ y: 0}}
        transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default FallDown