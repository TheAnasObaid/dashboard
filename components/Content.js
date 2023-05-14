import React from 'react'

const style = {
    wrapper: `flex justify-between px-4 pt-4`
}

function Content() {
  return (
    <div className={style.wrapper}>
        <h2>Dashboard</h2>
        <h2>Welcome back, Driver</h2>
    </div>
  )
}

export default Content