import React from 'react';

const Heure = ({heures}) => {
    const dateFormater = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric"}
  return new Date(date).toLocaleDateString(undefined, options)
      };
    return (
        <div>                 
                <tr>
                    <td>{dateFormater(heures.date)}</td>
                    <td>{heures.debut}H</td>
                    <td>{heures.fin}H</td>
                    <td>{heures.total}heures</td>
                </tr>             
        </div>
    );
};

export default Heure;