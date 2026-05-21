'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-green-500">Spotify Tracker</h1>
        
        {session ? (
          <div className="flex flex-col items-center gap-4">
            <p>Logged in as {session.user?.name}</p>
            <button 
              onClick={() => signOut()}
              className="px-6 py-3 bg-red-600 rounded-full font-bold hover:bg-red-500 transition"
            >
              Log Out
            </button>
          </div>
        ) : (
          <button 
            onClick={() => signIn('spotify')}
            className="px-6 py-3 bg-green-500 rounded-full text-black font-bold hover:bg-green-400 transition"
          >
            Log in with Spotify
          </button>
        )}
      </div>
    </main>
  );
}
