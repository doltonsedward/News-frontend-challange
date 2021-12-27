import { useSelector } from "react-redux"

interface DetailNewsState {
    news: {
        title: string,
        description: string,
        image: string,
        sourceName: string,
        url: string
    }
}

const DetailNews = () => {
    const { 
        title,
        description,
        image,
        sourceName,
        url
    } = useSelector((state: DetailNewsState) => state.news)

    if (!title || !description) {
        window.location.href = '/not-found'
    }

    return (
        <div>
            <img src={image} alt={title} />
        </div>
    )
}

export default DetailNews
