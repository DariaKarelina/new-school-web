import './home1News.css';
import NewsOne from "./home1NewsOne";
import NewsTwo from "./home1NewsTwo";
import NewsThree from "./home1NewsThree";
const News = () => {
    return(
        <div className="news">
            <NewsOne/>
            <NewsTwo/>
            <NewsThree/>
        </div> 
    )
}

export default News;