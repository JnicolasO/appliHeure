import React, { useEffect, useState, useRef} from "react";
import { db } from "./utils/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import CreateHeure from "./components/CreateHeure";


function App() {

  const list = ["décembre 2022", "janvier 2023", "fevrier 2023", "mars 2023", "avril 2023", "mai 2023", "juin 2023", "juillet 2023", "aout 2023", "septembre 2023", "octobre 2023", "novembre 2023", "décembre 2023"];
const [selectedRadio, setSelectedRadio] = useState("");  
  const dateFormater = (date) => {
    const options = {  day: "numeric", month: "long", year: "numeric"} 
return new Date(date).toLocaleDateString(undefined, options)
  };
  const dateNow = (date) => {
    const options = { month: "long", year: "numeric"}
return new Date(date).toLocaleDateString(undefined, options)
  };
  const [heures, setHeures] = useState([]);
  const totalMois = heures.map((heures) => heures.total);
  const datemois = heures.filter((heures) => dateFormater(heures.date).includes(selectedRadio));
  const totmois = datemois.map((heures) => heures.total).reduce(
    (previousScore, currentScore, index)=>previousScore+currentScore, 
    0);
const totalScores = totalMois.reduce(
(previousScore, currentScore, index)=>previousScore+currentScore, 
0);

const monthnow = (mois) => {
  if (mois === selectedRadio) {
    return heures.total;
    }
};
useEffect(() => {
    getDocs(collection(db, "heures")).then((res) =>
      setHeures(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);
  console.log(totmois)
  return (
    <div className="App">
      <div className='head'>{<CreateHeure />}
      </div>
      <div className='month'>
      {list.map((mois) => (
          <span className='mois'>
            <input
              type="radio"
              id={mois}
              name="continentRadio"
              checked={mois === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}      
            />
            <label htmlFor={mois}>{mois}</label>        
          </span>
        ))}

      </div>
      <table className='table'> 
        <thead className='header'>
          <tr>
            <th>Date</th>
            <th>Heure début</th>
            <th>Heure fin</th>
            <th>Total journée</th>
          </tr> 
        </thead>
        <tbody className="line">
          {heures
          .filter((heures) => dateFormater(heures.date).includes(selectedRadio))
          .sort((a, b) => (a.date > b.date) ? 1 : -1)
          .map((heures) => 
          <tr>
          <td>{dateFormater(heures.date)}</td>
          <td>{heures.debut}H</td>
          <td>{heures.fin}H</td>
          <td >{heures.total}heures</td>  
          </tr>         
          )}  
        </tbody>  
      </table>
      <div className='endtotal'>
        <p>HEURES TOTAL:</p>
        <span className='totalmois'>{totmois}</span>
      </div>
          
    </div>
    
  );
}

export default App;
