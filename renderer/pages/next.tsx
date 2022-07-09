import React from 'react';
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

const DEV_TIME = 1000

let STATUS_CURR = 'Loading'

let CLICK_CNT = 0;

function devTools()
{
  console.log(STATUS_CURR)
}

function onButtonClick() {
  STATUS_CURR = 'Clicking'
  
  for (let i = 0; i < 2; i++) {
    STATUS_CURR = 'Clicking'
    console.log(i)
  }
  
  console.log(CLICK_CNT)
  console.log(STATUS_CURR)

  CLICK_CNT += 1;
}

function Next() {
  return (
    <React.Fragment>
      <Head>
        <title>{GAME_TITLE} - {STATUS_CURR}</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <span className='text-3xl font-semibold'>Clicks: <span className='hover:font-bold transition duration-700 ease-in-out'>{CLICK_CNT}</span></span>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <button className='mt-1 w-full flex-wrap flex justify-center btn-blue' onClick={onButtonClick}>
          Click me!
        </button>
      </div>
      <span><DevFooter /></span>
    </React.Fragment>
  )
}

setInterval(devTools, DEV_TIME)

export default Next
