export const Home = () => {
  const arr = [];

  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }
  return (
    <div className="mt-20">
      <ul></ul>
      {arr.map((x) => (
        <li className="py-10 bg-orange-200 my-4 w-full">{x}</li>
      ))}
    </div>
  );
};
