const form = () => {
  return (
    <form className="form">
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Department:
        <input type="text" />
      </label>
      <label>
        Rating:
        <input type="text" />
      </label>
      <label htmlFor="submit">
        <input type="submit" value="Submit" id="submit" />
      </label>
    </form>
  );
};

export default form;
