

function SignUpForm({modalVisible, close}){
  

  return (
    <div>
      {modalVisible && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 overscroll-contain flex justify-center items-center w-full md:inset-0  max-h-full backdrop-blur"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full h-[45rem]">
            <div className="relative bg-white rounded-lg shadow h-full">
              <div className="flex items-center justify-end md:p-5">
               
                <button
                  type="button"
                  className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center" onClick={close}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              {/* Modal body */}
          
                <p className="mt-9 leading-relaxed text-black flex justify-center text-2xl">
                  Join Medium.
                </p>
                <div className="sign-in-buttons flex flex-col gap-5 mt-20 items-center">
                <button type="button" class="text-gray-900 border border-gray-300 rounded-3xl font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:text-black dark:border-gray-600 w-[17rem] flex items-center justify-center gap-4 "><img src='google.svg'></img><a href="http://localhost:3000/google">Sign up with Google</a></button>
                <button type="button" class="text-gray-900 bg-white border border-gray-300 rounded-3xl  font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:text-black dark:border-gray-600 w-[17rem] flex items-center gap-4 justify-center"><img src='facebook.svg'></img>Sign up with Facebook</button>
                <button type="button" class="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:text-black dark:border-gray-600 w-[17rem] flex items-center gap-4 justify-center"><img src='email.svg'></img>Sign up with email</button>
                <div className="mt-6 flex gap-1">Already have an account?<div className="text-lime-600">Sign In</div></div>
                <div className= "w-[27rem] mt-8 flex flex-wrap text-sm flex-column justify-center flex">
                Click “Sign Up” to agree to Medium's Terms of Service and acknowledge that Medium's Privacy Policy applies to you.
                </div>
                </div>

              
            </div>
          </div>
        </div>
      )}
       
      
       
    </div>
  );
};

export default SignUpForm;
