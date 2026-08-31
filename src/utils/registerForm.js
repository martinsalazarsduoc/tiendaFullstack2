
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