window.document.addEventListener('DOMContentLoaded', (e) => {
    const form = document.getElementById("form-register")

    if (!form) return

    form.addEventListener('input', (e) => {
        const datos = Object.fromEntries(new FormData(form));

        console.log({ datos })
    })
})