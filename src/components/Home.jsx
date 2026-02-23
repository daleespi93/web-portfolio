import image from '../assets/dale.png'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

function Home() {
  return (
    <div id='Home' className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img src={image} className="w-[250px] sm:w-[300px] rounded-full"></img>

        <div className="space-y-1 sm:space-y-3"> 
          <h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl dark:text-white'>Erickson Dale Espiritu</h1>
          <h3 className='text-xl font-semibold md:text-2xl lg:text-3xl dark:text-white'>Web Developer</h3>
          <p className='max-w-[500px] text-sm text-gray-500 dark:text-gray-100'>After a career focused on marketing, I decided to switch gears and dive into the tech industry. I studied web development to gain the hands-on skills needed to build digital products from the ground up. Now, I’m officially starting my journey as a programmer and am excited to tackle new coding challenges.</p>
        </div>
        <div className='flex gap-3'>
          <a href='https://github.com/daleespi93' target="_blank" ><FaGithub className='h-10 w-10 cursor-pointer rounded-full border-2 p-1 dark:text-white'/></a>
          <FaLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 p-1 dark:text-white'/>
          <a href="https://www.facebook.com/dale.espiritu/" target="_blank"><FaFacebook className='h-10 w-10 cursor-pointer rounded-full border-2 p-1 dark:text-white'/></a>
        </div>


      </div>

    </div>
  )
}
export default Home