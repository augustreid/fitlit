// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// An example of how you tell webpack to use a JS file

//import userData from './data/users';
import { fetchUserData } from './apiCalls';

//we'll need to import our apiCalls.js functions here (?) and get rid of userData import
import UserRepository from './UserRepository';
import User from './User';


// querySelectors

let welcomeUser = document.querySelector('#welcomeUser');
let userName = document.querySelector('#userName');
let addressInfo = document.querySelector('#addressInfo');
let userEmail = document.querySelector('#userEmail');
let userStrideLength = document.querySelector('#userStrideLength');
let userStepGoal = document.querySelector('#userStepGoal');
let userFriends = document.querySelector('#userFriends');
let stepGoalComparison = document.querySelector('#stepGoalComparison');

let userData;
fetchUserData().then(data => userData = data.userData);
console.log(userData);

let userRepository = new UserRepository(userData);
let user = new User(userRepository.renderUserData(1));


// functions

const renderUserWelcomeMsg = () => {
  welcomeUser.innerText = `Welcome, ${user.renderUserFirstName()}!`;
}

const displayUserName = () => {
  userName.innerText = `${user.name}`;
}

const displayUserAddress = () => {
  addressInfo.innerText = `${user.address}`;
}
const displayUserEmail = () => {
  userEmail.innerText = `${user.email}`;
}

const displayUserStrideLength = () => {
  userStrideLength.innerText = `${user.strideLength}`;
}

const displayUserStepGoal = () => {
  userStepGoal.innerText = `${user.dailyStepGoal}`;
}

const displayUserFriends = () => {
  const friends = userRepository.getUsersByIds(user.friends);
  const friendNames = friends.map((friend) => {
    return friend.name;
  });
  userFriends.innerText = `${friendNames.join(', ')}`;
}

const displayStepGoalComparison = () => {
  stepGoalComparison.innerText = `Your step goal: ${user.dailyStepGoal} compared to the average user step goal: ${userRepository.calculateAvgUserStepGoal()}.`;
}

const renderUserInfo = () => {
  renderUserWelcomeMsg();
  displayUserName();
  displayUserAddress();
  displayUserEmail();
  displayUserStrideLength();
  displayUserStepGoal();
  displayUserFriends();
  displayStepGoalComparison();
}

// eventListeners
window.addEventListener('load', renderUserInfo);

// console.log(userRepository)
// console.log(user)
