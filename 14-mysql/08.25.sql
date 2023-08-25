-- Active: 1692768677753@@127.0.0.1@3306@sesac
use sesac;

-- ORDER BY
-- pk인 custid의 알파벳 순서대로 정렬된다.
SELECT * FROM customer;


-- custname으로 오름차순으로 정렬된다.
SELECT * FROM customer
ORDER BY custname ASC;

-- 이름순 내림차순
SELECT * FROM customer
ORDER BY custname DESC;

-- where과 order by를 섞어서 사용할 때는 반드시 뒤에 도래해야 한다.
-- 정렬 우선순위는 order BY -> PRIMARY KEY
SELECT * FROM customer
WHERE birth >= "2000-01-01"
ORDER BY addr DESC;
-- 둘의 순서를 바꿔놓으면 에러가 발생한다.

-- ORDER BY는 여러개 사용할 수 있다.
-- 우선 순위  addr -> custid -> pk
SELECT * FROM customer
WHERE birth >= "2000-01-01"
ORDER BY addr DESC, custid DESC;

-- 주소를 기준으로 오름차순 후 아이디를 기준으로 내림차순
SELECT * FROM customer
WHERE birth >= "2000-01-01"
ORDER BY addr, custid DESC;

-- LIMIT 정렬 되어 있는 순서에서 제한된 부분만 가져온다.
SELECT * FROM customer
WHERE birth >= "2000-01-01"
LIMIT 2;

-- 집계 함수
-- 계산하여 값을 리턴하는 함수
-- GROUP BY와 함께 쓰이는 일이 많다.


-- 주문 테이블에서 총 판매 개수 검색
SELECT SUM(amount) FROM orders;

-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경 (total_sales)
SELECT SUM(amount) AS "total_amount" FROM orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
SELECT 
SUM(amount) AS "total_amount", 
AVG(amount) AS "avg_amount",
MIN(price) AS "max_price",
MAX(price) AS "min_price" 
FROM orders;


-- 주문 테이블에서 총 주문 건수 (= 튜플 개수)
SELECT COUNT(*) FROM orders;

-- 주문 테이블에서 주문한 고객 수 중복 제거를 할 수 있는가
SELECT COUNT(DISTINCT custid) FROM orders;

-- GROUP BY 
-- 그룹으로 묶어서 쿼리를 받을 수 있다.

-- 고객 별로 주문한 주문 건수
SELECT custid, COUNT(*) AS "count orders" FROM orders
GROUP BY custid
-- ORDER BY "count orders";
ORDER BY COUNT(*) DESC;

-- 고객 별로 주문한 상품 중 수량 구하기
SELECT custid, SUM(amount) AS "sum of amount" FROM orders
GROUP BY custid
ORDER BY SUM(amount) ASC;

-- 고객 별로 주문한 총 주문액
SELECT custid, SUM(amount * price) AS "total" FROM orders
GROUP BY custid
ORDER BY SUM(amount * price) DESC;

-- 상품별 판매 개수 구하기
SELECT prodname, SUM(amount) FROM orders
GROUP BY prodname;


-- having
-- group by 이후 추가 조건


-- 총 주문액이 10000원 이상인 고객에 대해서 고객별 상품 총 수량 구하기
SELECT custid, SUM(amount), SUM(amount * price) FROM orders
GROUP BY custid
HAVING SUM(amount * price) >= 10000;
-- where을 사용하면 에러코드가 발생한다.

-- WHERE vs HAVING
-- HAVING : 그룹에 대해 필터링, GROUP BY 뒤에 위치. 집계함수 자유롭게 사용가능
-- WHERE : 행 하나하나를 필터링 할 때 사용, GROUP BY 보다 앞에 위치, 집계함수를 쓸 수는 있지만 자유롭지 못함.

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별 상품 총 수량 구하기. 
-- 단 custid "bunny"는 제외
SELECT custid, SUM(amount), SUM(price * amount) FROM orders
WHERE custid != "bunny"
GROUP BY custid
HAVING SUM(price * amount) >= 10000;

-- group by 주의사항
-- select 절에서 group by에서 사용한 속성과 집계함수만 사용가능
SELECT custid, COUNT(*) FROM orders
GROUP BY custid;



-- JOIN
-- 
SELECT COUNT(*) FROM customer;
SELECT COUNT(*) FROM orders;

