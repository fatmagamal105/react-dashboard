import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
        <div className='text-center bg-primary p-3 text-light'>
            <h1>Welcome To Admin Dashboard</h1>
        </div>
        <div className='row'>
            <div className='col-2 p-4 bg-info'>
                <ul className='list-unstyled'>
                    <li>
                        <Link to={'/admin/products'}> Products </Link>
                    </li>
                </ul>
            </div>
            <div className='col-9'>
                <Outlet />
            </div>
        </div>
    </>
  )
}
