exports.handler = async (event, context) => {
    const htmlBody = `
<!doctype html>
<html>
    <head>
        <title>500 - Internal Server Error</title>
    </head>
    <body>
        <h1>HTTP 500</h1>
        <h2>Internal Server Error</h2>
    </body>
</html>
`;
    const response = {
        status: '500',
        statusDescription: 'Internal Server Error',
        headers: {
            vary: [{
                key: 'Vary',
                value: '*',
            }],
            'last-modified': [{
                key: 'Last-Modified',
                value: '2017-01-13',
            }],
            'content-type': [{
               key: 'Content-Type',
               value: 'text/html',
            }],
        },
        body: htmlBody,
    };

    return response;
};

