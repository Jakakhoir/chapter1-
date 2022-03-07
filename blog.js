let blogs = [ ] 


function addBlog() {

    let name = document.getElementById('input-name').value;
    let start = document.getElementById('input-Start-Date').value;
    let end = document.getElementById('input-End-Date').value;
    let message = document.getElementById('input-message').value;
    let node  = document.getElementById('node-js');
    let next = document.getElementById('next-js').value;
    let react = document.getElementById('react-js').value;
    let script = document.getElementById('type-script').value;
    let image = document.getElementById('input-blog-image').files[0];
    let nodeImage = node.checked == true ? node.value : null
    image = URL.createObjectURL(image)
    let blog = {
        name: name,
        start: start,
        end: end,
        message: message,
        node: nodeImage != null ? ` <img src=${nodeImage}>` : "",
        
        next: next,
        react: react,
        script: script,
        image: image,
        author: 'jack',
        postedAt: new Date()

    }
    blogs.push(blog)

   renderBlog()
}

function renderBlog() {
    let container = document.getElementById('contents')
    container.innerHTML= ''
for(let i = 0; i < blogs.length; i++ ) {
    container.innerHTML += `  <div class="blog-list-item">
    <div class="blog-image">
        <img src="${blogs[i].image}" alt="" />
    </div>
    <div class="blog-content">
        <h3>
            <a href="blog-detail.html" target="_blank" >${blogs[i].name}</a >
        </h3>
            <div class="detail-blog-content">
                ${blogs[i].postedAt} | ${blogs[i].author}
            </div>
                <p> ${blogs[i].message }</p>
                <div class="logo" >
                ${blogs[i].node}

            </div>
                <div class="btn-group">
                    <a href="#" class="btn-edit">Edit Post</a>
                    <a href="#" class="btn-post">Delete Blog</a>
                </div>
    </div>
</div>
    `
console.log(renderBlog)

     
    }
}


