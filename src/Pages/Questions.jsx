import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1 className='text-center mb-10 mt-10 text-red-400 text-3xl font-bold'>This is Question Answering Page</h1>
            <div className='m-24 border rounded p-10'>
                <h1 className='text-xl font-bold text-center text-red-400'>What is an access token and refresh token?</h1>
                <p><span className='text-xl font-bold text-orange-400'>Access Token: </span>An access token is a credential that represents the authorization granted to a client to access protected resources on behalf of a user. It contains information such as the user's identity and the permissions associated with their account. Access tokens are typically short-lived and have an expiration time. <br />
                    <span className='text-xl font-bold text-orange-400'>Refresh Token: </span>A refresh token is a long-lived credential that is used to obtain a new access token after the previous one expires. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to re-enter their credentials
                </p>
                <br />
                <h1 className='text-xl font-bold text-center text-red-400'>How do they work and where should we store them on the client-side?</h1>
                <p><span className='text-xl font-bold text-orange-400'>HTTP-only Cookies: </span>Store tokens as HTTP-only cookies, which can only be accessed by the server. This approach provides some protection against cross-site scripting attacks. <br />
                    <span className='text-xl font-bold text-orange-400'>Local Storage: </span>Store tokens in the browser's local storage or session storage. However, this approach is vulnerable to cross-site scripting attacks and should be used with caution. <br />
                    <span className='text-xl font-bold text-orange-400'>In-Memory Storage:</span>Store tokens in memory within the client application. This approach offers better security since the tokens are not persisted on disk. However, tokens stored in memory are lost when the application is closed or refreshed.
                </p>
            </div>


            {/* second question  */}

            <div className='m-24 border rounded p-10'>
                <h1 className='text-xl font-bold text-center text-red-400'>Compare SQL and NoSQL databases?</h1>
                <h1 className=' font-bold text-red-400'>SQL Databases:</h1>
                <p><span className='text-xl font-bold text-orange-400'>Structure: </span>SQL databases are based on a structured data model, where data is organized into tables with predefined schemas and relationships.<br />
                    <span className='text-xl font-bold text-orange-400'>Structure: </span>SQL databases are based on a structured data model, where data is organized into tables with predefined schemas and relationships.<br />
                    <span className='text-xl font-bold text-orange-400'>Schema and Data Integrity: </span>SQL databases enforce a rigid schema, meaning the structure of the data must be defined before storing it.
                    <br />
                    <span className='text-xl font-bold text-orange-400'>Query Language: </span>SQL databases use the Structured Query Language for defining and manipulating the data.
                    <br />
                </p>
                <h1 className=' font-bold mt-5 text-red-400'>NO SQL Databases:</h1>
                <p><span className='text-xl font-bold text-orange-400'>Flexibility: </span>NoSQL databases provide a flexible schema model, allowing for dynamic and unstructured data.<br />
                    <span className='text-xl font-bold text-orange-400'>Data Models: </span>NoSQL databases support various data models, such as key-value, document, columnar, and graph.<br />
                    <span className='text-xl font-bold text-orange-400'>Performance: </span>NoSQL databases are optimized for high-speed data access and can deliver excellent performance for specific use cases.
                    <br />
                    <span className='text-xl font-bold text-orange-400'>Scalability: </span>NoSQL databases are designed for horizontal scalability, making it easier to distribute data across multiple servers or clusters.
                    <br />
                </p>
            </div>

            {/* third qus */}

            <div className='m-24 border rounded p-10'>
                <h1 className='text-xl font-bold text-center text-red-400'>What is express js and Nest JS?</h1>
                <h1 className=' font-bold text-orange-400'>Express.js:</h1>
                <p>Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and tools to build web applications and APIs using JavaScript. Express.js is known for its simplicity, lightweight nature, and its focus on being unopinionated, allowing developers to have more control over their application's architecture and components.
                </p>
                <h1 className=' font-bold mt-5 text-orange-400'>NestJS:</h1>
                <p>NestJS emphasizes the use of decorators, dependency injection, and a module-based approach to create scalable and maintainable applications. It offers a powerful command-line interface  for generating modules, controllers, services, and other components, which aids in rapid development.
                </p>
            </div>

            {/* fourth qus */}
            <div className='m-24 border rounded p-10'>
                <h1 className='text-xl font-bold text-center text-red-400'>What is MongoDB aggregate and how does it work ?</h1>
                <p>
                    In MongoDB, the aggregate function is used to perform advanced data aggregation operations on collections. It allows you to process and transform data, perform calculations, group documents, and apply various operations to obtain aggregated results. <br />
                    <span className='text-xl font-bold mt-3 mb-2 text-red-400'>Here's a brief explanation of some commonly used stages in the MongoDB aggregate framework:</span><br />
                    <span className=' font-bold text-orange-400'>$match: </span> Filters the documents in the collection based on specified conditions, similar to the regular find operation. It uses MongoDB's query syntax to match documents.
                    <br />
                    <span className='font-bold text-orange-400'>$sort: </span>Sorts the documents based on specified fields in ascending or descending order. Multiple fields can be used for sorting.
                    <br />
                    <span className='font-bold text-orange-400'>$group: </span>Groups documents based on a specified key or set of keys and allows you to perform aggregate functions on grouped data. <br />
                    <h1>etc.</h1>
                </p>
            </div>

        </div>
    );
};

export default Questions;