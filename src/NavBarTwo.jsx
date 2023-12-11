import { useState } from 'react';
import SignUpForm from './SignUpForm';
import React from 'react';
import { Link } from 'react-router-dom';



function NavBarTwo(){
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

    return(

<nav className={`flex-no-wrap  z-50 flex w-full items-center justify-between lg:flex-wrap lg:justify-start h-20 border-b border-black font-serif bg-[#242424] border border-b-white`}>
  <div class="flex flex-wrap items-center justify-between w-[98%] ml-[1rem]  h-full">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="download.svg" className="h-6" alt="Medium Logo" />
    </a>
    <div className="flex flex-col w-full md:w-auto justify-center max-small:w-[250px] max-ultra-small:w-[140px]" id="navbar-default">
      <ul className="font-small flex rounded-lg max-large:space-x-4 space-x-8 items-center max-small:justify-center">
        
        <li>
        <button className="text-sm text-white py-2 px-4 rounded-full border border-white max-ultra-small:text-[12px] max-ultra-small:py-[0.6rem] max-ultra-small:px-2" onClick={showModal}>
            Sign in
          </button>
        </li>
        <li>
          <button className="text-sm bg-white py-2 px-3 rounded-full max-ultra-small:text-[12px] max-ultra-small:py-[0.6rem] max-ultra-small:px-2" onClick={showModal}>
            Sign up
          </button>
        </li>
      </ul>
    </div>
  </div>
<SignUpForm modalVisible={modalVisible} close={hideModal}/>
</nav>




    );
}



export default NavBarTwo;