import { useState } from 'react';
import SignUpForm from './SignUpForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



function NavBar(){
  const[scrolled, setScrolled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

    return(

<nav className={`flex-no-wrap transition-bg duration-300 fixed top-0 left-0 z-50 flex w-full items-center justify-between lg:flex-wrap lg:justify-start h-20 border-b border-black font-serif ${scrolled ? 'bg-[#fff]' : 'bg-[#ffc017]'}`}>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between ml-[7.2rem] max-large:ml-[5rem] max-small:ml-[1.5rem] w-[84%] max-large:w-[85%] max-small:w-[95%] h-full max-ultra-small:w-[90%] max-big:ml-[6rem]">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="medium-logo.svg" class="h-6" alt="Medium Logo" />
    </a>
    <div className="flex flex-col w-full md:w-auto justify-center max-small:w-[250px] max-ultra-small:w-[140px]" id="navbar-default">
      <ul className="font-small flex rounded-lg max-large:space-x-4 space-x-8 items-center max-small:justify-center">
        <li className='max-small:hidden'>
          <a className="max-small:hidden text-sm block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 " aria-current="page"><Link to='/ourStory'>Our Story</Link></a>
        </li>
        <li  className='max-small:hidden'>
        <a href="#" className="max-small:hidden text-sm block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 " aria-current="page">Membership</a>
        </li>
        <li  className='max-small:hidden'>
        <a href="#" className="max-small:hidden text-sm block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 " aria-current="page">Write</a>
        </li>
        <li className='max-ultra-small:hidden'>
        <a href="#" className="max-ultra-small:hidden text-sm block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 " aria-current="page">Sign In</a>
        </li>
        <li>
          <button className={`text-sm transition-bg duration-300 text-white py-2 px-4 rounded-full ${scrolled ? 'bg-green-800': 'bg-black'}`} onClick={showModal}>
            Get Started
          </button>
        </li>
      </ul>
    </div>
  </div>
<SignUpForm modalVisible={modalVisible} close={hideModal}/>
</nav>




    );
}

export default NavBar;