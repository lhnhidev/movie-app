export default function PaginateIndicator() {
  return (
    <div className="absolute bottom-[30px] right-8 lg:bottom-[15%] xl:bottom-[25%]">
      <ul className="hidden gap-1 min-[480px]:flex">
        <li className="h-1 w-6 cursor-pointer bg-stone-50"></li>
        <li className="h-1 w-6 cursor-pointer bg-gray-500"></li>
        <li className="h-1 w-6 cursor-pointer bg-gray-500"></li>
        <li className="h-1 w-6 cursor-pointer bg-gray-500"></li>
      </ul>
    </div>
  );
}
