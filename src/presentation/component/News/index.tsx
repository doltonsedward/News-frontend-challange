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
                    <div className="wrapper__card">
                        <Card key={i} className="card">
                            <CardImg
                                alt={item.title}
                                src={item.urlToImage}
                                top
                                width="100%"
                                className="image__card"
                            />  
                            <CardBody className="body__card">
                                <CardTitle tag="h2" className="title__card">
                                    {item.title}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </CardGroup>
        </div>
    )
}

export default News
