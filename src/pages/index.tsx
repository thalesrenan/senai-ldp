import Head from "next/head";
import Link from "next/link";

export default function Home() {

 const checkNumber = () => {}

  return (
    <>
            <Head>
        <title>Lógica de Programação - SENAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 to-slate-600">
        <h1 className="text-slate-200">Digite um número de 1 a 10</h1>
        <button onClick={()=>{checkNumber()}}>Adivinhe</button>
      </main>
    </>
  );
}
