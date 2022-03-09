let blogs = [ ] 


function addBlog() {

    let name = document.getElementById('input-name').value;
    let start = document.getElementById('input-Start-Date').value;
    let end = document.getElementById('input-End-Date').value;
    let message = document.getElementById('input-message').value;
    let node  = document.getElementById('node-js');
    let next = document.getElementById('next-js');
    let react = document.getElementById('react-js');
    let script = document.getElementById('type-script');
    let image = document.getElementById('input-blog-image').files[0];
    let nodeImage = node.checked == true ? node.value : null
    let nextImage = next.checked == true ? next.value : null
    let reactImage = react.checked == true ? react.value : null
    let scriptImage = script.checked == true ? script.value : null
    image = URL.createObjectURL(image)
    let startFull = new Date(start)
    let endFull = new Date(end)

    let blog = {
        name: name,
        start: startFull,
        end: endFull,
        message: message,
        node: nodeImage != null ? ` <img src=${nodeImage} width="30px" style= "margin-right:30px">` : "",
        next: nextImage != null ? ` <img src=${nextImage}  width="30px" style= "margin-right:30px">` : "",
        react: reactImage != null ? ` <img src=${reactImage}  width="30px" style= "margin-right:30px">` : "",
        script: scriptImage != null ? ` <img src=${scriptImage}  width="30px" style="margin-right:30px">` : "",
        image: image,

    }
    blogs.push(blog)
   renderBlog()
}

function renderBlog() {
    let container = document.getElementById('contents')
    container.innerHTML= ` <div class="blog-list-item">
    <div class="blog-image">
        <img src="./Assets/jak-removebg-preview.png" alt="" />
    </div>
    <div class="blog-content">
        <h3>
            <a href="blog-detail.html" target="_blank">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a >
        </h3>
            <div class="detail-blog-content">
            <span>3 bulan</span>
            </div>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex neque voluptates, alias debitis modi ullam
                atque hic adipisci dignissimos nobis architecto laudantium dolor repellat quam nulla est quaerat
                mollitia fugit.
                Provident, qui pariatur culpa tempore natus in explicabo vitae at, ullam eum quo quam fugit. Natus
                doloremque quo laudantium doloribus reprehenderit tempora, earum sed quis! Temporibus at delectus
                dolores voluptate?
                </p>
                <div class="logo">
                    <img src="./Assets/plstore.png" style="width: 25px; margin-right: 30px;">
                    <img src="./Assets/android.png" style="width: 25px; margin-right: 30px;">
                    <img src="./Assets/java.png" style="width: 25px;">

                </div>
                <div class="btn-group">
                    <a href="#" class="btn-edit">Edit </a>
                    <a href="#" class="btn-post">Delete </a>
                </div>
    </div>
    </div> `
    for(let i = 0; i < blogs.length; i++ ) {
    container.innerHTML +=` <div class="blog-list-item">
        <div class="blog-image">
        <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
            <h3>
            <a href="blog-detail.html" target="_blank" >${blogs[i].name}</a >
            </h3>
                <div class="detail-blog-content">
                <span>${ getTimeDistance(blogs[i].start, blogs[i].end)}</span>
                </div>
                <p> ${blogs[i].message }</p>
                    <div class="logo">
                        ${blogs[i].node}
                        ${blogs[i].next}
                        ${blogs[i].react}
                        ${blogs[i].script}
                    </div>
                    <div class="btn-group">
                        <a href="#" class="btn-edit">Edit </a>
                        <a href="#" class="btn-post">Delete </a>
                    </div>
    </div>
    </div> `


     
}
}

  function getTimeDistance(mulai, akhir) {


    let distance = akhir - mulai

    let yearDistance = Math.floor(distance / (12 * 4 * 7 * 24 * 60 * 60 * 1000))

    if (yearDistance != 0) {
        return `${yearDistance} year`
    } else {
        let monthDistance = Math.floor(distance / (4 * 7 * 24 * 60 * 60 * 1000))
        if (monthDistance != 0) {
            return `${monthDistance} month`
        } else {
            let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
            if (weekDistance != 0) {
                return `${weekDistance} week`
            } else {
                let dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000))

                return `${dayDistance} day`
            }
        }
    }



}

