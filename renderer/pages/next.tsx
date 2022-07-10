import React, { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';
import { waitForDebugger } from 'inspector';
import DevFooter from './components/DevFooter';
import { deepStrictEqual } from 'assert';

import cursor from '../../resources/cursor.png';

const { app } = require('electron')

const nil = null;
const GAME_TITLE = "GAME"
const STATUS = "Idling"
const STATUS_CLICKING = "Clicking"
const STATUS_LOADING = "Loading"

let STATUS_CURR; // fix later pls

const DEV_TIME = 1000



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

  function resetStats() {
    setUpgrades(0);
    setClicks(0);
  }

  if (clicks >= 1000000000000000) {
    alert("You have won! Congratulations on reaching a quadrillion clicks!");
  }

  return (
    <React.Fragment>
      <Head>
        <title>{GAME_TITLE} - {STATUS_CURR}</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <span className='text-3xl font-semibold text-green-300 '>Money: <span className='hover:font-bold transition duration-700 ease-in-out text-green-600'>{clicks}</span></span>
        <span className='text-3xl font-semibold text-green-300 '>Upgrades: <span className='hover:font-bold hover:text-blue-400 transition duration-700 ease-in-out text-blue-600'>{upgrades}</span></span>
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <button className='mt-1 w-full flex-wrap flex justify-center' onClick={() => setClicks(clicks + 1)}>
          <Image src={cursor} width={100} height={150}/>
        </button>
        <button className='mt-1 w-full flex-wrap flex justify-center btn-blue' onClick={() => sellUpgrade()}>
          Upgrade me!
        </button>
        <button className='mt-1 w-full flex-wrap flex bg-red-400 hover:bg-red-500 hover:duration-500 duration-500 btn-blue hover:text-2xl rounded justify-center items-center' onClick={() => resetStats()}>
          Reset stats!
        </button>
      </div>
      <span><DevFooter /></span>
    </React.Fragment>
  )
}

export default Game;
