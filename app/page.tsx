import React from 'react'
import {Nav} from './components/Nav'
import Practive from './components/Practive'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Hero from './components/Hero'

const page = () => {
  return (
    <div>
      <Nav/>
    <Hero/>
      
    </div>
  )
}

export default page
