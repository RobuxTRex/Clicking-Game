import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Server() {
  const router = useRouter()
  const [port, setPort] = useState<number>()

  useEffect(() => {
    if (router.isReady) {
      const queryPort = Number(router.query.port)
      if (!queryPort || isNaN(queryPort)) {
        router.push('/home')
        return
      }

      const { ipcRenderer } = window.require('electron')
      setPort(queryPort)

      console.log('starting server on', queryPort)

      ipcRenderer.invoke('start server', queryPort)
        .then(() => {
          console.log('server started')
        })
        .catch((err) => console.warn(err))
    }
  }, [router.isReady, router.query.port])

  if (!port) return null

  return (
    <div className="p-4">
      <Head>
        <title>Click Click! Server (port {port})</title>
      </Head>

      <h1 className="font-semibold mb-2">Click Click! Server</h1>

      <p>Access this server on port <code>{port}</code></p>
    </div>
  );
}

export default Server;
