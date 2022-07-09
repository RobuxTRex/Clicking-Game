import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function devFooter() {
    return (
        <div>
            <h1 className='mt-10 text-center font-bold hover:text-2xl text-xl hover:duration-500 duration-500 hover:text-gray-300'>Development Build</h1>
        </div>
    );
}

export default devFooter;