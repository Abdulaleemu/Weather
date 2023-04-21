"use client"
import React from 'react'
import { Card, Divider, Subtitle, Text } from '@tremor/react'
import DividerComp from './Divider'
import CityPicker from '@/components/CityPicker'


const CardHome = () => {
  return (
    <Card className='max-w-4xl mx-auto'>
        <Text className='text-6xl font-bold text-center mb-10'>Weather AI</Text>
        <Subtitle>
            Powered by Open AI, Nextjs 13.3 
        </Subtitle>
        <DividerComp />

        <Card className='text-xl bg-gradient-to-br from-[#394f68] to-blue-700'>
{/* cityPicker */}
<CityPicker/>
        </Card>
    </Card>
  )
}

export default CardHome