import { getNewsList } from '../lib/api';
import HomePage from '../components/HomePage';

export default async function Home() {
  const newsList = await getNewsList();

  return (
    <HomePage news={newsList} />
  );
}
