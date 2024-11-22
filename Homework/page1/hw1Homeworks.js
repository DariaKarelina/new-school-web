import './hw1Homeworks.css';
import TopicForHW1 from './hw1TopicForHW1';
import TopicForHW2 from './hw1TopicForHW2';
import TopicForHW3 from './hw1TopicForHW3';
import TopicForHW4 from './hw1TopicForHW4';
import TopicForHW5 from './hw1TopicForHW5';
import TopicForHW6 from './hw1TopicForHW6';

const Homeworks = () => {
    return(
        <div className="homeworks">
            <TopicForHW1/>             <TopicForHW2/>            <TopicForHW3/>
            <TopicForHW4/>            <TopicForHW5/>            <TopicForHW6/>
        </div>

    );
}

export default Homeworks;