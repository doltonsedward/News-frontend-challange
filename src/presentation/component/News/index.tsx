import './News.scss'
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { API } from "../../../infrastructure"

import { Button } from 'reactstrap'
import { addNews } from '../../../application'
import ContainerCard from '../Card/ContainerCard'

const News = () => {
    const [articles, setArticles] = useState <[]>([])
    const [sortBy, setSortBy] = useState <string>('')
    const [pageSize, setPageSize] = useState <number>(20)
    const dispatch = useDispatch()
    const getArticles = async () => {
        try {
            const endpoint = `/everything?q=bitcoin&sortBy=${!sortBy ? 'relevancy' : sortBy}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
            const response = await API.get(endpoint)
            setArticles(response.data.articles)
        } catch (error: any) {
            if (error.message === 'Network Error') toast.error('Network Error')
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

    const handleSorting = (target: string): void => {
        setSortBy(target)
    }

    const handleIncreasePageSize = (): void => {
        setPageSize(pageSize + 20)
    }

    useEffect(() => {
        getArticles()
    }, [sortBy, pageSize])
    return (
        <div className="home-page">
            <div className="title__home-page text-center">
                <h1>Crash News</h1>
                <h2>The warehouse is the latest, newest, and most popular news. All stored in one website</h2>
            </div>
            <div className="header__home-page">
                <p>Search by: </p>
                <Button color="success" onClick={() => handleSorting('popularity')}>Popularity</Button>
                {' '}
                <Button color="primary" onClick={() => handleSorting('relevancy')}>Relevancy</Button>
                {' '}
                <Button color="info" onClick={() => handleSorting('publishedAt')}>PublishedAt</Button>
            </div>
            <ContainerCard data={articles} handleDetailNews={handleDetailNews} />
            <div className="text-center">
                <Button color="primary" onClick={handleIncreasePageSize}>Load more</Button>
            </div>
        </div>
    )
}

export default News
