require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan release noise concert grace nature slot giggle'; 
let testAccounts = [
"0x439085ae7a8caa5ee5d9d65bc96429e5c03aeed05927a04c34615fc090e6917a",
"0x2ec3ec57f6fef894265057bc76435eff299f28141f77dd596bc04609cf82cea9",
"0x75db79a212dbfec9b48e4decab90fd209ec162a8b7f82fd3c2247363758506cd",
"0xc8c90b410046db164c438c3846cc334387c1f26cdd22b8ed2dfc8b0be7bdef14",
"0x43d407a0424b1a1a4c01e14ac20f6574207d965e98da2196a92740629dd3c10e",
"0x42236e475a8f3a891ef49ef9b5bafdff779f3529a85cb976952ad08af31d44cc",
"0xd6960468357e6501e781ca5c2270ae825ba85b5c3bbe4a66e20529f956815109",
"0x4e2f9e017706340a9c345eab7e9a90ad9f1698dec20d85b530a7ae740e97b58e",
"0x5d4bb9a5973df974b1f778717fc1a251e7c66155ce73b7c253d235ab9889d3a6",
"0xb2052026974816e77b775f3230030977bb23984ac40612c7b2f4b1356d84b9ac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
