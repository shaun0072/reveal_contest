CREATE DATABASE gender_reveal_db;

CREATE TABLE survey (
  user_id TINYINT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(16) NOT NULL,
	user_phone INT(11) UNSIGNED,
  last_hb VARCHAR(16),
  mothers_bw VARCHAR(16),
  fathers_bw VARCHAR(16),
  babys_weight VARCHAR(16),
  mothers_cravings VARCHAR(16),
  mothers_weight TINYINT UNSIGNED,
  fathers_weight TINYINT UNSIGNED,
  gender TINYINT(1) UNSIGNED
);
