import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import FeaturedPost from './Components/FeaturedPost';
import LisOfPost from './Components/LisOfPost';
import getAllPosts from './resources/post';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FeaturedPost
        updatedAt={'February 3, 2022'}
        title={'bootcamp went well'}
        image={
          'https://itjuana.com/wp-content/uploads/2022/02/Steps-toward-hyper-automation.jpg'
        }
      />
      <LisOfPost post={getAllPosts()} />
    </div>
  );
}

export default App;
