export function isAdmin(email) {
    let checkUser = false;
    if (email == "varnaeducate@gmail.com") {
        checkUser = true;
    } else {
        checkUser = false;
    }

    return checkUser;
};