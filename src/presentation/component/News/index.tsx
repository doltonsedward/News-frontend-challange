import './News.scss'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { API } from "../../../infrastructure"

import React from 'react';
import { 
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap'
import { addNews } from '../../../application'

const News = () => {
    const [articles, setArticles] = useState<any>([])
    const dispatch = useDispatch()
    const getArticles = async () => {
        try {
            const response = await API.get(`/everything?q=bitcoin&sortBy=relevancy&apiKey=${process.env.REACT_APP_API_KEY}`)
            setArticles(response.data.articles)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDetailNews = (item: any): void => {
        dispatch(addNews({
            title: item.title,
            description: item.description,
            image: item.urlToImage,
            sourceName: item.source.name,
            url: item.url
        }))
    }

    useEffect(() => {
        getArticles()
    }, [])
    return (
        <div className="home-page">
            <div className="title__home-page text-center">
                <h1>Crash News</h1>
                <h2>The warehouse is the latest, newest, and most popular news. All stored in one website</h2>
            </div>
            <div className="header__home-page">
                <p>Search by: </p>
                <Button color="primary" outline>Popularity</Button>
            </div>
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
                                <CardTitle tag="h3">
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
