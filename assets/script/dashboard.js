 let allUsers = [];
 let currentUser;


 
 const dashboard = () => {
    //current balance
    let currentBalance = document.getElementById("current_balance");
    currentUser = JSON.parse(localStorage.getItem("current_session"));
    const balance = currentUser[0].initialDepositData;
    currentBalance.innerHTML = balance;

    //profile display
    let displayName = document.getElementById("display_Name");
    const name = currentUser[0].namedata;
    displayName.innerHTML = name;

 }

const personaInfo = () => {
}
 dashboard();

 const deposit = document.getElementById("deposit");

 deposit.addEventListener("click", () => {
    currentUser =  JSON.parse(localStorage.getItem("current_session"));
    allUsers = JSON.parse(localStorage.getItem("all_users_data"));
    let index = allUsers.findIndex((object) => {
        if(object.userNameData === currentUser[0].userNameData){
            return true;
        }
    });
    let depositInput = document.getElementById("deposit_input").value;
    depositInput = parseFloat(depositInput);
    console.log(depositInput);  
    let balance = parseFloat(currentUser[0].initialDepositData);
    balance += depositInput;
    currentUser[0].initialDepositData = balance;
    allUsers[index].initialDepositData = balance;
    localStorage.setItem("all_users_data", JSON.stringify(allUsers));
    localStorage.setItem("current_session", JSON.stringify(currentUser));
    location.assign("./dashboard.html");  
});

const withdraw = document.getElementById("withdraw");

withdraw.addEventListener("click", () => {
    currentUser = JSON.parse(localStorage.getItem("current_session"));
    allUsers = JSON.parse(localStorage.getItem("all_users_data"))
    let index = allUsers.findIndex((object) => {
        if(object.userNameData === currentUser[0].userNameData){
            return true;
        }
    });
    let withdrawInput = document.getElementById("withdraw_input").value;
    withdrawInput = parseFloat(withdrawInput);
    let balance = parseFloat(currentUser[0].initialDepositData);
    if(withdrawInput < balance){
        balance -= withdrawInput;
        currentUser[0].initialDepositData = balance;
        allUsers[index].initialDepositData = balance;
        localStorage.setItem("all_users_data", JSON.stringify(allUsers));
        localStorage.setItem("current_session", JSON.stringify(currentUser));
        location.assign("./dashboard.html"); 
    }
    else{
        alert("insufficient fund");
    }
});
