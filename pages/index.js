// import '../styles/Home.module.css';
import { useState } from 'react';

import Title from '@/components/Title';
import Service from '@/components/Service';
import servicesData from '@/assets/servicesData';

const Home = () => {
  const [services, setServices] = useState(servicesData);
  const handleServiceClick = (id) => {
    setServices(
      services.map((service) => {
        if (service.id === id) {
          return { ...service, selected: !service.selected };
        }
        return service;
      })
    );
  };

  const total = services.reduce((accumulator, service) => {
    if (service.selected) {
      return accumulator + service.price;
    }
    return accumulator;
  }, 0);

  return (
    <div className="home">
      <Title />
      {/* {servicesData.map((service) => (
      <Service key={service.id} name={service.name} price={service.price} />
    ))} */}
      {services.map((service) => (
        <Service
          key={service.id}
          {...service}
          onServiceClick={handleServiceClick}
        />
      ))}
      <button disabled>
        <span>Total</span>
        <span>{total}</span>
      </button>
    </div>
  );
};

export default Home;
