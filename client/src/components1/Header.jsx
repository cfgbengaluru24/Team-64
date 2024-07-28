import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-7'>
        <Link to='/'>
        <h1 className="font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap">
            <span className='text-slate-700'>Joining the Dots</span>
          </h1>
        </Link>
       <ul className="flex gap-4">
  <Link to="/">
    <li className="hidden sm:inline text-slate-700 hover:underline text-lg sm:text-xl">
      Home
    </li>
  </Link>
  <Link to="/about">
    <li className="hidden sm:inline text-slate-700 hover:underline text-lg sm:text-xl">
      About
    </li>
  </Link>
  <Link to="/volunteer">
    <li className="text-slate-700 hover:underline text-lg sm:text-xl">
      Volunteer
    </li>
</Link>
<Link to="/login">
    <li className="text-slate-700 hover:underline text-lg sm:text-xl">
      Login
    </li>
</Link>
<Link to="/signup">
    <li className="text-slate-700 hover:underline text-lg sm:text-xl">
      Sign Up
    </li>
</Link>

                
</ul>
      </div>
    </header>
  );
}