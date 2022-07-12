import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import DevFooter from './components/DevFooter';
//import InternetWarning from './components/InternetWarning';

const GAME_TITLE = "Click Click!"

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>{GAME_TITLE}</title>
      </Head>
        <div className='grid grid-col-1 text-2xl w-full text-center'>
          <div className='grid grid-col-1 text-2xl w-full text-center'>
            <span className="text-5xl font-semibold hover:font-bold mt-10">{GAME_TITLE}</span>
            <div className='grid grid-col-1 text-2xl w-full text-centre'>
            </div>
          </div>
        </div>
        <span>
            <div className='mt-10 text-left ml-10'>
              <span>
                <Link href='./gamemodes/singleplayer'>
                  <a className='flex grow-0 w-15px bg-gray-900 text-white border text-2xl focus:border-blue-900 rounded-xl outline-none p-4 border-gray-400 hover:border-blue-400 duration-400 hover:duration-400'>Singleplayer</a>
                </Link>
              </span>
            </div>
            <div className='mt-10 text-left ml-10 '>
              <span>
                <Link href='/gamemodes/multiplayer'>
                  <a className='flex grow-0 w-15px bg-gray-900 text-white border text-2xl focus:border-blue-900 rounded-xl outline-none p-4 border-blue-400 hover:border-blue-600 duration-400 hover:duration-400'>Multiplayer</a>
                </Link>
              </span>
            </div>
            <div className='mt-10 text-left ml-10'>
              <span>
                <Link href='/credits'>
                  <a className='flex grow-0 w-15px bg-gray-900 text-white border text-2xl focus:border-blue-900 rounded-xl outline-none p-4 border-green-400 hover:border-green-600 duration-400 hover:duration-400'>Credits</a>
                </Link>
              </span>
            </div>
        </span>
        <span><DevFooter/></span>
    </React.Fragment>
  );
}

export default Home;
