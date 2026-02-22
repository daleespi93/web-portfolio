function Projects() {
  return (
    <div id="Projects" className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32">
      <h1 className="text-center text-5xl font-light">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Stock Trading App</h1>
          <h2 className="text-xl"> Tech stack: Ruby on Rails</h2>
          <h3 className="text-lg text-gray-600">The app features a dual-interface system with dedicated portals for both users to manage their investments and administrators to oversee platform activity. Users can easily top up their account balance and execute real-time buy or sell orders to manage their personal portfolios.</h3>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Online Forum</h1>
          <h2 className="text-xl"> Tech stack: Ruby on Rails(API), Vite+React</h2>
          <h3 className="text-lg text-gray-600"> The Pluck & Brew Community Forum is a simple place where players can sign up, start posts, and reply in different topic boards. It’s made for questions, tips, bug reports, and suggestions so discussions stay organized. With an easy layout, players can find active threads and join in quickly.</h3>
        </div>
      </div>
    </div>
  )
}
export default Projects