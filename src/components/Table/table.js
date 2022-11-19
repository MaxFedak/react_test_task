import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { TableRows } from '../TableRows/TableRows';
import { Input } from '../input/input';

export const Table = ({columnNames}) => {
   const [itemList, setItemList] = useState([]);

   const addItemToList = itemList;
   return (
      <>
         <table>
            <thead>
               <tr>
                  {columnNames.map(column => (
                     <th key={nanoid()}>{column}</th>
                  ))}
               </tr>
            </thead>
            <TableRows />
         </table>
         <Input itemList={addItemToList}/>
      </>
   );
}