function Header() {
  return (
    <div className="md:flex-1">
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-teal-600 text-white">
        <ul className="flex flex-col gap-10">
          {['home','projects','contact'].map((item) => (
            <li key={item}>

            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}
export default Header