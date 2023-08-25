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






