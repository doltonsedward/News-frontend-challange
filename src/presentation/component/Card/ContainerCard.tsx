import { Link } from 'react-router-dom'
import { 
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap'

interface Props {
    data: [],
    handleDetailNews: Function
}

const ContainerCard = (props: Props) => {
    const { data, handleDetailNews } = props
    return (
        <CardGroup className="responsive-grid">
            {data.map((item:any, i:number) => (
                <Link to="/detail-news" key={i} className="wrapper__card" onClick={() => handleDetailNews(item)}>
                    <Card>
                        <div className="wrapper-img-body">
                            <CardImg
                                alt={item.title}
                                src={item.urlToImage}
                                top
                                width="100%"
                            /> 
                            <span className="source">{item.source.name}</span>
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
    )
}

export default ContainerCard
