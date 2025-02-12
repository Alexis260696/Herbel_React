import './whatsAppStyle.scss'
import { motion } from "framer-motion"

export const Whatsapp_button = () => {

    return (

        <motion.div
            animate={{
                transform: "translateY(6px)",
                boxShadow: [
                    '0 20px 40px #c7c7c7',
                    '0 20px 20px #bababa'],
                transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                }
            }} className="heart movil">
            <a href="https://api.whatsapp.com/send?phone=523326377904" className="" target="_blank"
                rel=" whatsapp">
                <img src={"/imagenes/whatsapp_icon.svg"} />
            </a>
        </motion.div>

    );
}