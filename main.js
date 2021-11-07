// Variavel: Let pode ser alterado ou Const não pode

const LinksSocialMedia = {
  github: 'edersonlucas',
  instagram: 'oedersonlucas',
  facebook: 'oedersonlucas',
  youtube: 'channel/UCr4pLUx5KcykmTkg1e5k2Jw',
  linkedin: 'in/edersonlucas'
}
// Formas de escrever váriaveis
// camelCase - PascalCase - snake_case

// DOM - Document Object Model ou Modelo do Documento do Objeto
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    // Transformando as informações pegadas da API em JSON
    .then(response => response.json())
    // data armazena a responda da API só que agora em JSON
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      linkGitHub.href = data.html_url
      userImage.src = data.avatar_url
      userGitHub.textContent = data.login
    })
}
getGitHubProfileInfos()
