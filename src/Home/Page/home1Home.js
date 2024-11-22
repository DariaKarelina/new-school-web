import './home1Home.css';
import Head from '../Header/home1Head';
import Menu from '../../Menu';
import News from '../News/home1News';
import Message from "../ButtonFB/home1Message";

const Home = () => {
    return (
      
        <div className="home">
          <Head/>
          <Menu/>
          <News/>
          <Message/>
    
    
        </div>
        
      );
}

export default Home;