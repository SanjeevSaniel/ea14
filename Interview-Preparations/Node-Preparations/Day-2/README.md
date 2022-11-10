1.  What are the different types of HTTP requests ?

    - The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE. These are equivalent to the CRUD operations (create, read, update, and delete).
    - GET: GET request is used to read/retrieve data from a web server.
    - POST: POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.
    - PUT: A PUT request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.
    - PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.
    - DELETE: A DELETE request is used to delete the data on the server at a specified location.

2.  Explain the concept of middleware in Node.js.

    - The middleware in node.js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle. This function can be used for modifying the req and res objects for tasks like adding response headers, parsing requesting bodies, and so on

3.  Explain CORS

    - Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented.

4.  What is Express. how it helps you to create a backend application

    - Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily. Web applications are web apps that you can run on a web browser. Since Express.js only requires javascript, it becomes easier for programmers and developers to build web applications and API without any effort.
    - Express.js is a framework of Node.js which means that most of the code is already written for programmers to work with. You can build a single page, multi-page, or hybrid web applications using Express.js. Express.js is lightweight and helps to organize web applications on the server-side into a more organized MVC architecture.

5.  Explain min 5 status codes gets used in Backend development.

            - 100: Information

              - The HTTP 100 informational status response code indicates that everything is OK and that the client can continue with the request.
              - 100 — Continue;
              - 101 — Switching protocol;
              - 103 — Checkpoints.

            - 200: Successful

              - The HTTP 200 success status response code indicates that the request has succeeded. A 200 response is cacheable by default.


            - 300: Redirection

              - The HTTP 300 redirect status response code indicates that the request has more than one possible response. The user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used.
              - 301 — Moved Permanently;
              - 302 — Found;
              - 304 — Not Modified;
              - 305 — Use Proxy;
              - 307 — Temporary Redirect.

            - 400: Client Errors

              - The HTTP (HyperText Transfer Protocol) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
              - 400: Bad Request;
              - 401: Unauthorized;
              - 403: Forbidden;
              - 404: Not Found;
              - 408: Request Timeout;
              - 410: Gone;
              - 418: A teapot;
              - 429: Too Many Requests.

            - 500: Server Errors

                - The HTTP 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
                - 500 — Internal Server Error;
                - 502 — Bad Gateway;
                - 503 — Service Unavailable;
                - 504 — Gateway Timeout.

6.  Difference between HTTP and HTTPS.

    - HTTPS is HTTP with encryption and verification. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses, and to digitally sign those requests and responses. As a result, HTTPS is far more secure than HTTP

7.  What are JWT tokens ?
    - JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
