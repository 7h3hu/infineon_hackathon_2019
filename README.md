# BeerDentity 🍺

A spirituous blockchain project using ZKPs created at the Infineon hackathon 2019.

## Usecase

The Infineon hardware wallet smart card is used to store identity tokens using zero knowledge proofs in order to perform age verification without revealing any personal data.

![](https://user-images.githubusercontent.com/6087393/55082333-c8c7ba00-50a1-11e9-9308-457940e13a37.png)

An user needs to go to a local authority with his hardware wallet smart card. The authority created a proof that the person is older than 18 years and issues an `Identity Token` to the users wallet.

![](https://user-images.githubusercontent.com/6087393/55082340-cb2a1400-50a1-11e9-8194-3cf828573357.png)

The user can then use the hardware wallet smart card at various locations to proof he is old enough to use certain services without revealing his real age or birthday to the 3rd party.

## Implementation

### Hardware Wallet Smart Card with NFC Interface

The `Blockchain Security 2Go Starter Kit` was provided by Infineon (https://www.infineon.com/blockchain) including libraries to access the wallet functionality (https://github.com/Infineon/blockchain).

The smart cards are used to store `Identity Tokens` on the Ethereum blockchain which essentially contain a reference to the (zero knowledge) proof stored on the `IPFS` network.

### Ethereum Smart Contract

An Ethereum smart contract, written in `Solidity` using the `Truffle` framework, is used to issue so-called non-fungible `Identity Tokens` (ERC-721). Those tokens are not transferable and each wallet can only contain one of them (as it represents an identity).

### Zero Knowledge Proof

A simple algorithmic circuit is used to create zero knowledge proofs using `snarkjs` (https://github.com/iden3/snarkjs). The resulting `proof.json` is uploaded to IPFS and a reference to it is stored on the Ethereum blockchain using an `Identity Tokens`.

### Frontend Application

We created a Python frontend application using Flask. The script polls the NFC reader to detect new card wallets. As soon as a wallet is detected, we read the wallet address and check the Ethereum blockchain for an identitiy issued to this wallet. If an `Identity Token` is found, the zero knowledge proof is read from IPFS and verified. Upon success/failure the frontend shows a corresponding result.

## Behind the Scenes

Fancy math 🤓 | How it somewhat works
------------ | -------------
![](https://user-images.githubusercontent.com/6087393/55083568-0b8a9180-50a4-11e9-8cdd-16e4fe6a6535.jpg) | ![](https://user-images.githubusercontent.com/6087393/55083560-075e7400-50a4-11e9-9c50-b47d440c48d4.jpg)

![](https://user-images.githubusercontent.com/6087393/55137552-95cd0700-5131-11e9-8fb4-ed39aee6df46.jpg)

## Licence

This project is licensed under the MIT license. For more information see LICENSE.md.

```
The MIT License

Copyright (c) 2019 BeerDentity

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
