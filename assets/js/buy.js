const carbonAddress = "0xbf79e16872fad92c16810ddd2a7b9b6858c7b756";
const toAddress = "0x7D8cB7da26E749F647a81b182073853c9E79692A"; // replace the address with your address in base16 format
const price = 10;
const amount = 10 ** 8 * price; // 10 $CARB

const buyWith = async ({contractAddress, amount, toAddress}) => {

    console.log({contractAddress, amount, toAddress});

    if (!window.zilPay) {
        return alert("Please make sure have installed zilPay wallet");
    }
    
    if (!zilPay.wallet.isConnect) {
      await zilPay.wallet.connect();
    }

    const {contracts, utils} = window.zilPay;
    const contract = contracts.at(contractAddress);
    const gasPrice = utils.units.toQa('1000', utils.units.Units.Li);


// Sending to DS
    const tx = await contract.call(
        'Transfer',
        [
            {
                vname: 'to',
                type: 'ByStr20',
                value: toAddress
            },
            {
                vname: 'amount',
                type: 'Uint128',
                value: amount.toString()
            }
        ],
        {
            amount: 0,
            gasPrice,
            gasLimit: utils.Long.fromNumber(8000)
        },
        true
    );

}

document.getElementById("buy-with-carb").addEventListener ("click", async () => await buyWith({contractAddress:carbonAddress, amount, toAddress }), false);