import './News.scss'

import { useEffect, useState } from "react"
import { API } from "../../../infrastructure"

import { 
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap'

const News = () => {
    const [articles, setArticles] = useState([])
    const getArticles = async () => {
        try {
            const response = await API.get('/everything?q=bitcoin&sortBy=popularity&apiKey=72ac3317a1ef443ab9a3b7932ee7ef03')
            setArticles(response.data.articles)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getArticles()
    }, [])
    return (
        <div className="home-page">
            <h1 className="text-center">Crash News</h1>
            <CardGroup className="responsive-grid">
                {articles.map((item:any, i:number) => (
                    <div key={i} className="wrapper__card">
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
                    </div>
                ))}
            </CardGroup>
        </div>
    )
}

export default News
