// import styles from '../styles/Home.module.css';
import Title from '@/components/Title';
import Service from '@/components/Service';
import servicesData from '@/assets/servicesData';

const Home = () => (
  <div className="home">
    <Title />
    {/* {servicesData.map((service) => (
      <Service key={service.id} name={service.name} price={service.price} />
    ))} */}
    {servicesData.map((service) => (
      <Service key={service.id} {...service} />
    ))}
  </div>
);

export default Home;
