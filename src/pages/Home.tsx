import { useEffect, useState } from 'react';
import { Skip } from '../utils/types';
import { getSkipRecords } from '../utils/data-fetch';
import SkipCard from '../components/SkipCard';

const HomePage = () => {
  const [data, setData] = useState<Skip[]>([] as Skip[]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const fetchSkipsData = async () => {
        setLoading(true);
        const response = await getSkipRecords();
        if (response.status === 200 && Array.isArray(response.data)) {
          setData(response.data);
        } else {
          if (!('message' in response.data)) return;
          setError(response.data.message);
        }
        setLoading(false);
      };
      fetchSkipsData();
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className=" w-full flex flex-col gap-y-8 p-4 md:p-8">
      <div className="flex flex-col justify-start gap-2">
        <h1 className="text-3xl font-bold text-start" data-testid="title">
          Choose Your Skip Size
        </h1>
        <h2 className="text-xl font-semibold text-gray-400 text-start">
          Select the skip size that best suits your needs
        </h2>
      </div>
      <div className="grid">
        {loading ? (
          <div
            data-testid="loaders"
            className="size-10 mt-12 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"
          />
        ) : error !== '' ? (
          <p></p>
        ) : data.length === 0 ? (
          <div></div>
        ) : (
          <div
            data-testid="content"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {data.map((item: Skip, ind: number) => (
              <SkipCard skipItem={item} key={ind} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
