const http500aas = require('./index');

const { handler } = http500aas;

async function test() {
    const testAssertionMessage = "Site returns HTTP 500 error";
    const response = await handler();
    if (response.status != 500) {
        console.log(`[FAIL] ${testAssertionMessage}`);
        process.exit(1);
    }

    console.log(`[OK] ${testAssertionMessage}`);
    process.exit(0);
}

test();
