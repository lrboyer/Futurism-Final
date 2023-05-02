import { Link, useNavigate } from 'react-router-dom';
import aiLogo from '../images/ai.png';


const NavBar = () => {
    let navigate = useNavigate();

    return (
        <div className='z-50 sticky top-0 w-full h-20 bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm flex flex-row items-center justify-between px-6 md:px-16 text-black'>
            <div className='flex items-center gap-2 cursor-pointer font-bold text-3xl md:text-5xl hover:-rotate-2 duration-150' onClick={() => navigate('/')}>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-sky-300'>Our Future</h1>
                <img className='h-12 w-12' src={aiLogo} alt='' />
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-800'>with AI</h1>
            </div>

            <div className='flex flex-row items-center ml-16'>
                <ul className='flex items-center gap-12 text-lg font-medium'>
                    <li className='hover:rotate-3 duration-150'>
                        <Link className='hover:text-gray-400 hover:rotate-45' to='/'>Home</Link>
                    </li>
                    <li className='hover:-rotate-3 duration-150'>
                        <Link className='hover:text-gray-400 hover:rotate-45' to='/roughguide'>The Rough Guide To The Future</Link>
                    </li>
                    <li className='hover:rotate-3 duration-150'>
                        <Link className='hover:text-gray-400' to='/logic'>A Logic Named Joe</Link>
                    </li>
                    <li className='hover:-rotate-3 duration-150'>
                        <Link className='hover:text-gray-400' to='/supertoys'>Supertoys Last All Summer Long</Link>
                    </li>
                    <li className='hover:rotate-3 duration-150'>
                        <Link className='hover:text-gray-400' to='/lastquestion'>The Last Question</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
