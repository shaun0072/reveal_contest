CREATE DATABASE gender_reveal_db;

CREATE TABLE survey (
  user_id TINYINT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(16) NOT NULL,
	user_phone INT(11) UNSIGNED,
  last_hb TINYINT UNSIGNED,
  mothers_bw TINYINT UNSIGNED,
  fathers_bw TINYINT UNSIGNED,
  babys_weight TINYINT UNSIGNED,
  mothers_cravings TINYINT UNSIGNED,
  mothers_weight TINYINT UNSIGNED,
  fathers_weight TINYINT UNSIGNED,
  gender TINYINT(1) UNSIGNED
);
