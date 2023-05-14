import Link from 'next/link'
import React from 'react'
import { RxDashboard, RxEnvelopeClosed, RxExit, RxExitFullScreen, RxPerson } from 'react-icons/rx'

const style = {
  wrapper: `fixed w-60 font-medium h-screen bg-white border-r-[1px] flex flex-col justify-between`,
  content: `ml-60 w-full`,
  tabs: `flex flex-col items-center`,
  link: `my-2 w-full px-5`,
  linkText: `mx-4`,
  activeIconBackground: `bg-purple-900 flex hover:bg-purple-800 text-white p-3 rounded-lg inline-block`,
  nonActiveIconBackground: `flex hover:bg-gray-100 text-black p-3 rounded-lg inline-block`,
}

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
      <div className={style.wrapper}>
        <div className={style.tabs}>
          <Link className={style.link} href='/dashboard'>
            <div className={style.activeIconBackground}>
              <RxDashboard size={20} />
              <h2 className={style.linkText}>Dashboard</h2>
            </div>
          </Link>
          <Link className={style.link} href='/users'>
            <div className={style.nonActiveIconBackground}>
              <RxPerson size={20} />
              <h2 className={style.linkText}>Riders</h2>
            </div>
          </Link>
          <Link className={style.link} href='/messages'>
            <div className={style.nonActiveIconBackground}>
              <RxEnvelopeClosed size={20} />
              <h2 className={style.linkText}>Messages</h2>
            </div>
          </Link>
          <Link className={style.link} href='/logout'>
            <div className={style.nonActiveIconBackground}>
              <RxExit size={20} />
              <h2 className={style.linkText}>Logout</h2>
            </div>
          </Link>
        </div>
      </div>
      <main className={style.content}>{children}</main>
    </div>
  )
}

export default Sidebar