import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Experience from "./components/Experience"

function App() {

  return (
    <>
      <div className='flex min-h-screen w-full'>
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
