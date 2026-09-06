const renderUserTable = () => {
    const userTable = document.getElementById("user-table")
    const userList = getUserList()
    userTable.innerHTML = ""
    if (userList.length === 0) {
        userTable.innerHTML = `<tr>
                                    <td class="fs-7">No hay usuarios registrados.</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>`
    }
    userList.forEach((user, i) => {
        userTable.innerHTML += `<tr class="${i + 1 !== userList.length ? "border-bottom" : ""}">
                                    <td class="fs-7">${user.name}</td>
                                    <td class="fs-7">${user.phone}</td>
                                    <td class="fs-7">${user.address}</td>
                                    <td class="fs-7">${user.email}</td>
                                </tr>`
    })
}