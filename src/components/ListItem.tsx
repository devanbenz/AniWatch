import React from 'react'
import { addFavorite } from '../services/AniSVC'

interface ListItemProps {
    title: string
    cover_image: string
}

const ListItem = ({title, cover_image}: ListItemProps): JSX.Element => {
    const addToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addFavorite(title, cover_image)
    }

    return (
        <div> 
            <h2>{title}</h2>
            <img alt='cover' src={cover_image} />
            <button onClick={addToFavorites} >Add to list</button>
        </div>
    )
}

export default ListItem