import {React} from "react";
import ReactDOM from 'react-dom/client';



export default function RenderingComponents(props) {
    const numbers = this.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const root = document.getElementById('root');