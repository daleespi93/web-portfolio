import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Experience from "./components/Experience"
import DarkMode from "./components/DarkMode"
import { useState } from "react"
import useLocalStorage from "use-local-storage"

function App() {
  const [theme, setTheme] = useLocalStorage('',false);

  return (
    <>
      <div className={`${theme === "dark" ? "dark" : ""} flex min-h-screen w-full dark:bg-zinc-700`}>
        <DarkMode theme={theme} setTheme={setTheme} />
        <Header />
        <main className='flex-3'>
          <Home />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
