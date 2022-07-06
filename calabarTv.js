//  boost = document.querySelectorById("news");
//  let boost = function() {
//      const axios = require("axios");

//      const boost = {
//          method: 'GET',
//          url: 'https://google-news1.p.rapidapi.com/list-languages',
//          params: { country: 'Nigeria' },
//          headers: {
//              'X-RapidAPI-Key': '191d874adamsh0e2c237bca32288p125b6ajsn5a0ec0a5a6ca',
//              'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
//          }
//      };

//      axios.request(boost).then(function(response) {
//          console.log(response.data);
//      }).catch(function(error) {
//          console.error(error);
//      });
//  }

// $.getJSON('https://api.unsplash.com/users/brianhaferkamp/likes/?client_id=9da242ad85084ad7ca951738b8e7d9478fd637ba6d41cf835be09e7e1628c9dc', function(data) {
//     console.log(data);

//     $.each(data, function(index, value) {
//         console.log(value);

//         var name = value.user.name;
//         var bio = value.user.bio;
//         var imageURL = value.urls.regular;

//         // $('.name').text(name);
//         // $('.bio').text(bio);
//         // $('.image img').attr('src', imageURL);

//         $('.output').append('<h1 class="name">' + name + '</h1><h2 class="bio">' + bio + '</h2><div class="image"><img src="' + imageURL + '"/></div>');
//     });
// });