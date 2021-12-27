import './News.scss'
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { API } from "../../../infrastructure"

import { Button } from 'reactstrap'
import { addNews } from '../../../application'
import ContainerCard from '../Card/ContainerCard'

interface eventHandleSort {
    target: {
        removeAttribute: Function,
        setAttribute: Function,
        classList: any
    }
}

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

    const handleSorting = (event: eventHandleSort, target: string): void => {
        setSortBy(target)
        const self = event.target
        const currentTheme: string = self.classList[1].split('-')[2] || self.classList[1].split('-')[1]

        if (self.classList.value.includes('active')) {
            self.setAttribute('class', `btn btn-outline-${currentTheme}`)
            return
        }
        
        self.removeAttribute('class')
        self.setAttribute('class', `btn btn-${currentTheme} active`)
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
                <Button color="primary" outline onClick={(e: any) => handleSorting(e, 'popularity')}>Popularity</Button>
            </div>
            <ContainerCard data={articles} handleDetailNews={handleDetailNews} />
            <div className="text-center">
                <Button color="primary" onClick={handleIncreasePageSize}>Load more</Button>
            </div>
        </div>
    )
}

export default News
