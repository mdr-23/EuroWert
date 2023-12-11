import { motion } from "framer-motion";

function FadeInLeft({ children, x }) {
    return (
        <motion.div
            initial={{ x: x, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}

export default FadeInLeft;