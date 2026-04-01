-- 음악 추천 플랫폼 (K-Vibe / MuShare) DataBase 스키마

CREATE DATABASE IF NOT EXISTS music_share_db;
USE music_share_db;

-- 1. 사용자(Users) 테이블
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    profile_image_url VARCHAR(255) COMMENT '프로필 이미지 URL',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. 음악 추천 게시글(Music Posts) 테이블
CREATE TABLE music_posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL COMMENT '곡명',
    artist VARCHAR(100) NOT NULL COMMENT '아티스트명',
    genre VARCHAR(50) COMMENT '장르 (예: K-Pop, Indie, Hip-hop 등)',
    streaming_url VARCHAR(255) COMMENT '유튜브, 스포티파이 등 음악 감상 링크',
    description TEXT COMMENT '음악 소개 및 개인적인 감상평',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 3. 댓글(Comments) 테이블
CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL COMMENT '댓글 내용',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES music_posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 4. 좋아요(Likes) 테이블
CREATE TABLE likes (
    like_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_like (post_id, user_id), -- 한 유저가 같은 글에 여러 번 좋아요를 누르지 못하도록 함
    FOREIGN KEY (post_id) REFERENCES music_posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 5. 플레이리스트(Playlists) 테이블 - (마음에 드는 곡 보관함)
CREATE TABLE playlists (
    playlist_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL COMMENT '플레이리스트 이름',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 6. 플레이리스트-음악 매핑(Playlist Items) 테이블
CREATE TABLE playlist_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    playlist_id INT NOT NULL,
    post_id INT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (playlist_id) REFERENCES playlists(playlist_id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES music_posts(post_id) ON DELETE CASCADE
);
