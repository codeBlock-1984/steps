let currentTabId = 'stars';

const users = [
  '3960d76f-d97b-4547-fbb6-08d803e67418',
  '1d89ea22-6c17-45bc-4bbc-08d803bb8d87',
  'd7652450-953f-4983-5d77-08d7fc9af579',
  'd58b3166-c20f-4ffe-8328-08d7db0fe47e',
  'cc88decb-2b95-4528-a217-08d7ec2b09c6',
  'f0546d75-0571-4f53-fc12-08d8095b46c2',
  '9313cbc4-3d5c-4021-572f-08d7d48de85b',
  'b6c91078-6127-4c3b-52ce-08d7f825c25c'
];

$(document).ready(function () {
  console.log(currentTabId);
  $("#starsBtn").focus();
});

document.addEventListener('DOMContentLoaded', function(){
  console.log('here');
  let ur = new UserReviewJSPlugin();
  ur.init({ secret: 'YRT6P4/7fOcmZXsCFobKUTFNFNki4miWcPGBfdGQ7XU=', user: getUser(),  username: 'John Doe'});
});

function getUser() {
  // const stars = document.getElementById('stars');
  // const emojis = document.getElementById('emojis');
  // const comments = document.getElementById('comments');
  // const starsComments = document.getElementById('starsComments');
  // const emojisComments = document.getElementById('emojisComments');
  
  // if (stars) {
    return users[7];
  // } else if (emojis) {
  //   return users[3];
  // } else if (comments) {
  //   return users[3];
  // } else if (starsComments) {
  //   return users[4];
  // } else if (emojisComments) {
  //   return users[5];
  // }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
