import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces'


function App() {
    return (
        <BrowserRouter>
            <MainNavigation />
            <main>
                <Routes>
                    <Route path='/home' element={<Users />} />
                    <Route path='/' element={<Navigate replace to='/home' />} />
                    <Route path='/:userId/places' element={<UserPlaces />} />
                    <Route path='/places/new' element={<NewPlace />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App