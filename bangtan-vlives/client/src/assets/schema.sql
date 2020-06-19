DROP DATABASE IF EXISTS bts_vlives;

CREATE DATABASE bts_vlives;
USE bts_vlives;

CREATE TABLE `videos` (
	id INT AUTO_INCREMENT NOT NULL,
    broadcast_date date NOT NULL,
    title VARCHAR(255),
    link VARCHAR(255) NOT NULL,
    members VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

