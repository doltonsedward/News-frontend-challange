import './News.scss'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { API } from "../../../infrastructure"

import { 
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'
import { addNews } from '../../../application'

const News = () => {
    const [articles, setArticles] = useState<any>([])
    const dispatch = useDispatch()
    const getArticles = async () => {
        try {
            const response = await API.get('/everything?q=bitcoin&sortBy=popularity&apiKey=72ac3317a1ef443ab9a3b7932ee7ef03')
            setArticles(response.data.articles)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDetailNews = (item: any): void => {
        dispatch(addNews({
            title: item.title,
            description: item.description,
            image: item.image,
            sourceName: item.sourceName,
            url: item.url
        }))
    }

    useEffect(() => {
        getArticles()
    }, [])
    return (
        <div className="home-page">
            <h1 className="text-center">Crash News</h1>
            <CardGroup className="responsive-grid">
                {articles.map((item:any, i:number) => (
                    <Link to="/detail-news" key={i} className="wrapper__card" onClick={() => handleDetailNews(item)}>
                        <Card>
                            <div className="wrapper-img-body">
                                <CardImg
                                    alt={item.title}
                                    src={item.urlToImage}
                                    top
                                    width="100%"
                                /> 
                                <span className="source">tes</span>
                            </div> 
                            <CardBody>
                                <CardTitle tag="h2">
                                    {item.title}
                                </CardTitle>
                                <CardText>
                                    {item.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </Link>
                ))}
            </CardGroup>
        </div>
    )
}

export default News
