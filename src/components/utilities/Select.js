function Select(props) {
  const options = props.options;
  return (
    <div>
      {options[1]}
      <select>
        {options[0].map((o, i) => (
          <option key={`option_${i}`}>{o}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
