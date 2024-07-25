import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const UserPlaces = () => {

    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Grand Canal, Venice',
            description: 'The Grand Canal is the largest channel in Venice, Italy, forming one of the major water-traffic corridors in the city.',
            imageUrl:
                'https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg',
            address: ' Cultural landmark Venice, Metropolitan City of Venice, Italy',
            location: {
                lat: 45.438759,
                lng: 12.327145
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Emp. State Building',
            description: 'One of the most famous sky scrapers in the world!',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
            address: '20 W 34th St, New York, NY 10001',
            location: {
                lat: 40.7484405,
                lng: -73.9878584
            },
            creator: 'u2'
        }
    ];

    const { userId } = useParams()

    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return (
        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces