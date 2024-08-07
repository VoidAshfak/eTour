import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import './PlaceForm.css';

import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook';

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



const UpdatePlace = () => {

    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;



    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId); // Service Call

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        }
    )

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    useEffect(() => {
        if (identifiedPlace) {
            setFormData(
                {
                    title: {
                        value: identifiedPlace.title,
                        isValid: true
                    },
                    description: {
                        value: identifiedPlace.description,
                        isValid: true
                    }
                },
                true
            );
        }
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);



    if (!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find place!</h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        );
    }


    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler} >
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min. 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid} >
                UPDATE PLACE
            </Button>
        </form>

    )
}

export default UpdatePlace