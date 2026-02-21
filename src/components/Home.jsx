import image from '../assets/dale.png'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img src={image} className="w-[250px] sm:w-[300px] rounded-full"></img>

        <div className="space-y-1 sm:space-y-3"> 
          <h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl'>Erickson Dale Espiritu</h1>
          <h3 className='text-xl font-semibold md:text-2xl lg:text-3xl'>Web Developer</h3>
          <p className='max-w-[500px] text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iure at similique placeat repellendus, 
            cumque illo repellat error id minus recusandae aut, excepturi iusto officiis fugiat voluptatum dignissimos facilis harum.</p>
        </div>
        <div className='flex gap-3'>
          <FaGithub className='h-10 w-10 cursor-pointer rounded-full border-2 p-1'/>
          <FaLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 p-1'/>
          <FaFacebook className='h-10 w-10 cursor-pointer rounded-full border-2 p-1'/>
        </div>


      </div>

    </div>
  )
}
export default Home