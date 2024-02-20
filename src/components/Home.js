export const Home = () => {
  const arr = [];

  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }
  return (
    <div className="mt-20">
      <ul>
        {arr.map((x) => (
          <li
            key={x}
            className="py-10 bg-orange-200 mt-4 w-full hover:bg-orange-300"
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};
