import { LuSun, LuMoon } from "react-icons/lu";

function DarkMode({theme, setTheme}) {

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? '' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="fixed z-10 bottom-2 right-2 md:top-2 md:bottom-auto md:right-2 p-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-yellow-400 cursor-pointer"
    >
      {theme === 'dark' ? <LuSun size={15} /> : <LuMoon size={15} />}
    </button>
  );
}

export default DarkMode