import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  // const [menuOpen, setMenuOpen] = useState(false); // Initialize a state for the menu
  const navigate = useNavigate();



  // const toggleMenu = () => {
  //     setMenuOpen(!menuOpen);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-slate-300'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Equity</span>
            <span className='text-slate-700'>Eagle</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-x-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover sm:ml-4'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-slate-700 hover:underline'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>

      {/* <div className='max-w-6xl mx-auto p-3'>
                <div className='flex justify-between items-center'>
                    <Link to='/'>
                    </Link>
                    {menuOpen ? ( 
                        <div className='block sm:hidden'>
                            <button onClick={toggleMenu} className='text-slate-700 hover:underline'>
                                <FaTimes />
                            </button>
                            <ul className='flex flex-col gap-y-4'>
                                <Link to='/'>
                                    <li className='text-slate-700 hover:underline'>Home</li>
                                </Link>
                                <Link to='/about-us'>
                                    <li className='text-slate-700 hover:underline'>About us</li>
                                </Link>
                                <Link to='/subscriptions'>
                                    <li className='text-slate-700 hover:underline'>Subscriptions</li>
                                </Link>
                                <Link to='/privacy-policy'>
                                    <li className='text-slate-700 hover:underline'>Privacy Policy</li>
                                </Link>
                                <Link to='/terms-conditions'>
                                    <li className='text-slate-700 hover:underline'>Terms & Conditions</li>
                                </Link>
                                <Link to='/profile'>
                                    {currentUser ? (
                                        <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
                                    ) : (
                                        <li className='text-slate-700 hover:underline'>Sign in</li>
                                    )}
                                </Link>
                            </ul>
                        </div>
                    ) : (
                        <div className='sm:hidden'>
                            <button onClick={toggleMenu} className='text-slate-700 hover:underline'>
                                <FaBars />
                            </button>
                        </div>
                    )}
                    <div className='hidden sm:flex gap-x-4'>
                        <Link to='/'>
                            <li className='text-slate-700 hover:underline list-none'>Home</li>
                        </Link>
                        <Link to='/about-us'>
                            <li className='text-slate-700 hover:underline list-none'>About us</li>
                        </Link>
                        <Link to='/subscriptions'>
                            <li className='text-slate-700 hover:underline list-none'>Subscriptions</li>
                        </Link>
                        <Link to='/privacy-policy'>
                            <li className='text-slate-700 hover:underline list-none'>Privacy Policy</li>
                        </Link>
                        <Link to='/terms-conditions'>
                            <li className='text-slate-700 hover:underline list-none'>Terms & Conditions</li>
                        </Link>
                        <Link to='/profile'>
                            {currentUser ? (
                                <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
                            ) : (
                                <li className='text-slate-700 hover:underline list-none'>Sign in</li>
                            )}
                        </Link>
                    </div>
                </div>
            </div> */}
    </header>
  );
};

export default Header;




// import {FaSearch} from 'react-icons/fa'
// import { Link, useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { useEffect, useState } from 'react'


// const Header = () => {

//     const { currentUser } = useSelector((state) => state.user)
//     const [searchTerm, setSearchTerm] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const urlParams = new URLSearchParams(window.location.search);
//         urlParams.set('searchTerm', searchTerm);
//         const searchQuery = urlParams.toString();
//         navigate(`search?${searchQuery}`)
//     }

//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const searchTermFromUrl = urlParams.get('searchTerm');
//         if(searchTermFromUrl){
//             setSearchTerm(searchTermFromUrl)
//         }
//     },[location.search])


//   return (
//     <header className='bg-slate-200 shadow-xl border border-b-slate-950'>
//         <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//             <Link to='/'>
//                 <h1 className=' font-bold text-sm sm:text-xl flex flex-wrap'>
//                     <span className='text-slate-500'>Equity</span>
//                     <span className=' text-slate-700'>Eagle</span>
//                 </h1>
//             </Link>
//         <form onSubmit={handleSubmit} className=' bg-slate-100 p-3 rounded-lg flex items-center'>
//             <input type="text" placeholder='Search...' className=' bg-transparent focus:outline-none w-24 sm:w-64' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//             <button>
//                 <FaSearch className=' text-slate-600'/>
//             </button>
//         </form>
//         <ul className=' flex gap-x-4'>
//             <Link to='/'>
//                 <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
//             </Link>
//             <Link to='/about'>
//                 <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
//             </Link>
//             <Link to='/profile'>
//             {currentUser ? (
//                 <img className=' rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
//             ) : (
//                 <li className='text-slate-700 hover:underline'>Sign in</li>
//             )}   
//             </Link>
//         </ul>
//         </div>
//     </header>
//   )
// }

// export default Header