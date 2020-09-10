--create players table
create table players (
	player_id int not null,
	first_name varchar not null,
	last_name varchar not null,
	hand varchar(1) not null,
	country_code varchar(3) not null
);

-- create matches table
create table matches (
	loser_age float not null,
	loser_id int not null,
	loser_name varchar not null,
	loser_rank int not null,
	winner_age float not null,
	winner_id int not null,
	winner_name varchar not null,
	winner_rank int not null
);

-- query to find number of matches won by Serena Williams
select count(*) from matches
where winner_name = 'Serena Williams';

-- queries to find number of players for each dominant hand group
select count(*) from players
where hand = 'R';
select count(*) from players
where hand = 'L';

-- create table to find out number of wins for each hand group
select p.player_id,
	p.hand,
	m.winner_id
into hand_wins
from players as p
inner join matches as m
on p.player_id = m.winner_id;
-- queries to find number of wins for each hand
select count(*) from hand_wins
where hand = 'R';
select count(*) from hand_wins
where hand = 'L';

