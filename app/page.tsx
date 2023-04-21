import Image from 'next/image'
import CardHome from './components/Card'
import DividerComp from './components/Divider'
export default function Home() {
  return (
    <div className="text-6xl min-h-screen bg-gradient-to-br from-[#394f68] to-blue-700
    p-10 flex flex-col justify-center ">
     <CardHome  />
    
    </div>
  )
}
