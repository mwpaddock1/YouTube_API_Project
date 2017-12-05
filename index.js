const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
//https://www.googleapis.com/youtube/v3/search?q=horses&part=snippet&key=AIzaSyAS1J67TsQ1wBi8FaMbfXYMX-Zaxl21aU8&page=2&per_page=10


function getDataFromApi(searchTerm, callback) {
  const query = {
    q: `${searchTerm}`,
    part:'snippet',
    key: 'AIzaSyAS1J67TsQ1wBi8FaMbfXYMX-Zaxl21aU8',
    maxResults: 10
  }

  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function renderResult(result) {
  //return the video title-link to video and the video thumbnail img-link to the video
  return `
    <div>
      <h3>
          <a class='js-search-results' href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank">${result.snippet.title}</a> 
      </h3>
      
      
      </h4>
          <a class='js-search-results' href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank"><img src="${result.snippet.thumbnails.default.url}" alt="thumbnail image of video"></a> 
          <h4><a class='js-search-results' href="https:www.youtube.com/watch?v=${ result.id.videoId}" target="_blank">More from ${result.snippet.channelTitle}</a>     
    </div>
  `;      
}

function displayYouTubeSearchResults(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(function(event){
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayYouTubeSearchResults);
  });
};

watchSubmit();


//from the cat carousel code - should help with the lightbox
     
// function handleClicks() {
  
//     //tells the browser that when a .thumbmail element is clicked to run the function that follows.
//     $('.thumbnail').on('click', function(event){
//       //set the constant for the imgSrc and the imgAlt
//       const imgSrc = $(event.currentTarget).find('img').attr('src');
//       const imgAlt = $(event.currentTarget).find('img').attr('alt');
//       //$ (make the thumbnail pic show in the hero image)
//      $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
// }); 
    
// }  
//   $(handleClicks());
//       