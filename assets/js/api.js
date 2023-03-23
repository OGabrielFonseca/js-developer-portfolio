async function getProfileData(){
    const url = 'https://raw.githubusercontent.com/OGabrielFonseca/js-developer-portfolio/resolucao-desafio/data/profile.json'
    const profileData = await fetch(url);
    return await profileData.json();
}

