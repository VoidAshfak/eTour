import React, { useState, useCallback } from 'react'
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'
import Auth from './user/pages/Auth'
import { AuthContext } from './shared/context/auth-context'


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = useCallback(() => {
        setIsLoggedIn(true)
    }, [])

    const logout = useCallback(() => {
        setIsLoggedIn(false)
    }, [])

    let routes;
    if (isLoggedIn) {
        routes = (
            <Routes>
                <Route path='/' element={<Users />} />
                <Route path='/:userId/places' element={<UserPlaces />} />
                <Route path='/places/new' element={<NewPlace />} />
                <Route path='/places/:placeId' element={<UpdatePlace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path='/' element={<Users />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/:userId/places' element={<UserPlaces />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        )
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            <BrowserRouter>
                <MainNavigation />
                <main>
                    {routes}
                </main>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App