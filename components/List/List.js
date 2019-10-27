import React, { useState } from "react";
import ListItem from "./ListItem";

const List = () => {

  const [list, setList] = useState([]);

  const result = list.map(item => (<ListItem>item</ListItem>));
  
  return (result);
} 



export default List;
