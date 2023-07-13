'use client'
import { motion } from 'framer-motion'
export default function Home () {
  return (
    <main className="">
      <div className="grid h-screen w-full place-content-center  justify-center bg-gray-950 select-none">
        <motion.h1
          initial={{opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='text-[calc(100vw/7)] lg:text-[calc(10vw)] text-transparent font-extrabold bg-clip-text bg-gradient-to-t from-yellow-400 to-orange-600' >
                  Energizer
        </motion.h1>
        </div>
    </main>
  )
}
