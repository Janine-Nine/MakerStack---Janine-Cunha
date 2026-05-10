import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="bg-gray-900 p-6 rounded-2xl"
>
  <h2>Candidato</h2>
</motion.div>