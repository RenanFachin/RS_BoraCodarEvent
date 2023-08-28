const input = document.querySelector('input')
const button = document.querySelector('button')

const nameElement = document.querySelector('#name')
const photoElement = document.querySelector('#photo')
const errorElement = document.querySelector('#error')

const photoDefault = 

button.addEventListener('click', getUserInGithubAPI)


const githubApiURL = 'https://api.github.com/users'

async function getUserInGithubAPI() {
  const username = input.value
  const response = await fetch(`${githubApiURL}/${username}`)

  const data = await response.json()

  console.log(data)

  let name
  const photo = data.avatar_url
  // console.log(name, photo)

  if (data.name == "" || data.name === null){
    name = data.login
  } else {
    name = data.name
  }

  if (data !== undefined && data.message == 'Not Found' && input.value == '') {
    errorElement.style.display = 'block'
  } else {
    errorElement.style.display = 'none'
    nameElement.style.display = 'block'
    photoElement.style.display = 'block'
    nameElement.innerHTML = name
    photoElement.setAttribute('src', photo)
  }
}