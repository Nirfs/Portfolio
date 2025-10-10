// pages/HomeWrapper.jsx
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {Home} from './Home';
import { Loader } from '../components/Loader';

export function HomeWrapper() {
  const worksList = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On attend que les données soient prêtes
    if (worksList) {
      setTimeout(() => setLoading(false), 500); // 500ms pour le loader
    }
  }, [worksList]);

  if (loading) return <Loader />;

  return <Home worksList={worksList} />;
}
