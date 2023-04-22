import VolunteerPositionCard from './VolunteerPositionCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { OngInterface } from '../types/VolunteerPosition';

export default function CardOng() {
  const [db, setdb] = useState<[]>();

  const actuales = db?.filter((post: OngInterface) => post.published === '17/4/2023');

  useEffect(() => {
    axios('https://jsonserverong.onrender.com/post').then((data) => {
      console.log(data.data.post);
      setdb(data.data);
    });
  }, []);

  return (
    <>
      {/* {DataOng.map((position) => {
        return <VolunteerPositionCard key={position.id} position={position} />;
      })} */}
      {actuales?.map((post: OngInterface) => {
        return <VolunteerPositionCard key={post.id} post={post} />;
      })}
    </>
  );
}
