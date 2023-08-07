// https://api.themoviedb.org/3/movie/{movie_id}
// https://api.themoviedb.org/3/movie/{movie_id}/videos
// https://api.themoviedb.org/3/movie/popular

async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTVlMGQ2ZjQyN2VjMWU3NjYxZTRlMzViYzcwZWRkOSIsInN1YiI6IjYzMGY5NWVhNjA2MjBhMDA3YjRhZTkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VzOQJzANW-pUap_7k6yR7JeQELZ9PZ1_tpbi1Tkye8k'
    }
  };

  try {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', options)
      .then(response => response.json())


    return data
  } catch (error) {
    console.log(error)
  }

}

async function watch(event) {
  const movieId = event.currentTarget.dataset.id

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTVlMGQ2ZjQyN2VjMWU3NjYxZTRlMzViYzcwZWRkOSIsInN1YiI6IjYzMGY5NWVhNjA2MjBhMDA3YjRhZTkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VzOQJzANW-pUap_7k6yR7JeQELZ9PZ1_tpbi1Tkye8k'
    }
  };

  try {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
      .then(response => response.json())

    const { results } = data

    const youtubeVideo = results.find(video => video.type === 'Trailer')

    window.open(`https://youtube.com/watch?v=${youtubeVideo.key}`, 'blank')

  } catch (error) {
    console.log(error)
  }

}

function createMovieLayour({ movieId, title, stars, imagePath, time, year }) {
  return `
  <div class="movie">
          <div class="title">
            <span>${title}</span>

            <div>
              <img src="./assets/icons/Star.svg" alt="">
              
              <span>${stars}</span>
            </div>
          </div>

          <div class="poster">
            <img src="https://image.tmdb.org/t/p/w500/${imagePath}" alt="">
          </div>

          <div class="info">
            <div class="duration">
              <img src="./assets/icons/Clock.svg" alt="">

              <span>${time}</span>
            </div>

            <div class="year">
              <img src="./assets/icons/CalendarBlank.svg" alt="">

              <span>${year}</span>
            </div>
          </div>

          <button onclick="watch(event)" data-id=${movieId}>
            <img src="./assets/icons/Play.svg" alt="">

            <span>Assistir trailer</span>
          </button>
        </div>
  `
}


function select3Videos(results) {
  const random = () => Math.floor(Math.random() * results.length)

  // set é uma estrutura de dados que os dados não podem ser repetidos
  let selectedVideos = new Set()

  // Enquanto não tiverem 3 dados inseridos, continuar gerando novos
  while (selectedVideos.size < 3) {
    // adicionando o id do filme com o id gerado pela função random()
    selectedVideos.add(results[random()].id)
  }

  // Retornando um array desestruturado de 3 vídeos não repetidos
  return [...selectedVideos]
}

async function getMoreInfo(id) {
  // https://api.themoviedb.org/3/movie/{movie_id}  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTVlMGQ2ZjQyN2VjMWU3NjYxZTRlMzViYzcwZWRkOSIsInN1YiI6IjYzMGY5NWVhNjA2MjBhMDA3YjRhZTkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VzOQJzANW-pUap_7k6yR7JeQELZ9PZ1_tpbi1Tkye8k'
    }
  };

  try {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + id, options)
      .then(response => response.json())

    return data
  } catch (error) {
    console.log(error)
  }
}

function minutesToHourMinutesAndSeconds(minutes) {
  const date = new Date(null)
  date.setMinutes(minutes)

  return date.toISOString().slice(11, 19)
}

// Função para fazer a primeira chamada à API
async function start() {
  // pegar sugestões de filme da API
  const { results } = await getMovies()

  // pegar 3 filmes aleatórios para sugestão
  const random3Movies = select3Videos(results).map(async movie => {
    const info = await getMoreInfo(movie)

    // organizar os dados para ...
    const props = {
      movieId: info.id,
      title: info.title,
      stars: Number(info.vote_average).toFixed(2),
      imagePath: info.poster_path,
      time: minutesToHourMinutesAndSeconds(info.runtime),
      year: info.release_date.slice(0, 4)
    }

    // console.log(info)
    // console.log(props)

    // Chamando a função para gerar a página html
    return createMovieLayour(props)
  })

  const output = await Promise.all(random3Movies)


  // substituir o conteúdo dos movies
  document.querySelector('.movies').innerHTML = output.join("")
}


start()