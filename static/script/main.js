export function loadNews(jsonUrl, containerSelector) {
  fetch(jsonUrl)
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка загрузки данных.");
      return res.json();
    })
    .then((data) => {
      const container = document.querySelector(containerSelector);
      container.innerHTML = ""; // Очистка на случай повторной загрузки
      data.forEach((news) => {
        const block = createNewsBlock(news);
        container.appendChild(block);
      });
    })
    .catch((err) => console.error("Ошибка:", err));
}

function createNewsBlock(news) {
  const wrapper = document.createElement("div");
  wrapper.className = "div-news";
  wrapper.dataset.userid = news.userId; // Привязка ID для дальнейших действий

  wrapper.innerHTML = `
    <div class="user-info">
      <img class="user-avatar" src="${news.avatar}" alt="${news.userName}" />
      <p class="t-font text-user-name">${news.userName}</p>
    </div>
    <p class="n-font text-news">${news.newsText}</p>
    <div class="div-news-reaction">
      <div class="button-reaction-like" data-userid="${news.userId}">
        <img class="svg-reaction-like" src="/static/images/svg/like.svg" alt="Like" />
        <p class="n-font text-counter-like">${news.likeCount}</p>
      </div>
      <div class="button-reaction-comment">
        <p class="n-font text-counter-comment">Комментарии ${news.commentCount}</p>
      </div>
    </div>`;

  return wrapper;
}
