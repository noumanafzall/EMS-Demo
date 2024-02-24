import React from 'react'
import PageHeader from '../Headers/PageHeader'
import { Outlet } from 'react-router-dom'

function PageLayout() {
  return (
    <>
    <PageHeader />
    <Outlet/>
    </>
  )
}

export default PageLayout