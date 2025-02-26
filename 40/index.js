//cloth shop
// greet
//show menu
//how many do you want 
//price multiply
//bill


//cloth shop admin
//login
//add menu with price
//home 

//layering
//are you customer or admin

// alert("you are admin or user");


let role = prompt("Are you customer or admin?").toLowerCase();
alert(`You are ${role}`);

if (!localStorage.getItem("menu")) {
    localStorage.setItem("menu", JSON.stringify([]));
}
let menu = JSON.parse(localStorage.getItem("menu"));

if (role === "admin") {
    let password = prompt("Enter admin password:");
    if (password === "admin123") {
        let action = prompt("Do you want to add a new item? (yes/no)").toLowerCase();
        if (action === "yes") {
            let item = prompt("Enter cloth name:");
            let price = parseFloat(prompt("Enter price:")).toFixed(2);
            menu.push({ name: item, price: price });
            localStorage.setItem("menu", JSON.stringify(menu));
            alert(`${item} added to the menu.`);
        } else {
            alert("Returning to home page.");
        }
    } else {
        alert("Incorrect password. Exiting admin mode.");
    }
}

else if (role === "customer") {
    alert("Welcome to our Cloth Shop!");

    let menuList = "Menu:\n";
    menu.forEach((item, index) => {
        menuList += `${index + 1}. ${item.name} - ₹${item.price}\n`;
    });
    alert(menuList);


    let choice = parseInt(prompt("Enter the number of the item you want to buy:")) - 1;
    if (menu[choice]) {
        let quantity = parseInt(prompt("How many do you want?"));
        let total = menu[choice].price * quantity;
        alert(`You ordered ${quantity} ${menu[choice].name}(s).\nTotal price: ₹${total.toFixed(2)}`);
    } else {
        alert("Invalid choice.");
    }
}

else {
    alert("Invalid role entered.");
}
