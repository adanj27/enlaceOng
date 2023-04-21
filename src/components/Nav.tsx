export default function Nav({ navlink }: { navlink: string[][] }) {
  return (
    <div className="w-full h-48 flex flex-col items-center md:w-2/6">
      <ul className="w-64 flex flex-col gap-1">
        {navlink.map((items, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 m-1 w-full h-8  text-white text-xs  bg-[${items[2]}] rounded-lg`}
          >
            <img className="mx-2" src={items[1]} alt="" />
            <a href={`#${index}`}>{items[0]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
