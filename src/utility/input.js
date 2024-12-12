function Input({ label, id, type, name }) {
  return (
    <>
      <div className={classes.data_box}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} name={name} />
      </div>
    </>
  );
}
export default Input;
