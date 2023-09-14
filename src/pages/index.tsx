import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {

  const [guess, setGuess] = useState("")
  const [lastGuess, setLastGuess] = useState(0)
  const [randomNumber, setRandomNumber] = useState(0)
  const [lastRandomNumber, setLastRandomNumber] = useState(0)
  const [innerText, setInnerText] = useState("Digite um número de 1 a 10");

    function calculateRandomNumber() { 
      setRandomNumber(Math.floor(Math.random() * 10) + 1)
    }
  
  useEffect(() => {
    calculateRandomNumber();
  },[])
  
    const checkNumber = () => {
      if (randomNumber === parseInt(guess)) {
        setInnerText("Você acertou!!")
        setLastRandomNumber(randomNumber)
        calculateRandomNumber()
      } else if (parseInt(guess) > randomNumber) {
        setInnerText("Seu chute foi maior. Tente novamente.")
      } else if (parseInt(guess) < randomNumber) {
        setInnerText("Seu chute foi menor. Tente novamente.")
      } else {
        setInnerText("Digite um número de 1 a 10.")
      }
    }

    return (
      <>
        <Head>
          <title>Lógica de Programação - SENAI</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="
        flex flex-col
        items-center
        justify-center
        min-h-screen
        bg-gradient-to-b from-slate-800 to-slate-950
        ">
         
          <h1 className="text-slate-200 text-2xl">{innerText}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              checkNumber()
              setGuess("")
              setLastGuess(parseInt(guess))
            }}>
            <input
              value={guess}
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setGuess(e.target.value);
              }}
              className="mt-5 pl-2"
              />
          </form>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              checkNumber()
              console.log("Your guess: " + guess, " || Random Number: " + randomNumber)
            }}
            className="
          border-black 
          border-2 
          rounded-2xl 
          p-2 
          mt-5
          mb-10
          bg-slate-200
          ">
            Adivinhe
          </button>
          <div>
          <p className="text-slate-200">Último chute: {lastGuess}</p>
          <p className="text-slate-200">Último número aleatório: {lastRandomNumber}</p>
          </div>
        </main>
      </>
    );
  }
