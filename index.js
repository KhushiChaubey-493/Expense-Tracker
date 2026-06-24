let transactionType = "credit";

const formatCurrency = (value) => `₹ ${value}`;

const state = {
    earning: 0,
    expense: 0,
    net: 0,
    transactions: [
        {
            id: 4,
            text: "Example",
            amount: 10,
            type: "credit",
        },
    ],
};

let isUpdate = false;
let tid;

const transactionFormEl = document.getElementById("transactionForm");


document.getElementById("earnBtn").addEventListener("click", () => {
    transactionType = "credit";
});

document.getElementById("expBtn").addEventListener("click", () => {
    transactionType = "debit";
});

const renderTransactions = () => {
    const transactionContainerEl = document.querySelector(".transactions");
    const netAmountEl = document.getElementById("netAmount");
    const earningEl = document.getElementById("earning");
    const expenseEl = document.getElementById("expense");

    const transactions = state.transactions;

    let earning = 0;
    let expense = 0;

    transactionContainerEl.innerHTML = "";

    transactions.forEach(({ id, text, amount, type }) => {
        const isCredit = type === "credit";
        const sign = isCredit ? "+" : "-";

        earning += isCredit ? amount : 0;
        expense += !isCredit ? amount : 0;

        const transactionEl = `
        <div class="transaction" id="${id}">
            <div class="content" onclick="showEdit(${id})">
                <div class="left">
                    <p>${text}</p>
                    <p>${sign} ₹ ${amount}</p>
                </div>
                <div class="status ${isCredit ? "credit" : "debit"}">
                    ${isCredit ? "C" : "D"}
                </div>
            </div>
            <div class="lower">
                <div class="icon" onclick="handleUpdate(${id})">
                    <img src="images/edit.svg" />
                </div>
                <div class="icon" onclick="handleDelete(${id})">
                    <img src="images/trash.svg" />
                </div>
            </div>
        </div>`;

        transactionContainerEl.insertAdjacentHTML("afterbegin", transactionEl);
    });

    const net = earning - expense;

    netAmountEl.innerHTML = formatCurrency(net);
    earningEl.innerHTML = formatCurrency(earning);
    expenseEl.innerHTML = formatCurrency(expense);
};

const addTransaction = (e) => {
    e.preventDefault();

    const formData = new FormData(transactionFormEl);
    const text = formData.get("text");
    const amount = +formData.get("amount");

    if (!text || amount <= 0) return;

    const transaction = {
        id: isUpdate ? tid : Date.now(),
        text,
        amount,
        type: transactionType,
    };

    if (isUpdate) {
        const index = state.transactions.findIndex(t => t.id === tid);
        state.transactions[index] = transaction;
        isUpdate = false;
        tid = null;
    } else {
        state.transactions.push(transaction);
    }

    renderTransactions();
    transactionFormEl.reset();
};

const showEdit = (id) => {
    document.getElementById(id)
        .querySelector(".lower")
        .classList.toggle("showTransaction");
};

const handleUpdate = (id) => {
    const { text, amount } = state.transactions.find(t => t.id === id);
    document.getElementById("text").value = text;
    document.getElementById("amount").value = amount;
    tid = id;
    isUpdate = true;
};

const handleDelete = (id) => {
    state.transactions = state.transactions.filter(t => t.id !== id);
    renderTransactions();
};

renderTransactions();
transactionFormEl.addEventListener("submit", addTransaction);
