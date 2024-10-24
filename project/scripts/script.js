const izakFiles = [
    {
        id: 1,
        type: "img",
        url: 
        "images/img1.webp"

    },
    {
        id: 2,
        type: "img",
        url: 
        "images/img2.webp"

    },
    {
        id: 3,
        type: "img",
        url: 
        "images/img3.webp"

    },
    {
        id: 4,
        type: "img",
        url: 
        "images/img4.webp"

    },
    {
        id: 5,
        type: "img",
        url: 
        "images/img5.webp"

    },
    {
        id: 6,
        type: "img",
        url: 
        "images/img6.webp"

    },
    {
        id: 7,
        type: "img",
        url: 
        "images/img7.webp"

    },
    {
        id: 8,
        type: "img",
        url: 
        "images/img8.webp"

    },
    {
        id: 9,
        type: "img",
        url: 
        "images/img9.webp"

    },
    {
        id: 10,
        type: "img",
        url: 
        "images/img10.webp"

    }
]

const postWrapper = document.querySelector(".post-wrapper");

izakFiles.forEach((post) => {

    const postContainer = document.createElement("div");
    const postImg = document.createElement("img");

    postImg.setAttribute("src", post.url);

    postContainer.appendChild(postImg);
    postWrapper.appendChild(postContainer);


})