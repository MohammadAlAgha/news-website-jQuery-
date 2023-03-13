$(document).ready(function () {
  $.ajax({
    url: "http://localhost/news-website-jQuery-/backend/getNews.php",
    success: function (res) {
      let news = JSON.parse(res);
      news.response.forEach((resp) => {
        $("#wrapper").append(
          `<div class="news">
            <h2 class="title">
            ${resp.title}
            </h2>
            <div class="description">
            ${resp.description}
            </div>
          </div> 
    `
        );
      });
    },
  });
});
