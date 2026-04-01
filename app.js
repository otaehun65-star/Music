// Mock Data with Apple Music Search Queries
let musicPosts = [
    { id: 1, title: "Supernova", artist: "aespa", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbdd50f89?auto=format&fit=crop&q=80&w=400", user: "MusicLover99", likes: 1204, comments: 89, searchKeywords: "에스파 슈퍼노바 케이팝 아이돌 댄스", audioQuery: "aespa supernova" },
    { id: 2, title: "사건의 지평선", artist: "윤하 (YOUNHA)", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400", user: "VibeSeeker", likes: 955, comments: 120, searchKeywords: "윤하 발라드 사건의지평선 감성 고음", audioQuery: "윤하 사건의 지평선" },
    { id: 3, title: "Hype Boy", artist: "NewJeans", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&q=80&w=400", user: "KPopFanatic", likes: 2450, comments: 310, searchKeywords: "뉴진스 하입보이 케이팝 걸그룹", audioQuery: "NewJeans Hype Boy" },
    { id: 4, title: "Tomboy", artist: "혁오 (HYUKOH)", genre: "Indie", imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400", user: "IndieVibes", likes: 800, comments: 45, searchKeywords: "혁오 톰보이 인디 밴드 락", audioQuery: "HYUKOH Tomboy" },
    { id: 5, title: "아무노래", artist: "지코 (ZICO)", genre: "Hip-hop", imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=400", user: "GroovyRoom", likes: 1540, comments: 204, searchKeywords: "지코 아무노래 힙합 랩 댄스 챌린지", audioQuery: "ZICO 아무노래" },
    { id: 6, title: "Love wins all", artist: "아이유 (IU)", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=400", user: "SweetMelody", likes: 3100, comments: 452, searchKeywords: "아이유 러브윈즈올 발라드 감성", audioQuery: "IU Love wins all" },
    { id: 7, title: "Antifragile", artist: "LE SSERAFIM", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400", user: "Fearless", likes: 1890, comments: 110, searchKeywords: "르세라핌 안티프래자일 케이팝 걸그룹", audioQuery: "LE SSERAFIM Antifragile" },
    { id: 8, title: "주저하는 연인들을 위해", artist: "잔나비", genre: "Indie", imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=400", user: "RetroSoul", likes: 1120, comments: 98, searchKeywords: "잔나비 주저하는연인들을위해 인디 밴드 옛날감성", audioQuery: "잔나비 주저하는 연인들을 위해" },
    { id: 9, title: "Ditto", artist: "NewJeans", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400", user: "Bunnies", likes: 3500, comments: 400, searchKeywords: "뉴진스 디토 윈터 케이팝 걸그룹", audioQuery: "NewJeans Ditto" },
    { id: 10, title: "I AM", artist: "IVE", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1520166687002-132d4af2bcf6?auto=format&fit=crop&q=80&w=400", user: "DiveInto", likes: 2100, comments: 250, searchKeywords: "아이브 아이엠 케이팝 댄스", audioQuery: "IVE I AM" },
    { id: 11, title: "광화문에서", artist: "규현 (KYUHYUN)", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1549463953-fb520de5d648?auto=format&fit=crop&q=80&w=400", user: "AutumnLeaves", likes: 1800, comments: 150, searchKeywords: "규현 광화문에서 발라드 슬픈노래", audioQuery: "규현 광화문에서" },
    { id: 12, title: "우산", artist: "에픽하이", genre: "Hip-hop", imageUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=400", user: "RainyDay", likes: 2800, comments: 320, searchKeywords: "에픽하이 우산 윤하 힙합 비오는날", audioQuery: "에픽하이 우산" },
    { id: 13, title: "밤편지", artist: "아이유 (IU)", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&q=80&w=400", user: "MoonLight", likes: 4500, comments: 600, searchKeywords: "아이유 밤편지 발라드 잔잔한", audioQuery: "아이유 밤편지" },
    { id: 14, title: "TOMBOY", artist: "(여자)아이들", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=400", user: "Neverland", likes: 2300, comments: 310, searchKeywords: "여자아이들 톰보이 아이돌 록", audioQuery: "(여자)아이들 TOMBOY" },
    { id: 15, title: "취중고백", artist: "김민석", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=400", user: "MeloLover", likes: 1300, comments: 85, searchKeywords: "김민석 취중고백 멜로망스 발라드 고백", audioQuery: "김민석 취중고백" },
    { id: 16, title: "VVS", artist: "미란이 (Mirani)", genre: "Hip-hop", imageUrl: "https://images.unsplash.com/photo-1513297886616-e578faabfdec?auto=format&fit=crop&q=80&w=400", user: "ShowMeThe", likes: 1900, comments: 200, searchKeywords: "VVS 미란이 머쉬베놈 쇼미더머니 힙합 랩", audioQuery: "Mirani VVS" },
    { id: 17, title: "스물다섯, 스물하나", artist: "자우림 (Jaurim)", genre: "Indie", imageUrl: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&q=80&w=400", user: "Youth", likes: 3200, comments: 400, searchKeywords: "자우림 스물다섯스물하나 밴드 인디 청춘 록", audioQuery: "자우림 스물다섯 스물하나" },
    { id: 18, title: "Dynamite", artist: "방탄소년단 (BTS)", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1543761899-2a9699cd1031?auto=format&fit=crop&q=80&w=400", user: "ARMY", likes: 5500, comments: 900, searchKeywords: "방탄소년단 다이너마이트 팝 케이팝 빌보드", audioQuery: "BTS Dynamite" },
    { id: 19, title: "좋은 날", artist: "아이유 (IU)", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&fit=crop&q=80&w=400", user: "Uaena", likes: 4800, comments: 500, searchKeywords: "아이유 좋은날 발라드 고음 전설", audioQuery: "아이유 좋은 날" },
    { id: 20, title: "우주를 줄게", artist: "볼빨간사춘기", genre: "Indie", imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=400", user: "IndiePop", likes: 2100, comments: 150, searchKeywords: "볼빨간사춘기 우주를줄게 인디 어쿠스틱", audioQuery: "볼빨간사춘기 우주를 줄게" },
    { id: 21, title: "봄날", artist: "방탄소년단 (BTS)", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1462275646964-a0e5bb469071?auto=format&fit=crop&q=80&w=400", user: "SpringBreeze", likes: 8500, comments: 1200, searchKeywords: "방탄소년단 봄날 보고싶다 벚꽃 발라드 감성", audioQuery: "BTS 봄날" },
    { id: 22, title: "너의 의미", artist: "아이유 (IU)", genre: "Indie", imageUrl: "https://images.unsplash.com/photo-1490264627122-cbe2cb4019ea?auto=format&fit=crop&q=80&w=400", user: "MeaningOfYou", likes: 4200, comments: 340, searchKeywords: "아이유 너의의미 산울림 리메이크 어쿠스틱", audioQuery: "아이유 너의 의미" },
    { id: 23, title: "Counting Stars", artist: "비오 (BE'O)", genre: "Hip-hop", imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400", user: "NightSky", likes: 3100, comments: 450, searchKeywords: "비오 카운팅스타 쇼미더머니 빈지노 랩", audioQuery: "BE'O Counting Stars" },
    { id: 24, title: "Attention", artist: "NewJeans", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400", user: "HypeBoyBFF", likes: 4600, comments: 550, searchKeywords: "뉴진스 어텐션 케이팝 걸그룹 데뷔곡", audioQuery: "NewJeans Attention" },
    { id: 25, title: "그라데이션", artist: "10CM", genre: "Indie", imageUrl: "https://images.unsplash.com/photo-1516280440502-a160868cb5ee?auto=format&fit=crop&q=80&w=400", user: "SpringTime", likes: 2500, comments: 180, searchKeywords: "십센치 그라데이션 권정열 인디 밴드 어쿠스틱", audioQuery: "10CM 그라데이션" },
    { id: 26, title: "ETA", artist: "NewJeans", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbdd50f89?auto=format&fit=crop&q=80&w=400", user: "Binky", likes: 3800, comments: 420, searchKeywords: "뉴진스 이티에이 아이폰 케이팝 댄스", audioQuery: "NewJeans ETA" },
    { id: 27, title: "Next Level", artist: "aespa", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400", user: "Kwangya", likes: 5200, comments: 750, searchKeywords: "에스파 넥스트레벨 광야 댄스 아이돌", audioQuery: "aespa Next Level" },
    { id: 28, title: "신호등", artist: "이무진", genre: "Indie", imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=400", user: "TrafficLight", likes: 3800, comments: 240, searchKeywords: "이무진 신호등 싱어게인 무명가수전 어쿠스틱", audioQuery: "이무진 신호등" },
    { id: 29, title: "여수 밤바다", artist: "버스커 버스커", genre: "Indie", imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=400", user: "NightSea", likes: 6000, comments: 800, searchKeywords: "버스커버스커 여수밤바다 장범준 바다 야경", audioQuery: "버스커 버스커 여수 밤바다" },
    { id: 30, title: "Love Dive", artist: "IVE", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&q=80&w=400", user: "DiveLover", likes: 5500, comments: 820, searchKeywords: "아이브 러브다이브 숨참고 다이브 케이팝", audioQuery: "IVE Love Dive" },
    { id: 31, title: "너를 만나", artist: "폴킴", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=400", user: "PaulkimFan", likes: 4100, comments: 310, searchKeywords: "폴킴 너를만나 발라드 축가 슬픔 위로", audioQuery: "폴킴 너를 만나" },
    { id: 32, title: "DNA", artist: "방탄소년단 (BTS)", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1543761899-2a9699cd1031?auto=format&fit=crop&q=80&w=400", user: "ARMY_Forever", likes: 9200, comments: 1400, searchKeywords: "방탄소년단 디엔에이 우주 케이팝 댄스", audioQuery: "BTS DNA" },
    { id: 33, title: "Blueming", artist: "아이유 (IU)", genre: "Indie", imageUrl: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&q=80&w=400", user: "BlueRose", likes: 5300, comments: 460, searchKeywords: "아이유 블루밍 파란장미 인디 락 블루", audioQuery: "아이유 Blueming" },
    { id: 34, title: "비도 오고 그래서", artist: "헤이즈 (Heize)", genre: "Hip-hop", imageUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=400", user: "RainDrops", likes: 3600, comments: 280, searchKeywords: "헤이즈 신용재 비도오고그래서 장마 랩 힙합", audioQuery: "헤이즈 비도 오고 그래서" },
    { id: 35, title: "어떻게 이별까지 사랑하겠어", artist: "AKMU", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400", user: "Sailing", likes: 4900, comments: 610, searchKeywords: "악뮤 이찬혁 이수현 항해 발라드 어떻게이별까지사랑하겠어널사랑하는거지", audioQuery: "AKMU 어떻게 이별까지 사랑하겠어" },
    { id: 36, title: "취기를 빌려", artist: "산들", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1549463953-fb520de5d648?auto=format&fit=crop&q=80&w=400", user: "DrunkConfess", likes: 2100, comments: 130, searchKeywords: "산들 B1A4 취기를빌려 웹툰 오즈 감성", audioQuery: "산들 취기를 빌려" },
    { id: 37, title: "회전목마", artist: "sokodomo", genre: "Hip-hop", imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&q=80&w=400", user: "MerryGoRound", likes: 3400, comments: 400, searchKeywords: "소코도모 피네이션 회전목마 쇼미더머니 자이언티 원슈타인", audioQuery: "sokodomo 회전목마" },
    { id: 38, title: "ELEVEN", artist: "IVE", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400", user: "IveFans", likes: 4100, comments: 320, searchKeywords: "아이브 일레븐 데뷔곡 케이팝 걸그룹 댄스", audioQuery: "IVE ELEVEN" },
    { id: 39, title: "퀸카 (Queencard)", artist: "(여자)아이들", genre: "K-Pop", imageUrl: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=400", user: "Neverland2", likes: 6200, comments: 850, searchKeywords: "여자아이들 퀸카 아이돌 댄스 신나는", audioQuery: "(여자)아이들 퀸카" },
    { id: 40, title: "사랑은 늘 도망가", artist: "임영웅", genre: "Ballad", imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=400", user: "HeroFan", likes: 12000, comments: 2500, searchKeywords: "임영웅 트로트 영웅시대 신사와아가씨 OST 발라드", audioQuery: "임영웅 사랑은 늘 도망가" }
];

// 사용자가 게시물 작성 기능(write.html)으로 저장한 포스트 리스트를 불러와 기본 피드 최상단(최신순)에 합칩니다! 
const userWrittenPosts = JSON.parse(localStorage.getItem('customPosts')) || [];
musicPosts = [...userWrittenPosts, ...musicPosts];

// DOM Elements
const musicGrid = document.getElementById('musicGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const navLinks = document.getElementById('navLinks');

// ==============================================
// 🔐 Auth Check (로그인 세션 확인)
// ==============================================
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser && navLinks) {
    navLinks.innerHTML = `
        <span style="color: white; align-self: center; font-weight: 600; font-size: 1rem; margin-right: 15px;">
            <i class="fa-solid fa-user-circle" style="color: var(--accent-color);"></i> ${currentUser.name} 님 환영합니다!
        </span>
        <button class="btn btn-outline" onclick="logout()">로그아웃</button>
        <button class="btn btn-primary" onclick="location.href='write.html'">글쓰기</button>
    `;
}

window.logout = function() {
    localStorage.removeItem('currentUser');
    alert('안전하게 로그아웃되었습니다.');
    location.reload(); // 새로고침하여 원래 버튼으로 복구
};

// 내 보관함 상태 관리 (로컬 스토리지에 저장하여 새로고침해도 유지)
let myPlaylistIds = new Set(JSON.parse(localStorage.getItem('myPlaylist')) || []);
let customComments = JSON.parse(localStorage.getItem('customComments')) || {};

// Render Cards
function renderCards(posts) {
    musicGrid.innerHTML = '';
    
    // 만약 보관함이 비어있거나 검색 결과가 없다면
    if (posts.length === 0) {
        musicGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: var(--text-secondary); font-size: 1.2rem;">검색 결과가 없거나 아직 보관함에 담은 음악이 없습니다 🥲<br><br>마음에 드는 곡의 🩷 하트 버튼을 눌러보세요!</p>';
        return;
    }

    posts.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'music-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;

        let safeTitle = post.title.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        let safeArtist = post.artist.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        let safeQuery = post.audioQuery.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        
        const isLiked = myPlaylistIds.has(post.id);
        const heartStyle = isLiked ? 'fa-solid' : 'fa-regular';
        const heartColor = isLiked ? 'style="color: #ff007f;"' : '';
        
        const baseComments = post.comments;
        const userAddedComments = customComments[post.id] ? customComments[post.id].length : 0;
        const totalComments = baseComments + userAddedComments;

        card.innerHTML = `
            <div class="card-image-wrapper" onclick="playNativeAudio('${safeTitle}', '${safeArtist}', '${post.imageUrl}', '${safeQuery}')">
                <img src="${post.imageUrl}" alt="${post.title}" class="card-image">
                <div class="play-overlay">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <div class="card-content">
                <span class="genre-tag">${post.genre}</span>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-artist">${post.artist}</p>
                <div class="card-footer">
                    <div class="user-info">
                        <div class="user-avatar">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${post.user}" alt="avatar" style="width:100%; height:100%; border-radius:50%;">
                        </div>
                        <span style="font-size: 0.9rem; font-weight: 600; color: white;">${post.user}</span>
                    </div>
                    <div class="interaction-stats">
                        <div class="stat like" onclick="handleLike(event, this, ${post.id})">
                            <i class="${heartStyle} fa-heart" ${heartColor}></i>
                            <span style="color:white;">${isLiked ? '담김' : '담기'}</span>
                        </div>
                        <div class="stat comment-btn" onclick="openComments(${post.id}, '${safeTitle}')" style="cursor:pointer; transition: 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color=''">
                            <i class="fa-regular fa-comment"></i>
                            <span>${totalComments}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        musicGrid.appendChild(card);
    });
}

// ==============================================
// 🏆 Top Trending Song Logic (최다 하트 곡 실시간 계산)
// ==============================================
window.updateTopTrendingPost = function() {
    if (musicPosts.length === 0) return;
    
    let topPost = musicPosts[0];
    let maxLikes = -1;
    
    for(let post of musicPosts) {
        // 기존 핫 트랙 로직에 내가 누른 하트 수치(+1)까지 실시간으로 집계
        let postLikes = post.likes + (myPlaylistIds.has(post.id) ? 1 : 0);
        if (postLikes > maxLikes) {
            maxLikes = postLikes;
            topPost = post;
        }
    }

    const topTrendTitle = document.getElementById('topTrendTitle');
    const topTrendArtist = document.getElementById('topTrendArtist');
    const topTrendLikes = document.getElementById('topTrendLikes');
    const topTrendImg = document.getElementById('topTrendImg');
    const topTrendCard = document.getElementById('topTrendCard');

    if(topTrendTitle && topPost) {
        // UI 주입
        topTrendTitle.innerText = topPost.title;
        topTrendArtist.innerText = topPost.artist;
        topTrendLikes.innerText = maxLikes.toLocaleString();
        topTrendImg.src = topPost.imageUrl;
        
        // 클릭 시 곧바로 메인 오디오 플레이어에서 재생되도록 이벤트 세팅
        let safeTitle = topPost.title.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        let safeArtist = topPost.artist.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        let safeQuery = topPost.audioQuery.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        
        topTrendCard.setAttribute('onclick', `playNativeAudio('${safeTitle}', '${safeArtist}', '${topPost.imageUrl}', '${safeQuery}')`);
    }
};

// Initial Render
updateTopTrendingPost();
renderCards(musicPosts);

// Filtering Logic (내 보관함 기능 추가)
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const genre = btn.getAttribute('data-genre');
        if (genre === 'all') {
            renderCards(musicPosts);
        } else if (genre === 'my_playlist') {  // 플레이리스트 필터!
            const mySongs = musicPosts.filter(p => myPlaylistIds.has(p.id));
            renderCards(mySongs);
        } else {
            const filtered = musicPosts.filter(post => post.genre === genre);
            renderCards(filtered);
        }
        searchInput.value = ''; 
    });
});

// Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().replace(/\s+/g, ''); 
    
    if(!term) {
        // 검색어 삭제 시 원래 보던 탭으로 복구
        const activeGenre = document.querySelector('.filter-btn.active').getAttribute('data-genre');
        if (activeGenre === 'my_playlist') {
            renderCards(musicPosts.filter(p => myPlaylistIds.has(p.id)));
        } else if (activeGenre === 'all') {
            renderCards(musicPosts);
        } else {
            renderCards(musicPosts.filter(post => post.genre === activeGenre));
        }
        return;
    }

    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-genre="all"]').classList.add('active');

    const filtered = musicPosts.filter(post => {
        const titleMatch = post.title.toLowerCase().replace(/\s+/g, '').includes(term);
        const artistMatch = post.artist.toLowerCase().replace(/\s+/g, '').includes(term);
        const genreMatch = post.genre.toLowerCase().replace(/\s+/g, '').includes(term);
        const keywordMatch = post.searchKeywords.toLowerCase().replace(/\s+/g, '').includes(term);

        return titleMatch || artistMatch || genreMatch || keywordMatch;
    });

    renderCards(filtered);
});

// 보관함(Playlist) 담기 Interaction
window.handleLike = function(event, element, postId) {
    event.stopPropagation();
    const icon = element.querySelector('i');
    const textSpan = element.querySelector('span');

    if (myPlaylistIds.has(postId)) {
        // 보관함에서 제거
        myPlaylistIds.delete(postId);
        icon.className = 'fa-regular fa-heart';
        icon.style.color = '';
        textSpan.innerText = '담기';
        
        // 현재 [내 보관함] 탭을 보고 있다면 화면 갱신
        if(document.querySelector('.filter-btn.active').getAttribute('data-genre') === 'my_playlist') {
            renderCards(musicPosts.filter(p => myPlaylistIds.has(p.id)));
        }
    } else {
        // 보관함에 담기
        myPlaylistIds.add(postId);
        icon.className = 'fa-solid fa-heart';
        icon.style.color = '#ff007f';
        textSpan.innerText = '담김';
    }
    
    // 로컬 스토리지에 동기화
    localStorage.setItem('myPlaylist', JSON.stringify([...myPlaylistIds]));
    
    // 트렌딩 곡 최상단 실시간 갱신 (1위가 바뀌면 바로 적용)
    if(typeof updateTopTrendingPost === 'function') {
        updateTopTrendingPost();
    }
};

// ==============================================
// 🍎 Apple Music (iTunes API) Native Player 
// ==============================================
let currentAudio = document.getElementById('audioElement');
let playPauseBtn = document.getElementById('playPauseBtn');
let progressFill = document.getElementById('progressFill');
let musicPlayer = document.getElementById('musicPlayer');
let currentTimeEl = document.getElementById('currentTime');
let durationEl = document.getElementById('duration');

window.playNativeAudio = async function(title, artist, imageUrl, audioQuery) {
    document.getElementById('playerTitle').innerText = title;
    document.getElementById('playerArtist').innerText = artist;
    document.getElementById('playerCover').src = imageUrl;
    musicPlayer.style.transform = 'translateY(0)';
    
    playPauseBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>'; 
    
    try {
        const query = encodeURIComponent(audioQuery);
        const res = await fetch(`https://itunes.apple.com/search?term=${query}&country=KR&entity=song&limit=1`);
        const data = await res.json();
        
        if(data.results && data.results.length > 0) {
            const previewUrl = data.results[0].previewUrl;
            
            currentAudio.src = previewUrl;
            currentAudio.play().then(() => {
                playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            }).catch(e => {
                console.error(e);
                playPauseBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left:5px;"></i>';
            });
        } else {
            alert("공식 미리듣기 음원을 서버에서 찾을 수 없습니다.");
            playPauseBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left:5px;"></i>';
        }
    } catch(err) {
        console.error(err);
        alert("원격 서버 데이터 통신에 실패했습니다.");
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left:5px;"></i>';
    }
};

playPauseBtn.onclick = function() {
    if(!currentAudio.src) return;
    if(currentAudio.paused) {
        currentAudio.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        currentAudio.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left:5px;"></i>';
    }
};

currentAudio.ontimeupdate = function() {
    if(currentAudio.duration) {
        let pct = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressFill.style.width = pct + '%';
        
        let currentMins = Math.floor(currentAudio.currentTime / 60);
        let currentSecs = Math.floor(currentAudio.currentTime % 60);
        currentTimeEl.innerText = `${currentMins}:${currentSecs < 10 ? '0' : ''}${currentSecs}`;
        
        let durMins = Math.floor(currentAudio.duration / 60);
        let durSecs = Math.floor(currentAudio.duration % 60);
        durationEl.innerText = `${durMins}:${durSecs < 10 ? '0' : ''}${durSecs}`;
    }
};

window.seek = function(event) {
    if(!currentAudio.duration) return;
    let bar = document.getElementById('progressBar');
    let rect = bar.getBoundingClientRect();
    let clickX = event.clientX - rect.left;
    let width = rect.width;
    let pct = clickX / width;
    currentAudio.currentTime = pct * currentAudio.duration;
};

// ==============================================
// 💬 Comment Modal Logic (댓글 기능)
// ==============================================
const commentModal = document.getElementById('commentModal');
const closeCommentModal = document.getElementById('closeCommentModal');
const commentsList = document.getElementById('commentsList');
const newCommentInput = document.getElementById('newCommentInput');
const addCommentBtn = document.getElementById('addCommentBtn');
const cmTitleText = document.getElementById('cmTitleText');

let currentCommentPostId = null;

// 댓글 모달 열기
window.openComments = function(postId, title) {
    currentCommentPostId = postId;
    cmTitleText.innerText = title;
    
    // 모달에 기존 가짜 댓글과 내가 쓴 댓글들을 렌더링
    renderCommentsList(postId);
    
    commentModal.style.display = 'block';
    newCommentInput.focus();
};

function renderCommentsList(postId) {
    commentsList.innerHTML = '';
    
    // 기본 가상의 다른 사람 댓글 (리얼리티 뿜뿜)
    const baseMock = `
        <div class="comment-item">
            <div class="author">MusicLover_99</div>
            <div>이 노래 진짜 너무 좋아요 ㅠㅠ 매일 듣는 중! ❤️</div>
        </div>
        <div class="comment-item">
            <div class="author">VibeCheck</div>
            <div>올해 최고의 명곡 인정합니다. 플리 필수곡! 👍</div>
        </div>
    `;
    commentsList.innerHTML = baseMock;
    
    // 내가 쓴 댓글 (로컬 스토리지에서 가져오기)
    if(customComments[postId]) {
        customComments[postId].forEach(text => {
            const div = document.createElement('div');
            div.className = 'comment-item';
            div.style.borderLeft = '3px solid #ff007f'; // 내 댓글 하이라이트
            div.innerHTML = `
                <div class="author" style="color:white;">나의 댓글 <span style="font-weight:normal;font-size:0.75rem;color:#aaa;">(방금 전)</span></div>
                <div>${text.replace(/</g, "&lt;")}</div>
            `;
            commentsList.appendChild(div);
        });
    }
    
    // 항상 모달 스크롤을 맨 아래로 위치
    commentsList.scrollTop = commentsList.scrollHeight;
}

// 창 닫기 로직
closeCommentModal.onclick = function() {
    commentModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == commentModal) {
        commentModal.style.display = "none";
    }
}

// 댓글 작성 버튼 기능
addCommentBtn.onclick = function() {
    submitComment();
};
newCommentInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitComment();
    }
});

function submitComment() {
    const text = newCommentInput.value.trim();
    if(!text || !currentCommentPostId) return;
    
    // 1. 객체에 댓글 정보 추가
    if(!customComments[currentCommentPostId]) {
        customComments[currentCommentPostId] = [];
    }
    customComments[currentCommentPostId].push(text);
    
    // 2. 브라우저 저장소에 동기화
    localStorage.setItem('customComments', JSON.stringify(customComments));
    
    // 3. UI 업데이트
    newCommentInput.value = '';
    renderCommentsList(currentCommentPostId);
    
    // 4. 숫자가 1 늘어난 것을 실시간 반영하기 위해 보던 화면 그대로 재랜더링 이벤트 (트릭)
    document.getElementById('searchInput').dispatchEvent(new Event('input'));
}

