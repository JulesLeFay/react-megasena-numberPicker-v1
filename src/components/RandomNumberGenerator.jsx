import { useState } from 'react';
import Button from './Button';

export default function RandomNumberGenerator({ children }) {
  const setLength = 6;
  const minNumber = 1;
  const maxNumber = 60;
  const [megaNums, setMegaNums] = useState([]);

  function generateNums() {
    let nums = [];
    while (nums.length < 6) {
      let r = Math.floor(Math.random() * 60) + 1;
      if (nums.indexOf(r) === -1) nums.push(r);
    }
    nums.sort((a, b) => a - b);
    setMegaNums(nums);
  }

  return (
    <div
      className="my-4 mx-4 flex flex-col max-w-md
     justify-center items-center border-2 space-y-2"
    >
      <h1 className="text-lg font-semibold">Gerador de números da Megasena</h1>

      <p>
        Mega Sena é um jogo com {setLength} dezenas aleatórias entre {minNumber}{' '}
        e {maxNumber}.
      </p>

      <div className="flex flex-col max-w-sm justify-center items-center">
        <label className="text-sm" htmlFor="genBtn">
          Gerar Conjunto de dezenas
        </label>

        <Button
          description="Gerar Números"
          onButtonClick={generateNums}
          id="genBtn"
        >
          Gerar
        </Button>
        {/* <p>{megaNums.join(', ')}</p> */}
        <div>
          <ul className="flex flex-col max-w-sm justify-center items-center m-2 space-y-2">
            <li
              className="bg-red-600 rounded-full w-6 h-6 
            flex justify-center items-center text-white font-semibold"
            >
              {megaNums[0]}
            </li>
            <li
              className="bg-pink-400 rounded-full w-6 h-6 
            flex justify-center items-center text-white font-semibold"
            >
              {megaNums[1]}
            </li>
            <li
              className="bg-yellow-500 rounded-full w-6 h-6 
            flex justify-center items-center text-white font-semibold"
            >
              {megaNums[2]}
            </li>
            <li
              className="bg-blue-600 rounded-full w-6 h-6 
            flex justify-center items-center text-white font-semibold"
            >
              {megaNums[3]}
            </li>
            <li
              className="bg-green-600 rounded-full w-6 h-6 
            flex justify-center items-center text-white font-semibold"
            >
              {megaNums[4]}
            </li>
            <li
              className="bg-purple-600 rounded-full w-6 h-6 
            flex justify-center items-center text-white font-semibold"
            >
              {megaNums[5]}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
