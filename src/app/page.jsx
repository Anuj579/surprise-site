"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Screen1 from "@/components/Screen1"
import Screen2 from "@/components/Screen2"
import Screen3 from "@/components/Screen3"
import Screen4 from "@/components/Screen4"
import Screen5 from "@/components/Screen5"
import VideoScreen from "@/components/VideoScreen"
import BackgroundEffects from "@/components/BackgroundEffects"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(1)

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-indigo-950/70 overflow-hidden">
      <BackgroundEffects />

      <div className="relative">
        <AnimatePresence mode="wait">
          {currentScreen === 1 && <Screen1 key="screen1" onNext={() => setCurrentScreen(2)} />}
          {currentScreen === 2 && <Screen2 key="screen2" onNext={() => setCurrentScreen(3)} />}
          {currentScreen === 3 && <Screen3 key="screen3" onNext={() => setCurrentScreen(4)} />}
          {currentScreen === 4 && <Screen4 key="screen4" onNext={() => setCurrentScreen(5)} />}
          {currentScreen === 5 && <Screen5 key="screen5" onReveal={() => setCurrentScreen(6)} />}
          {currentScreen === 6 && <VideoScreen key="video" />}
        </AnimatePresence>
      </div>

      {/* Watermark */}
      {currentScreen !== 6 && <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-[13px] text-white/40 pointer-events-none z-50 font-light">
        @bitturathod
      </motion.div>}
    </main>
  )
}
