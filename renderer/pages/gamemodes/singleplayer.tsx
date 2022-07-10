import React, { useState } from 'react';
import Head from 'next/head';
import DevFooter from '../components/DevFooter';
import Link from 'next/link';
//import InternetWarning from './components/InternetWarning';

const GAME_TITLE = "Click Click!"

let cpsc = 0;

let timer = 0;

let CPS = (cpsc/timer)

function handleCPS() {
  timer += 0.1
  console.log(timer)
}

setTimeout(handleCPS, 1000);

function Game() {
  const [ upgrades, setUpgrades ] = useState(0);
  const [ clicksCount, setClicks ] = useState(0);

  let clicks = upgrades + clicksCount;

  function sellUpgrade() {
    if (clicks >= 50 ) {
      setClicks(clicks - 50);
      setUpgrades(upgrades + 1);
    }
  }

  function sellUpgradeMillion() {
    if (clicks >= 40000000 ) {
      setClicks(clicks - 40000000);
      setUpgrades(upgrades + 1000000);
    }
  }

  function resetStats() {
    setUpgrades(0);
    setClicks(0);
  } // this code sucks //

  function saveGame() {
    console.log("Saving game...");
    localStorage.setItem("upgrades", String(upgrades));
    localStorage.setItem("clicks", String(clicks));
    console.log("Successfully saved the game!")
    alert("Successfully saved.")
  }
  
  function loadGame() {
    console.log("Loading game...");
    const savedUpgrades = localStorage.getItem("upgrades")
    const savedClicks = localStorage.getItem("clicks")
    console.log("Grabbed stats...")
    
    console.log("Setting upgrades...")
    setUpgrades(Number(savedUpgrades));
    console.log("Upgrades set!", upgrades)
    console.log("Setting clicks...")
    setClicks(Number(savedClicks));
    console.log("Clicks set!", clicks)
    console.log("Successfully loaded the game!")
    alert("Loaded from your most recent save.")
  }

  if (clicks >= 1000000000000000) {
    alert("You have won! Congratulations on reaching a quadrillion clicks!");
  }                                          

  return (
    <React.Fragment>
      <Head>
        <title>{GAME_TITLE}</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <span className='text-3xl font-semibold text-green-300 '>Money: <span className='hover:font-bold transition duration-700 ease-in-out text-green-600'>{clicks}</span></span>
        <span className='text-3xl font-semibold text-blue-300 '>Upgrades: <span className='hover:font-bold hover:text-red-400 transition duration-700 ease-in-out text-blue-600'>{upgrades}</span></span>
        <span className='text-3xl font-semibold text-red-300 '>CPS: <span className='hover:font-bold hover:text-white transition duration-700 ease-in-out text-green-600'>{CPS}</span></span>
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <button className='mt-1 w-full flex-wrap flex justify-center' onClick={() => setClicks(clicks + 1)}>
          <img src="https://www.goodfreephotos.com/albums/vector-images/mouse-cursor-vector-art.png" width={100} height={150}/>
        </button>
        <button className='mt-1 w-full flex-wrap flex justify-center btn-blue' onClick={() => sellUpgrade()}>
          Upgrade me!
        </button>
        <button className='mt-1 w-full flex-wrap flex justify-center btn-blue' onClick={() => sellUpgradeMillion()}>
          Upgrade me! x1million (20% off)
        </button>
        <button className='mt-1 w-full flex-wrap flex bg-green-400 hover:bg-green-500 hover:duration-500 duration-500 btn-blue hover:text-2xl rounded justify-center items-center' onClick={() => saveGame()}>
          Save game!
        </button>
        <button className='mt-1 w-full flex-wrap flex bg-green-400 hover:bg-green-500 hover:duration-500 duration-500 btn-blue hover:text-2xl rounded justify-center items-center' onClick={() => loadGame()}>
          Load game!
        </button>
        <button className='mt-10 w-full flex-wrap flex bg-red-400 hover:bg-red-500 hover:duration-500 duration-500 btn-blue hover:text-2xl rounded justify-center items-center' onClick={() => resetStats()}>
          Reset stats!
        </button>
        <button className='mt-10 w-full flex-wrap flex bg-red-400 hover:bg-red-500 hover:duration-500 duration-500 btn-blue hover:text-2xl rounded justify-center items-center' onClick={() => resetStats()}>
          Reset stats!
        </button>

        <Link href="/home">
          <button className='mt-1 w-full flex-wrap flex bg-red-400 hover:bg-red-500 hover:duration-500 duration-500 btn-blue hover:text-2xl rounded justify-center items-center' onClick={() => resetStats()}>
            Main Menu
          </button>
        </Link>
      </div>
      <span><DevFooter/></span>
    </React.Fragment>
  )
}

export default Game;
