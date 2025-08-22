"use client"
import React, { useEffect } from 'react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
 
export default function NotFound() {
  useEffect(()=>{
      redirect('/home')
  },[])
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Not Found.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Could not find requested resource.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          Return Home
        </Link>
      </div>
    </section>
  )
}