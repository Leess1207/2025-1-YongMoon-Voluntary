const posts = [
  {
    title: "나만의 개발 환경 꾸미기",
    content: "VSCode, Cursor을 이용한 개날먹 개발환경 구축하기",
    category: "개발",
    url: "https://example.com/post1"
  },
  {
    title: "용문고 탈출 완전 정복",
    content: "교장선생님을 완벽히 다루는 핵심 가이드",
    category: "일상",
    url: "https://example.com/post2"
  },
  {
    title: "백준 300문제 풀고 느낀 점",
    content: "실전에서 문제 해결력을 키우지 않았지만 AI가 만들어내는 가상의 경험을 공유합니다.",
    category: "알고리즘",
    url: "https://example.com/post3"
  },
  {
    title: "혼자 제주도 여행기",
    content: "제주도를 가보지 않았지만 AI가 직접 경험한 자연과 여유를 만끽한 3박 4일 간의 이야기",
    category: "일상",
    url: "https://example.com/post4"
  },
  {
    title: "알고리즘 공부 팁",
    content: "나도 알고리즘 하나도 모르지만 AI가 하나하나 알려주는 초보자들을 위한 패턴 익히기와 자료구조 반복 학습의 중요성",
    category: "알고리즘",
    url: "https://example.com/post5"
  }
];

function renderPosts(category = "all") {
  const container = document.getElementById("post-list");
  container.innerHTML = "";

  const filtered = category === "all" ? posts : posts.filter(p => p.category === category);

  filtered.forEach(post => {
    const el = document.createElement("a");
    el.className = "post";
    el.href = post.url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    el.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
    container.appendChild(el);
  });
}

// 카테고리 버튼 필터 & active 토글
document.querySelectorAll(".category-filter button").forEach(button => {
  button.addEventListener("click", () => {
    // 버튼 active 상태 업데이트
    document.querySelectorAll(".category-filter button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");
    renderPosts(category);
  });
});

// 다크모드 토글
document.getElementById("toggle-darkmode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 페이지 로드 시 기본 포스트 렌더링
document.addEventListener("DOMContentLoaded", () => {
  renderPosts();
});
