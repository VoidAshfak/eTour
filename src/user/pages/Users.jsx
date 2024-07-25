import React from 'react'
import UsersList from '../components/UsersList'

function Users() {

    const USERS = [
        {
            id: 'u1',
            name: 'David Jordan',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Ranbir_Kapoor_promoting_Brahmastra.jpg',
            places: 3,
        },
        {
            id: 'u2',
            name: 'Michel Sifra',
            image: 'https://static.toiimg.com/thumb/msid-107578752,width-1280,height-720,resizemode-4/107578752.jpg',
            places: 8,
        },
    ]

    return (
        <UsersList items={USERS} />
    )
}

export default Users