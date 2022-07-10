import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import DevFooter from '../components/DevFooter';
import Link from 'next/link';
import { io, Socket } from "socket.io-client"
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
  const [address, setAddress] = useState<string>()
  const [joinOrHost, setJoinOrHost] = useState<'join' | 'host'>()
  const inputRef = useRef<HTMLInputElement>()
  const [socket, setSocket] = useState<Socket>()
  const [ upgrades, setUpgrades ] = useState(0);
  const [ clicksCount, setClicks ] = useState(0);
  const [connected, setConnected] = useState(false)

  let clicks = upgrades + clicksCount;

  useEffect(() => {
    if (address) {
      const socket = io(address)
      setSocket(socket)

      console.log('created socket')

      socket.on('clicks updated', (clicks) => {
        setClicks(clicks)
      })

      socket.on('upgrades updated', (upgrades) => {
        setUpgrades(upgrades)
      })

      socket.on("connect", () => {
        console.log('connected')
        setConnected(true)
      })

      return () => {
        socket.disconnect()
      }
    }
  }, [address])

  if (joinOrHost === 'host') {
    return (
      <form className="p-4" onSubmit={async (e) => {
        e.preventDefault()

        const port = Number(inputRef.current.value)
        if (isNaN(port)) {
          alert('invalid port')
          return
        }

        console.log('starting')

        const { ipcRenderer } = window.require('electron')
        await ipcRenderer.invoke('create server window', port)

        console.log(`server started on port ${port}`)
        setAddress(`http://127.0.0.1:${port}`)
        setJoinOrHost(undefined)
      }}>
        <input ref={inputRef} placeholder="Port" required className="bg-gray-900 text-white border rounded-xl outline-none p-4 border-gray-400 focus:border-blue-200 w-64" />
      </form>
    )
  }

  if (joinOrHost === 'join') {
    return (
      <form className="p-4" onSubmit={(e) => {
        e.preventDefault()

        const url = new URL(inputRef.current.value)
        setAddress(url.href)
        setJoinOrHost(undefined)
      }}>
        <input ref={inputRef} placeholder="URL" required className="bg-gray-900 text-white border rounded-xl outline-none p-4 border-gray-400 focus:border-blue-200 w-64" />
      </form>
    )
  }

  if (!address) {
    return (
      <div className="p-4">
        <h1 className="font-semibold mb-2">Multiplayer</h1>

        <button onClick={() => setJoinOrHost('host')} className="w-full btn-blue mb-1">
          Host Server
        </button>

        <button onClick={() => setJoinOrHost('join')} className="w-full btn-blue mb-1">
          Join Server
        </button>
      </div>
    )
  }

  if (!socket) {
    return (
      <div>Loading...</div>
    )
  }

  if (!connected) {
    return (
      <div>Connecting...</div>
    )
  }

  const click = () => {
    socket.emit('click')
  }

  const buyUpgrade = () => {
    socket.emit('buy upgrade')
  }

  const buyMillionUpgrades = () => {
    socket.emit('buy million upgrades')
  }

  const resetStats = () => {
    socket.emit('stats reset')
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
        <button onClick={click} className='mt-1 w-full flex-wrap flex justify-center'>
          <img src="https://www.goodfreephotos.com/albums/vector-images/mouse-cursor-vector-art.png" width={100} height={150}/>
        </button>
        <button onClick={buyUpgrade} className='mt-1 w-full flex-wrap flex justify-center btn-blue'>
          Upgrade me!
        </button>
        <button onClick={buyMillionUpgrades} className='mt-1 w-full flex-wrap flex justify-center btn-blue'>
          Upgrade me! x1million (20% off)
        </button>
        <button onClick={resetStats} className='mt-10 w-full flex-wrap flex bg-red-400 hover:bg-red-500 hover:duration-500 duration-500 btn-blue hover:text-2xl rounded justify-center items-center'>
          Reset stats!
        </button>
      </div>
      <span><DevFooter/></span>
    </React.Fragment>
  )
}

export default Game;
