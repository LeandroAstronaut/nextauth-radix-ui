import { Container } from '@radix-ui/themes';
import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page Description"
}

async function HomePage() {

  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <Container className='px-5 md:px-0'>
      <header className='my-4 bg-slate-900 p-10 rounded-md'>
        <h1 className='text-7xl my-10'>Welcome</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit earum atque saepe totam necessitatibus dolor architecto quis quasi id, reiciendis modi corporis laudantium repudiandae, qui voluptas iste facere accusamus blanditiis?</p>
        <div className='mt-5'>
          <Link href="/auth/login" className='text-white bg-blue-500 px-2 py-1 rounded-md '>
            Ingresa
          </Link>
        </div>
      </header>
    </Container>
  )
}

export default HomePage