import list from '../../api/list.json'
import { nanoid } from "nanoid";
import { useEffect, useState } from 'react';
import { Component } from 'react';

export const TableRows = () => {
   const [state, setState] = useState(list);

   useEffect(() => console.log('smth happened'), [JSON.stringify(list)])

   return (
      <tbody>
         {state.map(listItem => (
            <tr key={nanoid()}>
               {Object.values(listItem).map(rowElement => (
                  <td key={nanoid()}>
                     {rowElement}
                  </td>
               ))}
            </tr>
         ))}
      </tbody>
   );
}