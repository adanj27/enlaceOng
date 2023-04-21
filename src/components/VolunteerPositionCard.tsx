import { OngInterface } from '../types/VolunteerPosition';
import Card from './Card';

// export default function VolunteerPositionCard({ position }: { position: VolunteerPosition }) {
export default function VolunteerPositionCard({ post }: { post: OngInterface }) {
  return (
    <div key={post.id} className=" w-72 flex flex-col hover:scale-105 transition-transform">
      <div className=" relative w-full h-[40%] flex items-start justify-end">
        <span className="absolute bg-orange-500 px-4 py-[2px] rounded-full text-xs font-semibold  text-white mr-4 mt-2">
          {post.modality}
        </span>
        <img className="w-full h-full object-cover rounded-t-lg" src={post.img} alt="position" />
      </div>
      <Card className="rounded-t-none h-44 bg-white">
        <div>
          <h2 className="text-xs font-semibold ">{post.title}</h2>
          <p className="text-xs mt-3 text-gray-500">
            Ubicación: <span className="text-black font-medium">{post.location}</span>
          </p>
          <p className="text-xs text-gray-500">
            Duración: <span className="text-black font-medium">{post.duration}</span>
          </p>
        </div>
        <div className="w-full flex justify-end mt-2">
          <span className="text-xs text-gray-500">{post.published}</span>
        </div>
      </Card>
    </div>
  );
}
