function Projects() {
  return (
    <div id="Projects" className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32">
      <h1 className="text-center text-5xl font-light dark:text-white">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <a href="https://github.com/daleespi93/game-forum" target="_blank">
          <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#3780C8] rounded-lg hover:bg-[#EBF2FA] dark:border-zinc-400 dark:hover:bg-zinc-500">
            <h1 className="text-3xl font-semibold dark:text-white">Online Forum</h1>
            <h2 className="text-xl dark:text-white"> Tech stack: Ruby on Rails(API), Vite+React</h2>
            <h3 className="text-lg text-gray-600 text-justify dark:text-gray-200"> The Pluck & Brew Community Forum is a simple place where players can sign up, start posts, and reply in different topic boards. It’s made for questions, tips, bug reports, and suggestions so discussions stay organized. With an easy layout, players can find active threads and join in quickly.</h3>
          </div>
        </a>
        <a href="https://github.com/daleespi93/stock-trading-app" target="_blank">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#3780C8] rounded-lg hover:bg-[#EBF2FA] dark:border-zinc-400 dark:hover:bg-zinc-500">
          <h1 className="text-3xl font-semibold dark:text-white">Stock Trading App</h1>
          <h2 className="text-xl dark:text-white"> Tech stack: Ruby on Rails</h2>
          <h3 className="text-lg text-gray-600 text-justify dark:text-gray-200">The app features a dual-interface system with dedicated portals for both users to manage their investments and administrators to oversee platform activity. Users can easily top up their account balance and execute real-time buy or sell orders to manage their personal portfolios.</h3>
        </div>
        </a>
        
      </div>
    </div>
  )
}
export default Projects