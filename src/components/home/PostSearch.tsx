import CardOng from '../CardOng';

function PostSearch() {
  return (
    <div className="bg-[#FFDC72] pb-16 w-full">
      <h2 className="w-full mx-auto py-5 text-lg font-bold text-gray-800 px-4">
        Últimas búsquedas publicadas
      </h2>
      <div className="pl-12 w-full grid grid-flow-col  gap-9  overflow-x-scroll md:grid  md:grid-flow-col  ">
        <CardOng />
      </div>
    </div>
  );
}

export default PostSearch;
