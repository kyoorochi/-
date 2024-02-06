-- use yes24;
-- CREATE TABLE Books (bookID int auto_increment primary key, title varchar(255) not null, author varchar(255), publisher varchar(255),
--     publishing date, rating varchar(255), review int, sales int, price DECIMAL(10, 2), ranking int, ranking_weeks int);

-- <기본 조회 및 필터링>
-- select title, author from books;
-- select title, rating from books where rating >= 8;
-- select title, review from books where review >= 100 order by review desc;
-- select title, price from books where price < 20000 order by price desc;
-- select title, ranking_weeks from books where ranking_weeks >= 4 order by ranking_weeks desc;
-- select title from books where author = '최태성 저';
-- select title from books where publisher = '웅진지식하우스';

-- <조인 및 관계>
-- select author, count(*) as books_count from books group by author order by books_count desc;
-- select publisher, count(*) as num_books from books group by publisher order by num_books desc limit 1;
-- select author, avg(rating) as avg_rating from books group by author order by avg_rating desc limit 1;
-- select title, author from books where ranking = 1;
-- select title, sales, review from books order by sales desc, review desc limit 10;
-- select title, publishing from books order by publishing desc limit 5;

-- <집계 및 그룹화>
-- select author, avg(rating) as rating_avg from books group by author order by rating_avg desc;
-- select publishing, count(*) from books group by publishing;
-- select title, price from books;
-- select title, review from books order by review desc limit 5;
-- select ranking, avg(review) from books group by ranking;

-- <서브쿼리 및 고급 기능>
-- select title, rating from books where rating > (select avg(rating) from Books) order by rating desc;
-- select title, price from books where price > (select avg(price) from Books) order by price desc;
-- select title, review from books where review > (select max(review) from Books);
-- select max(review) from Books
-- select title, sales from books where sales < (select avg(sales) from books);
-- select author, title from books where author = (select author from books group by author order by count(*) desc limit 1);

-- <데이터 수정 및 관리>
-- update books set price = 30000 where title = '박근혜 회고록 1 어둠을 지나 미래로';
-- update books set title = '박근혜 회고록 2 어둠을 지나 미래로를 (암흑으로 변경)' where author = '박근혜 저';
-- delete from books where sales = (select min(sales) from books); <- 작동안됨.
-- update books set rating = rating + 1 where publisher = '유노북스';

-- <데이터 분석 예제>
-- select author, avg(rating) as avg_rating, avg(sales) as avg_sales from books group by author order by avg(rating) desc, avg(sales) desc;
-- select publishing, avg(price) from books group by publishing order by publishing asc;
-- select publisher, count(*) as book_count, sum(review) as review_sum from books group by publisher order by book_count desc;
-- select ranking, avg(sales) as avg_sales from books group by ranking;
-- select price, avg(review) as avg_review, avg(rating) as avg_rating from books group by price;

-- <난이도 있는 문제>
-- select publisher, author, avg(sales) as avg_sales from books group by publisher, author order by publisher, avg_sales desc;
-- select title, review, price from books where review > (select avg(review) from books) and price < (select avg(price) from books);
-- select author, count(distinct title) as num_books from books group by author order by num_books desc limit 1;
-- select author, max(sales) as max_sales from books group by author;
-- select year(publishing) as year, count(*) as num_books, avg(price) as avg_price from books group by year;
-- select publisher, max(rating) - min(rating) as rating_difference from books group by publisher order by rating_difference desc limit 1;
-- select title, rating / sales as ratio from books where author = '최태성 저' order by ratio desc limit 1;