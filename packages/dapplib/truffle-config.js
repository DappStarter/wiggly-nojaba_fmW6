require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name rescue sad equip give another army giggle'; 
let testAccounts = [
"0x940b8663b3441dd5d10fa28103ecb46cc5620deb6fd8a4ab949c5a370def7b32",
"0x8f34605a09e83fb35c84f35a2ec55a185c47e478bedea1a188398af6419c6fb3",
"0x13762b1902ba1a9af86201a0dbf6025445a92c0d736c4ec84275e25f3f6d58ec",
"0x0855fa526668c5454f9b64e6ea9dcbd3551f6b23b7ca3a657709635fe137a2d8",
"0x826897164d550eaf78353d1577fdbae5214d659afa5f8394ea07d7e698e14666",
"0x38d60c36b1b85dcad2a5a5520603c7c439f6e7f4afcab5db34a675c547bf9b8a",
"0x363aa20a9df14599546490476069ff4eeff9af1ca7b07eaea041e70b76668785",
"0x518487f6cbfb887296aae8b89125f6cb5241e23ad37cbe0cbc9edf5d2d4b1195",
"0x17e42fe9e91ba59104fde9c31cc40ea6588ac989833d61fc1b98dcf035364de0",
"0x8f43846c0045adbea1a401283aeb3068f5bc64790ca380f8af114cfaf42ea8d2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


