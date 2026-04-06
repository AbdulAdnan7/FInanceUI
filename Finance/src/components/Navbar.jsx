import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BarChart3 } from 'lucide-react'
import { setRole } from '../redux/slices/roleSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.role.currentRole)

  const handleRoleChange = (e) => {
    dispatch(setRole(e.target.value))
  }

  return (
    <nav className='bg-white border-b border-gray-200'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-14'>
          <div className='flex items-center space-x-2'>
            <BarChart3 className='h-5 w-5 text-gray-700' />
            <h1 className='text-lg font-semibold text-gray-900'>Finance</h1>
          </div>
          <select
            value={role}
            onChange={handleRoleChange}
            className='text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500'
          >
            <option value="admin">Admin</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar