const Web3 = require("web3");

async function main() {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    )
  );
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);
  // Creating the transaction object
  const toAddress = "0x539E04652385A048E920FD98503afAf880A00f6C";
  console.log(`Send from ${signer.address} to ${toAddress}`);
  const tx = {
    from: signer.address,
    to: toAddress,
    value: web3.utils.toWei("0.001"),
  };
  // Assigning the right amount of gas
  const gas = await web3.eth.estimateGas(tx);
  console.log(`gas = ${gas}`);
  tx.gas = gas;

  // Assigning the right amount of gasPrice
  const gasPrice = await web3.eth.getGasPrice();
  console.log(`gasPrice = ${gasPrice}`);
  tx.gasPrice = gasPrice;

  // Sending the transaction to the network
  const receipt = await web3.eth
    .sendTransaction(tx)
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(`https://${network}.etherscan.io/tx/${txhash}`);
    });
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);
}

require("dotenv").config();
main();