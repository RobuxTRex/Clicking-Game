import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { waitForDebugger } from 'inspector';
import DevFooter from './components/DevFooter';
import { deepStrictEqual } from 'assert';

const nil = null;
const GAME_TITLE = "GAME"
const STATUS = "Idling"
const STATUS_CLICKING = "Clicking"
const STATUS_LOADING = "Loading"

let STATUS_CURR; // fix later pls

const DEV_TIME = 1000



function Game() {

  const [ upgrades, setUpgrades ] = useState(10);
  const [ clicksCount, setClicks ] = useState(88);

  let clicks = upgrades * clicksCount;

  for (let i = 0; i < 5; i++) {
    console.log(upgrades)
    console.log(clicksCount)
  }

  return (
    <React.Fragment>
      <Head>
        <title>{GAME_TITLE} - {STATUS_CURR}</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <span className='text-3xl font-semibold text-green-300 '>Money: <span className='hover:font-bold transition duration-700 ease-in-out text-green-600'>{clicks}</span></span>
        <span className='text-3xl font-semibold text-green-300 '>Upgrades: <span className='hover:font-bold hover:text-blue-400 transition duration-700 ease-in-out text-blue-600'>{upgrades}</span></span>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <button className='mt-1 w-full flex-wrap flex justify-center btn-blue' onClick={() => setClicks(clicks + 1)}>
          Click me!
        </button>
        <button className='mt-1 w-full flex-wrap flex justify-center btn-blue' onClick={() => setClicks(upgrades + 1)}>
          Upgrade me!
        </button>
      </div>
      <span><DevFooter /></span>
    </React.Fragment>
  )
}

export default Game;
