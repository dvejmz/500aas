const fs = require('fs');

exports.handler = async () => {
    const htmlBody = fs.readFileSync('./500.html').toString();
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

