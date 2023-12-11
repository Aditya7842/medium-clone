import { useState } from "react"
import MainModal from "./MainModal";

export default function(){
    const [modal, setModal] = useState(false);
    return(
        <>
        <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setModal(true)}>
        Toggle modal
   
        </button>
        <MainModal isVisible={modal}/>
        </>
    )
}