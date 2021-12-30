import './Detail.scss'
import { DetailNewsInterface } from "../../../../application"

const DetailNews = (props: DetailNewsInterface) => {
    const { title, image } = props.news
    return (
        <div className="detail-news">
            <div className="header">
                <h1>{title}</h1>
                <div className="cover-image__header">
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}

export default DetailNews

