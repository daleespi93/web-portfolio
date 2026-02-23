function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div id="Contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8">
      <h1 className="text-center text-6xl font-ight text-[#2D69A4] dark:text-white"> Contact </h1>

      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl">
         {/* inputs for name and email */}
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="rounded-lg border-2 border-[#3780C8] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-[#EBF2FA] focus:ring-2 focus:ring-[#3780C8] dark:border-zinc-200 dark:text-white dark:hover:bg-zinc-600 dark:placeholder-white dark:focus:ring-zinc-200" />
          <input type="text" placeholder="Email" className="rounded-lg border-2 border-[#3780C8] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-[#EBF2FA] focus:ring-2 focus:ring-[#3780C8] dark:border-zinc-200 dark:text-white dark:hover:bg-zinc-600 dark:placeholder-white dark:focus:ring-zinc-200" />
        </div>
          {/* input for message */}
          <textarea placeholder="Your message here" className="h-40 w-full rounded-lg border-2 border-[#3780C8] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-[#EBF2FA] focus:ring-2 focus:ring-[#3780C8] dark:border-zinc-200 dark:text-white dark:hover:bg-zinc-600 dark:placeholder-white dark:focus:ring-zinc-200"></textarea>
          <button type="submit" className="rounded-lg border-2 border-[#5B96D2] bg-[#3780C8] px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#2D69A4] dark:bg-zinc-500 dark:hover:bg-zinc-800 dark:border-zinc-200">Send Message</button>
      </form>

    </div>
  )
}
export default Contact