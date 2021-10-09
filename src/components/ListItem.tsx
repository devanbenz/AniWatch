const ListItem = ({title, cover_image}) => {
    return (
        <div> 
            <h2>{title}</h2>
            <img alt='cover' src={cover_image} />
        </div>
    )
}