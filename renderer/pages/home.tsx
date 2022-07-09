import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';

import DevFooter from './components/DevFooter';
const background ='https://cdn.discordapp.com/attachments/984920923612258354/995378947023966409/unknown.png'

const GAME_TITLE = "Click!"
const STATUS = "Menu"

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>{GAME_TITLE} - {STATUS}</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <div className='grid grid-col-1 text-2xl w-full text-center'>
          <span className="text-5xl font-semibold hover:font-bold">{GAME_TITLE}</span>
          <div className='grid grid-col-1 text-2xl w-full text-centre'>
          </div>
        </div>
      </div>
      <div className='mt-10 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue text-2xl pt-5 pb-5'>Play the Game!</a>
        </Link>
      </div>
      <div>
        <DevFooter />
      </div>
    </React.Fragment>
  );
}

export default Home;
