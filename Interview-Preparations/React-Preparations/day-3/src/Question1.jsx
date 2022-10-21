const Question1 = () => {
  return (
    <>
      <h1>
        1.{" "}
        <a
          href="https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/#:~:text=Differences%20between%20Axios%20and%20Fetch%3A&text=Axios%20has%20url%20in%20request,installation%20is%20required%20as%20such."
          target={"_blank"}
          rel="noreferrer"
        >
          Difference between Axios and fetch ?
        </a>
      </h1>
      <table style={{ border: "1px solid black; padding: 5px" }}>
        <thead>
          <th style={{ border: "1px solid black" }}>Axios</th>
          <th style={{ border: "1px solid black" }}>Fetch</th>
        </thead>
        <tr>
          <td>Axios has url in request object.</td>
          <td>Fetch has no url in request object.</td>
        </tr>
        <tr>
          <td>
            Axios is a stand-alone third party package that can be easily
            installed.
          </td>
          <td>
            Fetch is built into most modern browsers; no installation is
            required as such.
          </td>
        </tr>
        <tr>
          <td>Axios uses the data property.</td>
          <td>Fetch uses the body property.</td>
        </tr>
        <tr>
          <td>Axios’ data contains the object.</td>
          <td>Fetch’s body has to be stringified.</td>
        </tr>
        <tr>
          <td>Axios performs automatic transforms of JSON data.</td>
          <td>
            Fetch is a two-step process when handling JSON data- first, to make
            the actual request; second, to call the .json() method on the
            response.
          </td>
        </tr>
      </table>

      <p>Axios:</p>
      <pre>
        axios.get('url') .then((response) =&gt;{" "}
        {
          // Code for handling the response
        }
        ) .catch((error) =&gt;{" "}
        {
          // Code for handling the error
        }
        )
      </pre>

      <p>Fetch :</p>
      <pre>
        fetch('path-to-the-resource-to-be-fetched') .then((response) =&gt;{" "}
        {
          // Code for handling the response
        }
        ) .catch((error) =&gt;{" "}
        {
          // Code for handling the error
        }
        );
      </pre>
    </>
  );
};

export default Question1;
