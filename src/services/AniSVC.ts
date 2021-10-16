const token:String = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzMyIsIm5iZiI6MTYzMzU2MzU5NSwiZXhwIjoxNjM2MTU1NTk1LCJpYXQiOjE2MzM1NjM1OTV9.uwtIaniluOHswyYe2PtCgzF7aEccoUuq5EGZnEa52po'

const getAnime = async (title:String): Promise<Response|undefined> => {
    try{
        const anime: Response = await fetch(`https://api.aniapi.com/v1/anime?title=${title}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        return anime
    }catch(e){
        console.log(e)
    }
}

const addFavorite = async (title: string, cover_image: string) => {
    try{
        await fetch('http://localhost:3000/api/v1/fav', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, cover_image: cover_image })
        })
    }catch(e){
        console.log(e)
    }
}


export {
    getAnime,
    addFavorite
}