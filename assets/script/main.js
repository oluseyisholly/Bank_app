//Registration 

let allUsers = [];
const allData = JSON.parse(localStorage.getItem('all_users_data'))
if( allData === null){
    localStorage.setItem("all_users_data", JSON.stringify([]))
}

const currentData = JSON.parse(localStorage.getItem('current_session'))
if( allData === null){
    localStorage.setItem("current_session", JSON.stringify([]))
}



const register_btn = document.getElementById("register");
register_btn?.addEventListener("click",() => {
    const reg_data = {
        namedata :  `${document.getElementById("last_name").value} ${document.getElementById("first_name").value}`,
        userNameData : document.getElementById("email").value,
        passwordData :  document.getElementById("password").value,
        //confirmpasswordData :  document.getElementById("Confirm_password").value, 
        phoneNumberData : document.getElementById("phone_number").value,
        initialDepositData : document.getElementById("initial_deposit").value
    };

    //check if user already exists by email-address/ user-name
    const data = JSON.parse(localStorage.getItem("all_users_data"))
    allUsers = [...data];
    let result = allUsers.filter((object)=>{
        if(object.userNameData === reg_data.userNameData){
            return object;
        }
    })
    console.log(result);
    if(result.length === 0){
        allUsers.push(reg_data);
        allUsers = JSON.stringify(allUsers);
        localStorage.setItem("all_users_data", allUsers);
        location.assign("login.html")
    } 
    else{
        alert("user Already Exists")
    }
    return;
    
})



//login Page
const loginBtn = document.getElementById("login")

loginBtn?.addEventListener("click", () => {
    login_data = {
        userNameData: document.getElementById("username").value,
        passwordData : document.getElementById("password").value
    }
    const data = JSON.parse(localStorage.getItem("all_users_data"))
    allUsers = [...data]
    let result = allUsers.filter((object) => {
        if(object.userNameData === login_data.userNameData 
        && object.passwordData === login_data.passwordData){
            return object;
        }
    })
    if(result.length !== 0){
        let currentUser =  result
        localStorage.setItem("current_session", JSON.stringify(currentUser));
        location.assign("./dashboard.html");
    }
    else{
        alert("Email invalid or password isn't correct");
    }
})


