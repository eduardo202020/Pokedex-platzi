import React from 'react'

interface IProps {
  children?: React.ReactNode
}

export const GlobalContainer = ({ children }: IProps) => {
  return (
    <section className="dark:bg-slate-900 min-h-screen transition duration-300">
      {children}
    </section>
  )
}
