function addValues(byteCode, web3) {
    const values = web3.eth.abi.encodeParameters(
        ["address","uint256"],
        [process.env.NODE_ADDRESS, process.env.EXPIRATION_TIME]
    );
    return byteCode + values.substr(2);
}

export {addValues};