-- 조건 없이 테이블 조인 == CROSS JOIN
SELECT * FROM customer, orders;

-- WHERE 조건을 이용해 조인 조건을 추가
-- TABLENAME.attribute를 하게되면 테이블의 속성을 가리킬 수 있다.
SELECT * FROM customer, orders
WHERE customer.custid = orders.custid
ORDER BY customer.custid;


-- 조인 방식을 지정할 수 있다.
-- inner join 
SELECT * FROM customer INNER JOIN orders
ON customer.custid = orders.custid;


-- 고객 이름과 고객이 주문한 상품명, 상품 가격 조회
SELECT custname, prodname, price, amount FROM customer INNER JOIN orders
ON customer.custid = orders.custid; -- 동일한 것을 가리킬 때는 무엇을 가리키는 지 적어야 한다.

-- 고객 이름별로 주문한 제품 총 구매액을 고객 별로 정렬
SELECT custname, SUM(amount * price) AS "total_price" 
FROM customer INNER JOIN orders
ON customer.custid = orders.custid
GROUP BY custname
ORDER BY total_price DESC;

-- 
-- https://ju-hy.tistory.com/102
drop table instructor;
create table instructor (
	id int primary key,
    name varchar(7),
    dept_name varchar(7),
    salary int
);

drop table teaches;
create table teaches (
	id int primary key,
    course varchar(7),
    semester varchar(7),
    year varchar(4)
);


insert into instructor values (1, 'james', '심리', 95000);
insert into instructor values (2, 'john', '컴공', 95000);

insert into teaches values (1, '운영체제', '봄', '2022');
insert into teaches values (2, '상담심리', '가을', '2023');

SELECT * FROM instructor;
SELECT * FROM teaches;

/*
SQL에서 기본적으로 JOIN 키워드를 사용하거나 콤마(,)를 통해 연결하면 Inner Join 연산을 수행한다.
이 때, 조건이 설정되지 않은 Inner Join은 Cross Join과 같은 연산을 수행한다.
*/
SELECT * FROM instructor JOIN teaches;
SELECT * FROM instructor, teaches;

/*
이 때, Inner Join 뒤에 ON 키워드를 통해 일치하는 속성을 기준으로 결합할 수도 있으며, 이를 Equal Join이라고 한다.
조건에 맞는 행만 조인한다.
*/
SELECT * FROM instructor I JOIN teaches T ON I.id=T.id;

/*
Outer Join은 공통된 부분만 결합하는 Inner Join과 다르게 공통되지 않은 row도 유지한다.
이 때, 왼쪽 테이블의 row를 유지하면 Left Outer Join,
오른쪽 테이블의 row를 유지하면 Right Outer Join,
양쪽 테이블의 row를 모두 유지하면 Full Outer Join이다.
*/
delete from teaches where id <= 2;

insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');
insert into teaches values (6, '알고리즘', '가을', '2023');

select * from instructor;
select * from teaches;

-- left outer join
-- 강사를 기준으로 연결이 안되면 null처리 
-- left
SELECT * FROM instructor I LEFT OUTER JOIN teaches T ON I.id=T.id;

-- right outer join
-- 과목을 기준으로 합침. 연결이 안되면 null처리.
-- right
SELECT * FROM instructor I RIGHT OUTER JOIN teaches T ON I.id=T.id;

-- full outer join 
-- 참고) mysql 에서는 full outer join 을 지원하지 않음
-- left join과 right join을 union 하여 full outer join 사용 가능
-- 합집합
-- SELECT * FROM instructor I FULL OUTER JOIN teaches T ON I.id=T.id; -- error code 1064: syntax error
SELECT * FROM instructor I LEFT OUTER JOIN teaches T ON I.id=T.id
UNION -- 결합
SELECT * FROM instructor I RIGHT OUTER JOIN teaches T ON I.id=T.id;

-- natural join
-- 같은 값을 갖는 항목끼리 결합. 같은 값 없다면 해당 항목 제외
-- 교집합
SELECT * FROM instructor NATURAL JOIN teaches;



-- DCL
-- GRANT : 특정 DB 사용자에게 특별한 작업 부여
-- 모든 테이블에 접근을 부여할 수는 없다.
-- REVOKE : 특정 DB 사용자에게 특별한 작업 박탈
-- 신입이 실무에서 쓸 일이 거의 없다.
-- 


