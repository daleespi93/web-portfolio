function Projects() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32">
      <h1 className="text-center text-5xl font-light">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Stock Trading App</h1>

          <h3 className="text-xl text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda laudantium dicta velit unde, sequi dolorum sapiente laborum deleniti voluptas cum nisi saepe vero? Voluptatum perspiciatis iusto odio nulla aliquam ea.</h3>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Online Forum</h1>

          <h3 className="text-xl text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda laudantium dicta velit unde, sequi dolorum sapiente laborum deleniti voluptas cum nisi saepe vero? Voluptatum perspiciatis iusto odio nulla aliquam ea.</h3>
        </div>
      </div>
    </div>
  )
}
export default Projects