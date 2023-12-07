// import '../styles/Home.module.css';
import { useState, useEffect } from 'react';

import Title from '@/components/Title';
import Service from '@/components/Service';
import ServiceForm from '@/components/ServiceForm';
// import servicesData from '@/assets/servicesData';

const Home = () => {
  const [isStorageSynchronized, setIsStorageSynchronized] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(JSON.parse(localStorage.getItem('services')) ?? []);
    setIsStorageSynchronized(true);
  }, []);

  useEffect(() => {
    if (isStorageSynchronized) {
      localStorage.setItem('services', JSON.stringify(services));
    }
  }, [isStorageSynchronized, services]);

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

  const handleServiceSubmit = (name, price) => {
    setServices([
      ...services,
      {
        id: services.length + 1,
        name,
        price,
        selected: false,
      },
    ]);
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
      <ServiceForm onSubmit={handleServiceSubmit} />
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
      {!!services.length && (
        <button disabled>
          <span>Total</span>
          <span>{total}</span>
        </button>
      )}
    </div>
  );
};

export default Home;
