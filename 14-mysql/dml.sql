-- DML
-- DB 내부 데이터를 관리하기 위한 언어
DESC product;

CREATE TABLE customer (
    custid CHAR(10) PRIMARY KEY NOT NULL,
    custname VARCHAR(10) NOT NULL,
    addr CHAR(10) NOT NULL,
    phone CHAR(11),
    birth DATE
)

DESC customer;

-- INSERT : 테이블에 새로운 레코드를 추가
INSERT INTO customer (custid, custname, addr, phone, birth) 
	VALUES ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-03-05');
INSERT INTO customer (addr, phone, birth, custid, custname) 
	VALUES ('대한민국 부산', '01098765432', '2007-04-28', 'wow', '이지은');
-- 속성이 정의되지 않는다면 컬럼이 정의된 순서대로 입력
INSERT INTO customer
    VALUES ('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31');

-- 여러 개의 튜플을 동시 추가
INSERT INTO customer
    VALUES
        ('happy2', '최시은', '일본 오키나와', '01033331234', '1970-10-31'),
        ('happy3', '최시은', '일본 오키나와', '01033331234', '1970-10-31');

-- UPDATE
-- 데이터의 수정을 가능하게 함
-- custid == happy인 주소를 대한민국 서울로 변경
-- where문의 조건이 false여도 에러를 발생시키지 않는다.
UPDATE customer 
SET addr = "대한민국 서울"
WHERE custid = "happy";

-- DELETE 삭제
-- 조건에 맞는 레코드를 삭제함
DELETE FROM customer
WHERE custid = "happy";

-- SELECT 조회
SELECT * FROM customer;


insert into customer values ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
insert into customer values ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');
insert into orders values (NULL, 'kiwi', '프링글스', '3000', 5);
insert into orders values (NULL, 'apple', '프링글스', '3000', 1);
insert into orders values (NULL, 'kiwi', '홈런볼', '2000', 3);

DELETE FROM customer
WHERE custid = "apple";




-- SELECT
-- 데이터를 검색하는 기본 문장
-- 쿼리라고도 한다.
SELECT addr
FROM customer
WHERE custname = "김키위";

-- 외래키를 사용하는 경우 외래키를 참조당하는 테이블은 삭제할 수 없다.
-- 외래키 참조 확인.
SET FOREIGN_KEY_CHECKS = 1;
TRUNCATE TABLE customer;

-- 테이블 삭제 순서
-- customer를 orders가 참조하고 있다.
-- 만약 customer를 먼저 drop 하면 orders의 데이터는 무용지물이 된다.
-- 따라서 외래키를 참조하는 테이블 먼저 삭제해야 한다.
-- 그 이후 기준 테이블을 삭제한다.






INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');




INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);



-- SELECT 실습
SELECT custid FROM customer;
SELECT custid, birth FROM customer;
SELECT birth, custid FROM customer;
SELECT custid,custname,addr,phone,birth FROM customer;
-- 모든 컬럼을 보기
SELECT * FROM customer;
-- 뽑힌 데이터의 중복을 제거하고 보기
SELECT DISTINCT addr from customer;

-- < WHERE 조건 >
-- 비교: =, <>, <, <=, >, >=
SELECT 
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합조건: AND, OR, NOT

-- 비교
-- 고객 이름이 강해린인 고객을 검색
SELECT birth FROM customer
WHERE custname = "강해린";
-- 고객 이름이 강해린이 아닌 고객을 검색
SELECT birth FROM customer
WHERE custname != "강해린";
-- 사전 순으로 박민지보다 뒤에 있는 모든 고객 검색
SELECT custname FROM customer
WHERE custname > "박민지";
-- 범위
-- 1995년이상 2000년 이하 출생 고객 검색
SELECT * FROM customer
-- WHERE birth BETWEEN "1995-01-01" and "2000-12-31";
WHERE birth >= "1995-01-01" and birth <= "2000-12-31";

-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
SELECT * from customer
-- WHERE addr IN ("대한민국 서울", "영국 런던");
WHERE addr = "대한민국 서울" OR addr = "영국 런던";


-- 주소가 서울 혹은 런던이 아닌 고객 검색
SELECT * from customer
WHERE addr NOT IN ("대한민국 서울", "영국 런던");


-- 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
SELECT * from customer
WHERE addr LIKE "미국 로스앤젤레스";
-- 주소에 '미국'이 포함되어 있는 고객 검색
-- %: 0개 이상 문자열
SELECT * from customer
WHERE addr LIKE "%미국%";
-- 고객 이름 두번째 글자가 '지'인 고객 검색
-- 참고
SELECT * from customer
WHERE custname LIKE "_지%";
-- WHERE custname LIKE "_지"; -- 첫 째 자리만 존재하고 지로 끝나는 문자열 찾기

-- 고객 이름 세번째 글자가 '수'인 고객
-- 참고
SELECT * FROM customer
WHERE custname LIKE "__수%";


-- 복합조건 (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
SELECT * FROM customer
WHERE addr LIKE "대한민국%" AND birth >= "2000-01-01";
-- 주소지가 미국이거나 영국인 고객 검색
SELECT * FROM customer
WHERE addr LIKE "미국%" OR addr LIKE "영국%";
-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
-- 마지막 자리라는 것을 체크하기 위해 최소 앞에 하나의 글자가 존재해야 한다.
SELECT * FROM customer
WHERE phone NOT LIKE "%_4"; 

SELECT COUNT(*)
FROM customer
WHERE phone NOT LIKE "%4";

-- 최연소자
SELECT MAX(birth)FROM customer;
-- 최연장자
SELECT MIN(birth)FROM customer;



