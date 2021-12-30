import { useSelector } from "react-redux"
import { DetailNewsInterface } from "../../application"
import DetailNews from "../component/News/Detail"

const DetailNewsContainer = () => {
    const news = useSelector((state: DetailNewsInterface) => state.news)

    if (!news.title || !news.description) window.location.href = '/not-found'

    return (
        <DetailNews news={news} />
    )
}

export default DetailNewsContainer
