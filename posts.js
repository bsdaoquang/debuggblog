const posts = [
  {
    title: "fkjashfkjsafhksaj",
    description: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to",
    tag: 'Technology',
    category: 'Sponsored',
    imgUrl: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    author: 'Denis 2',
    authorImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    createdAt: Date.now()
  },
  {
    title: "You're seeing this ad because your activity meets the intended audience of our site.",
    description: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to",
    tag: 'Technology',
    category: 'Sponsored',
    imgUrl: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    author: 'Denis',
    authorImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    createdAt: Date.now()
  },
  {
    title: "You're seeing this ad because your activity meets the intended audience of our site.",
    description: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to",
    tag: 'Technology',
    category: 'Sponsored',
    imgUrl: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    author: 'Denis',
    authorImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    createdAt: Date.now()
  },
  {
    title: "You're seeing this ad because your activity meets the intended audience of our site.",
    description: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to",
    tag: 'Technology',
    category: 'Sponsored',
    imgUrl: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    author: 'Denis',
    authorImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    createdAt: Date.now()
  },
  {
    title: "You're seeing this ad because your activity meets the intended audience of our site.",
    description: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to",
    tag: 'Technology',
    category: 'Sponsored',
    imgUrl: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    author: 'Denis',
    authorImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    createdAt: Date.now()
  },
  {
    title: "You're seeing this ad because your activity meets the intended audience of our site.",
    description: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to",
    tag: 'Technology',
    category: 'Sponsored',
    imgUrl: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    author: 'Denis',
    authorImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    createdAt: Date.now()
  },
  {
    title: "You're seeing this ad because your activity meets the intended audience of our site.",
    description: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to",
    tag: 'Technology',
    category: 'Sponsored',
    imgUrl: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    author: 'Denis',
    authorImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    createdAt: Date.now()
  },
  {
    title: "You're seeing this ad because your activity meets the intended audience of our site.",
    description: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to",
    tag: 'Technology',
    category: 'Sponsored',
    imgUrl: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    author: 'Denis',
    authorImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    createdAt: Date.now()
  },
  {
    title: "You're seeing this ad because your activity meets the intended audience of our site.",
    description: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to",
    tag: 'Technology',
    category: 'Sponsored',
    imgUrl: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    author: 'Denis',
    authorImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
    createdAt: Date.now()
  },
]



const handleAddPost = () =>
{
  posts.forEach(item =>
  {
    const newPost = `

    <div class="card">
      <!-- Card img -->
      <div class="position-relative">
        <img class="card-img" src="${item.imgUrl}"
          width="486px;" height="473px;" alt="Card image">
        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
          <!-- Card overlay bottom -->
          <div class="w-100 mt-auto">
            <!-- Card category -->
            <a href="#" class="badge text-bg-warning mb-2"><i
                class="fas fa-circle me-2 small fw-bold"></i>${item.tag}</a>
          </div>
        </div>
      </div>
      <div class="card-body p-4 ">
        <!-- Sponsored Post -->
        <a href="#!" class="mb-0 text-body small" tabindex="0" role="button" data-bs-container="body"
          data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top"
          data-bs-content="${item.title}">
          <i class="bi bi-info-circle ps-1"></i> ${item.category}
        </a>
        <h4 class="card-title mt-2"><a href="#" class="btn-link text-reset fw-bold">12 worst types of
            business accounts you follow on Twitter</a></h4>
        <p class="card-text">${item.description}</p>
        <!-- Card info -->
        <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
          <li class="nav-item">
            <div class="nav-link">
              <div class="d-flex align-items-center position-relative">
                <div class="avatar avatar-xs">
                  <img class="avatar-img rounded-circle" src="${item.authorImg}" alt="avatar">
                </div>
                <span class="ms-3">by <a href="#"
                    class="stretched-link text-reset btn-link">${item.author}</a></span>
              </div>
            </div>
          </li>
          <li class="nav-item">Jan 22, 2022</li>
        </ul>
      </div>
    </div>
    
    `

    const container = document.createElement('div')
    container.setAttribute('class', 'col-sm-6 mt-4')
    container.innerHTML = newPost

    document.getElementById('post-container').appendChild(container)
  })
}

handleAddPost()