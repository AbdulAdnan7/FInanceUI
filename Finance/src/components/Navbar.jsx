import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='p-4'>
        <div className='p-2 flex justify-between'>
            <div>
                <h1 className='text-2xl'>FinanceTech</h1>
            </div>
            <div>
              <select name="role" id="role"
              className='px-3 py-2 rounded border'
              >
                  <option value="admin">Admin</option>
                  <option value="viewer">Viewer</option>
              </select>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar