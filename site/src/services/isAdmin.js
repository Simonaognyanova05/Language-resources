export function isAdmin(email) {
    let checkUser = false;
    if (email == "simonaognanova05@gmail.com") {
        checkUser = true;
    } else {
        checkUser = false;
    }

    return checkUser;
};