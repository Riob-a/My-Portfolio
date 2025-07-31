import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import Link from 'next/link'

export default function Home() {
  const waveText = "[Portfolio.]";
  return (
    <div>
      <Navbar />
      <section>
        <header className="header relative text-center">
          {/* <h1 className="text" data-aos="fade-in" data-aos-delay="800">[Portfolio.]</h1> */}
          <motion.h1
            className="text-8xl font-bold flex justify-center gap-1"
            data-aos="fade-in"
            data-aos-delay="800"
          >
            {waveText.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ scale: 1, y: 0, x: 0, color: "#000000" }}
                animate={{
                  scale: [1, 2, 1],
                  y: [0, 40, 0,],
                  x: [ 0, 15, 0, -1],
                  color: ["#000000", "#c082fa", "#000000"],
                  scaleX: [0.5, 1.5, 0.5],
                  scaleY: [0.5, 1.5, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 3.5,
                  delay: i * 0.20,
                  ease: "easeInOut",
                }}
                className="inline-block px-1 sm:px-4"
              >
                {char}
              </motion.span>
            ))}

          </motion.h1>

          <p data-aos="fade-in" data-aos-delay="1000">Developer | Designer</p>
        </header>
      </section>

      <section className="p-8 mb-4">
        <div className=" main-index flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" data-aos="fade-in">
          <div>
            <h1 className="text-2xl font-bold mb-1" data-aos="fade-up">
              <b className="logo-2">Welcome.</b>
            </h1>
            <p className="text-base" data-aos="fade-up" data-aos-delay="200">
              Feel free to explore my work.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Link
              href="/projects"
              className="p-link inline-block px-6 py-2 rounded-md"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              [ View Projects ]
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
