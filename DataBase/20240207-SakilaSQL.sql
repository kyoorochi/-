-- use sakila;

-- <데이터 조회 및 필터링>
-- select f.film_id, f.title from film f join film_actor fa on f.film_id = fa.film_id  join actor a on fa.actor_id = a.actor_id
-- where a.first_name = 'JOHNNY' and a.last_name = 'LOLLOBRIGIDA';
-- select c.name, count(fc.film_id) as number_of_films from category c join film_category fc on c.category_id = fc.category_id group by c.name;
-- select r.rental_date, f.title from rental r join inventory i on r.inventory_id = i.inventory_id join film f on i.film_id = f.film_id
-- where r.customer_id = 5;
-- select title, release_year from film order by release_year desc limit 10;

-- <조인 및 관계>
-- select a.first_name, a.last_name from actor a join film_actor fa ON a.actor_id = fa.actor_id
-- join film f ON fa.film_id = f.film_id where f.title = 'ACADEMY DINOSAUR';
-- select distinct c.first_name, c.last_name from customer c join rental r on c.customer_id = r.customer_id
-- join inventory i on r.inventory_id = i.inventory_id join film f on i.film_id = f.film_id where f.title = 'ACADEMY DINOSAUR';
-- select c.customer_id, c.first_name, c.last_name, max(r.rental_date) as last_rental_date, f.title from customer c
-- join rental r on c.customer_id = r.customer_id join inventory i on r.inventory_id = i.inventory_id join film f on i.film_id = f.film_id
-- group by c.customer_id, c.first_name, c.last_name, f.title;
-- select f.title, avg(datediff(r.return_date, r.rental_date)) as avg_rental_period from film f join inventory i on f.film_id = i.film_id
-- join rental r on i.inventory_id = r.inventory_id group by f.title order by avg_rental_period desc;

-- <집계 및 그룹화>
-- select f.title, count(r.rental_id) as rental_count from film f join inventory i on f.film_id = i.film_id
-- join rental r on i.inventory_id = r.inventory_id group by f.title order by rental_count desc limit 1;
-- select c.name, avg(f.rental_rate) as average_rental_rate from category c join film_category fc on c.category_id = fc.category_id
-- join film f on fc.film_id = f.film_id group by c.name;
-- select year(p.payment_date) as year, month(p.payment_date) as month, sum(p.amount) as total_sales from payment p 
-- group by year(p.payment_date), month(p.payment_date);
-- select a.first_name, a.last_name, count(fa.film_id) as number_of_films from actor a join film_actor fa on a.actor_id = fa.actor_id 
-- group by a.first_name, a.last_name;

-- <서브쿼리 및 고급기능>
-- select f.title, sum(p.amount) as total_revenue from film f join inventory i on f.film_id = i.film_id join rental r on i.inventory_id = r.inventory_id
-- join payment p on r.rental_id = p.rental_id group by f.title order by total_revenue desc limit 1;
-- select f.title, f.rental_rate from film f where f.rental_rate > (select avg(rental_rate) from film);
-- select c.customer_id, c.first_name, c.last_name, count(r.rental_id) as rental_count from rental r join customer c on r.customer_id = c.customer_id
-- group by c.customer_id order by rental_count desc limit 1;
-- select f.title, count(r.rental_id) as rental_count from film f join film_actor fa on f.film_id = fa.film_id join actor a on fa.actor_id = a.actor_id
-- join inventory i on f.film_id = i.film_id join rental r on i.inventory_id = r.inventory_id where a.first_name = 'PENELOPE' and a.last_name = 'GUINESS'
-- group by f.title order by rental_count desc limit 1;

-- <데이터 수정 및 관리>
-- insert into film (title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features)
-- values ('New Adventure Movie', 'A thrilling adventure of the unknown', 2023, 1, 3, 4.99, 120, 19.99, 'PG', 'Trailers,Commentaries');
-- update customer set address_id = (select address_id from address where address = '123 New Address, New City') where customer_id = 5; 에러발생
-- update rental set return_date = now() where rental_id = 200;
-- delete from actor where actor_id = 10; 에러발생