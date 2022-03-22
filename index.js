const useState = (value) => {
  const inner = () => {};
  return [value, inner];
};

const arr = useState(0);

const [value, setValue] = arr;

console.log(value, setValue);
