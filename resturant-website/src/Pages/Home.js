
import Layout from '../Component/L/Layout';
import { useNavigate } from 'react-router-dom';
import Res from '../images/res.jpg';
import '../Style/HomeStyle.css';


const Home = () => {
  // const [dishes, setDishes] = useState([]);
  const navigate = useNavigate();
  

  // Getting dishes
  const getdishes = async () => {
    // try {
    //   const res = await axios.get("http://localhost:5000/");
    //   console.log(res.data);
    //   setDishes(res.data); // Set the fetched data to state
    //   navigate('/menu', { state: { dishes: res.data } }); // Navigate to /menu with state
    // } catch (error) {
    //   alert("It's not working");
    // }
    navigate("/menu");
  };

  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${Res})` }}>
        <div className='headercontainer'>
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <button onClick={getdishes}>ORDER NOW</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
