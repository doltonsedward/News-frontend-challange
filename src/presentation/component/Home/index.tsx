import { useEffect } from "react"
import { API } from "../../../infrastructure"

const Home = () => {
    const getBitcoinData = async () => {
        try {
            const response = await API.get('/everything?q=bitcoin&apiKey=72ac3317a1ef443ab9a3b7932ee7ef03')
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBitcoinData()
    }, [])
    return (
        <div>
            <p>Hello Dollong</p>
        </div>
    )
}

export default Home
