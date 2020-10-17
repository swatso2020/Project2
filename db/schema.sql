--creating whatscookin database--
DROP DATABASE IF EXISTS whatscookin_db;
CREATE DATABASE whatscookin_db;


--Database Queries--
-- see everything in the favorite meals table
select *
from whatscookin_db.FavoriteMeals

select *
from whatscookin_db.Ingridents


--drop favorite meal table
drop table whatscookin_db.favoriteMeals;
