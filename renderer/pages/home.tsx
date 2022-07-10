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
      <div>
        <div className='grid grid-col-1 text-2xl w-full text-center'>
          <div className='grid grid-col-1 text-2xl w-full text-center'>
            <span className="text-5xl font-semibold hover:font-bold">{GAME_TITLE}</span>
            <div className='grid grid-col-1 text-2xl w-full text-centre'>
            </div>
          </div>
        </div>
        <span>
          <div className='mt-10 w-full flex-wrap flex justify-center'>
            <div>
              <span>
                <Link href='/gamemodes/singeplayer'>
                  <a className='btn-blue text-2xl'>Singeplayer</a>
                </Link>
              </span>
            </div>
            <div>
              <span>
                <Link href='/gamemodes/multiplayer'>
                  <a className='btn-blue text-2xl'>Multiplayer</a>
                </Link>
              </span>
            </div>
            <div>
              <span>
                <Link href='/credits'>
                  <a className='btn-blue text-2xl'>Credits</a>
                </Link>
              </span>
            </div>
          </div>
        </span>
        <span><DevFooter/></span>
      </div>
    </React.Fragment>
  );
}

export default Home;
