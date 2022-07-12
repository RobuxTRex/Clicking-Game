import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const GAME_TITLE = "Click Click!"

function credits() {
    return (
        <div className="text-2xl text-center">
            <Head>
                <title>{GAME_TITLE}</title>
            </Head>
            <div>
                <h1 className="text-center mt-5 text-5xl font-bold">Special Thanks</h1>
                <h2 className="text-center mt-3 text-3xl font-semibold">to...</h2>
            </div>
            <div>
                <div className='mt-10'>
                    <h2 className="text-center font-semibold text-4xl hover:text-blue-400">
                        <Link href="https://www.robuxtrex.co.uk">
                            Sulphur
                        </Link>
                    </h2>
                    <span className="mt-3">Leader of this project and Lead Developer!</span>
                </div>
                <div className='mt-10'>
                    <h2 className="text-center font-semibold text-4xl hover:text-blue-400">
                        <Link href="https://lukadev.vercel.app">
                            LukaDev
                        </Link>
                    </h2>
                    <span>Developer and Multiplayer Manager</span>
                </div>
            </div>
            <div>
                <h2 className='text-center mt-5 text-5xl font-bold'>... and</h2>
                <h3 className='text-center mt-3 text-3xl font-semibold'>... our many Testers!</h3>
            </div>
            <div>
                <div className='mt-10'>
                    <h2 className='text-center font-semibold text-4xl hover:text-blue-400'>
                        <Link href="https://discord.gg/WKg6JaRvjh">
                            Broken
                        </Link>
                    </h2>
                </div>
                <div className='mt-5'>
                    <h2 className='text-center font-semibold text-4xl hover:text-blue-400'>
                        <Link href="https://discord.gg/WKg6JaRvjh">
                            Liam
                        </Link>
                    </h2>
                </div>
            </div>
            <div className='mt-10'>
                <span>Join our <span className='text-blue-300 hover:text-blue-500 font-semibold'><Link href="https://discord.gg/WKg6JaRvjh">Discord server</Link></span>!</span>
            </div>
            <div className='mt-10'>
                <span className='mt-10'>---------------------------------------------------------------------------------------------------------------------</span>
            </div>
            <div className=' mt-10 text-center'>
                <button className='grow-0 w-15px bg-gray-900 text-white border text-2xl focus:border-blue-900 rounded-xl outline-none p-4 border-green-400 hover:border-green-600 duration-400 hover:duration-400'>
                    <Link href="./home">
                        Go Back
                    </Link>
                </button>
            </div>
        </div>
    )
};

export default credits;