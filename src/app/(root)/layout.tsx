import MobileNav from '@/components/Shared/MobileNav'
import Sidebar from '@/components/Shared/Sidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="root">
        <Sidebar/>
        <MobileNav/>
        <div className="root_container">
            <div className="wrapper">
                {children}
            </div>
        </div>
    </div>
  )
}

export default layout