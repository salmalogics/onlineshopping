const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'DIAPER',
        "price": '49.00'
    },
    2: {
        "name": 'DIAPER BAG',
        "price": '249.00'
    },
    3: {
        "name": 'NEWBORN SET',
        "price": '4500.00'
    },
    4: {
        "name": 'BABY BLANKET',
        "price": '260.00'
    },
    5: {
        "name": 'NEW BORN BABY GIFT',
        "price": '4500.00'
    },
    6: {
        "name": 'REUSABLE CLOTH DIAPERS',
        "price": '449.00'
    },
    7: {
        "name": 'BABY BATH TUB',
        "price": '1899.00'
    },
    8: {
        "name": 'JUMPSUIT FOR NEWBOARN BABY',
        "price": '599.00'
    },
    9: {
        "name": 'COTTEN FROCK',
        "price": '699.00'
    },
    10: {
        "name": 'BABYS POLYSTER SOFT MATTRESS WITH MOSQUITO NET',
        "price": '359.00'
    },
    
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">${products[x].price}</span>`
    const result = products[x].name + " " + span;
    if (item.includes(products[x]) === false) item.push(result);
    bill.push(products[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total Bill is ${total} ` ;
    innerHTML = `Thank you ...keep shopping..`;
}