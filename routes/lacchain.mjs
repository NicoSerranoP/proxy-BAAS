export default function (app, web3, fetch, lacchain){
    app.post('/', async (request, response) => {
        let reqBody = request.body;
        let reqBodyParams = reqBody.params;
        for (let i = 0, ni=reqBodyParams.length; i < ni; i++) {
            const byteCode = reqBodyParams[i];
            const newByteCode = lacchain.addValues(byteCode, web3);
            reqBody.params[i] = newByteCode;
        }
        // redirect with new byte code
        const result = await fetch(process.env.NODE_URL, {
            method: request.method,
            headers: { 'Content-Type': 'application/json' }, //TODO: add Auth token
            body: JSON.stringify(reqBody)
        }).then(_res => _res.json());
        console.log(result);
        response.send(result);
    });
}