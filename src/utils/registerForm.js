const renderTable = () => {
    const userTable = document.getElementById("user-table")
    const userList = window.localStorage.getItem("userList") ? JSON.parse(window.localStorage.getItem("userList")) : []
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
        userTable.innerHTML += `<tr>
                                    <td class="fs-7">${user.name}</td>
                                    <td class="fs-7">${user.phone}</td>
                                    <td class="fs-7">${user.address}</td>
                                    <td class="fs-7">${user.email}</td>
                                </tr>`
    })
}

const handleForm = (e, newUser) => {
    e.preventDefault()
    console.log({ newUser })
    const user = {
        name: newUser.name,
        phone: newUser.phone,
        email: newUser.email,
        address: `${newUser.comuna}, ${newUser.region}`
    }
    const userList = window.localStorage.getItem("userList") ? JSON.parse(window.localStorage.getItem("userList")) : []
    userList.push(user)

    window.localStorage.setItem("userList", JSON.stringify(userList))
    renderTable()
    // TODO: limpiar formulario despues de guardar
}

window.document.addEventListener('DOMContentLoaded', (e) => {
    const form = document.getElementById("form-register")

    if (!form) return

    let newUser = undefined

    form.addEventListener('input', (e) => {
        newUser = Object.fromEntries(new FormData(form));
    })

    form.addEventListener("submit", (e) => {
        handleForm(e, newUser)
    })


})