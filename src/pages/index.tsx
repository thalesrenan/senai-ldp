import Head from "next/head";
import { useState } from "react";

export default function Home() {

  const [guess, setGuess] = useState("")
  const [innerText, setInnerText] = useState("Digite um número de 1 a 10");
 
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const checkNumber = () => {
    if (randomNumber === parseInt(guess)) {
      setInnerText("Você acertou!!")
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
              console.log("Your guess: " + guess, " || Random Number: " + randomNumber)
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
          bg-slate-200
          ">
            Adivinhe
          </button>
        </main>
      </>
    );
  }
