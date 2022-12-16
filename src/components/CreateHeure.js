import React, { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import logo from"./../img/logo.png";

const CreateHeure = () => {
    const debut = useRef();
    const fin = useRef();

    const totalJourner = () =>{
      let start = debut.current.value;
      let end = fin.current.value;
      let total = end - start;
      return total;
    }
    const handleHeure = async (e) => {
        e.preventDefault();
    
        const data = {
          debut: debut.current.value,
          fin: fin.current.value,
          total: totalJourner(),
          date: Date.now(),
        };
        await addDoc(collection(db, "heures"), data);
        debut.current.value = "";
        fin.current.value = "";
      };
    return (
        <div className='head'>
            <form className='form' onSubmit={(e) => handleHeure(e)}>
            <label>Heure début</label>
            <input type="number" ref={debut} />
            <label>Heure fin</label>
            <input type="number" ref={fin}/>
            <input type="submit" value="Envoyer" />
            </form>
            <img className='logo' src={logo} alt="image"/>
        </div>
    );
};

export default CreateHeure;