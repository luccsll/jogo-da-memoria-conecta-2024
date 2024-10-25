import searchUser from "./components/searchUser.js"

$(document).ready(function () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    var id = urlParams.get('id')

    var user = searchUser(id)
    console.log(user)
})