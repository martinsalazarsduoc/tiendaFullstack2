const emailValido = (email) => /@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(email)

const handleForm = (e, newUser) => {
    e.preventDefault()
    console.log({ newUser })
    const user = {
        name: newUser.name,
        phone: newUser.phone,
        email: newUser.email,
        address: `${newUser.comuna}, ${newUser.region}`,
        password: newUser.password
    }
    const userList = getUserList()
    userList.push(user)

    window.localStorage.setItem("userList", JSON.stringify(userList))
    renderUserTable()
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
        if (!emailValido(newUser.email)) {
            e.preventDefault()
            alert("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com")
            return
        }
        if (newUser.password !== newUser.repeatPassword) {
            e.preventDefault()
            alert("Las contraseñas no coinciden")
            return
        }
        handleForm(e, newUser)
    })
    renderUserTable()


})