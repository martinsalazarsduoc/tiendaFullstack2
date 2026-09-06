const handleForm = (e, user) => {
    e.preventDefault()
    const userList = getUserList()
    const userExist = userList.find(currentUser => currentUser.email === user.email)
    if (!userExist || userExist.password !== user.password) {
        alert("Credenciales invalidas.")
        return
    }
    location.pathname = "/src/pages/admin/dashboard.html"
}

window.document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-register")
    if (!form) return

    let user

    form.addEventListener('input', (e) => {
        user = Object.fromEntries(new FormData(form))
    })

    form.addEventListener("submit", (e) => {
        handleForm(e, user)
    })
})