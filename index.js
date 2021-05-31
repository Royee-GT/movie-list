
//測試串接 Index API
// axios
//   .get(`https://movie-list.alphacamp.io/api/v1/movies/`)
//   .then((response) => {
//     console.log(response)
//     console.log(response.data)
//     console.log(response.data.results)
//   })
//   .catch((err) => console.log(err))

//宣告變數
//BASE_URL、INDEX_URL 這兩個常數組合在一起就是完整的 Index API URL：https://movie-list.alphacamp.io/api/v1/movies。我們將它拆成兩段，以便之後串 Show API 或圖片檔案時，能重覆使用 BASE_URL，而 POSTER_URL 將被用來處理圖片檔案。

// 如果之後要更動 API URL，我們可以直接修改這裡的常數，而不用到程式碼裡一一尋找。在寫程式的時候，要注意怎樣的寫法會是未來比較易於維護的。

const BASE_URL = 'https://movie-list.alphacamp.io'
const INDEX_URL = BASE_URL + '/api/v1/movies/'
const POSTER_URL = BASE_URL + '/posters/'
const movies = []

const dataPanel = document.querySelector('#data-panel')

function renderMovieList(data) {
  let rawHTML = ''
  data.forEach((item) => {
    // title, image
    rawHTML += `<div class="col-sm-3">
    <div class="mb-2">
      <div class="card">
        <img src="${
          POSTER_URL + item.image
        }" class="card-img-top" alt="Movie Poster">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#movie-modal" data-id="${
            item.id
          }">More</button>
          <button class="btn btn-info btn-add-favorite" data-id="${
            item.id
          }">+</button>
        </div>
      </div>
    </div>
  </div>`
  })
  dataPanel.innerHTML = rawHTML
}

axios
  .get(INDEX_URL)
  .then((response) => {
    movies.push(...response.data.results)
    console.log(movies)
    renderMovieList(movies)
  })