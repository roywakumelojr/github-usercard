/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const entryPoint = document.querySelector('.cards');

// axios.get('https://api.github.com/users/mrzacsmith')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log('Incomplete, the data was not returned', error)
//   })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['mrzacsmith', 'jvillalp', 'caw442000', 'haase1020'];

followersArray.forEach(names => {
  axios.get(`https://api.github.com/users/${names}`)
  .then(response => {
    console.log(response);
    cards.append(createCard(response.data));
  })
  .catch(error => {
    console.log('Incomplete, the data was not returned', error)
  })
})


{/* <div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div> */}


const cards = document.querySelector('.cards');

function createCard(data) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const profileUrl = document.createElement('a');

  card.append(image);
  card.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(userName);
  cardInfo.append(location);
  cardInfo.append(profile);
  cardInfo.append()
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);
  

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  image.src = `${data.avatar_url}`;
  name.textContent = `Name: ${data.name}`;
  userName.textContent = `Username: ${data.login}`;
  location.textContent = `Location: ${data.location}`;
  profile.textContent = `Profile: `;
  profileUrl.textContent = data.html_url;
  profileUrl.href = data.html_url
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  profile.append(profileUrl)
  

  return card
}
