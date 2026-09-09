

window.document.addEventListener('DOMContentLoaded', () => {
    const containerNews = document.getElementById("container-noticias")
    const newsTotal = 2
    for (let i = 0; i < newsTotal; i++) {
        const currentNew = `<div class="row text-white bg-secondary p-5 rounded-2 shadow my-4">
            <div class="col-12 col-lg-6 d-flex flex-column justify-content-evenly">
                <p class="fs-4">Caso curioso #${i + 1}</p>
                <p6 class="fs-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora suscipit non
                    assumenda obcaecati eaque quod quae nihil eius numquam quos ut delectus nostrum
                    temporibus
                    illum enim! Maiores, veritatis fugiat!</p6>
                <button class="btn btn-outline-light">Ver <i class="bi bi-arrow-right-short"></i></button>
            </div>
            <div class="col-12 mt-2 col-lg-6">
                <img src="https://placehold.co/1920x1080/webp" class="w-100 h-auto rounded" />
            </div>
        </div>`
        containerNews.innerHTML += currentNew
    }
})