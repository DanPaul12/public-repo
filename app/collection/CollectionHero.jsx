import Header from '@/components/ui/1 - header'
import { Button } from '@/components/ui/button'
import SearchComp from '@/components/ui/search'

import { Source_Serif_4 } from 'next/font/google'

const sourceSerif = Source_Serif_4({ subsets: ['latin'] })
import React from 'react'

export default function CollectionHero() {
  return (
    <div className="relative h-full w-full bg-[url('/rockTool.png')] bg-opacity-5">
      <div className="mx-auto h-full w-full p-4 md:px-6 pt-6 lg:pt-10 lg:px-8 py-32 relative flex flex-col items-center">
        <Header />
        <SearchComp />
      </div>
    </div>
  )
}
