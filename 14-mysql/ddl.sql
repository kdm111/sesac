-- Comment

-- 데이터베이스 : 데이터의 집합
-- DBMS : db를 운영 관리하는 프로그램 EX)mysql
-- 테이블 : 하나 이상의 열과 행으로 구성된 DB의 최소 단위
-- SQL : RDBMS에서 사용되는 언어(DB를 구축, 관리, 활용하기 위한 언어)


-- DDL (Data Definition Language)
-- DB나 테이블을 정의하는 언어

-- Database 관련 명령어
-- DB 생성

CREATE DATABASE sesac
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

-- 2. DATABASE 목록 조회
-- show databases
show databases;

-- 항상 DB로 들어가겠다고 선언이 필요하다.
-- 3. DB 사용 선언
-- db를 항상 끄고 킬 수 있다.
use sesac;

-- 4. database 삭제
DROP DATABASE sesac;

-- SQL 은 대소문자를 가리지 않는다.



-- Table 관련 명령어
-- 1. 테이블 생성
-- 제약 조건
-- NOT NULL : null을 허용하지 않음
-- AUTO_INCREMENT : 자동 숫자 증가, 테이블에 숫자를 추가할 때마다 자동으로 숫자 증가
-- PRIMARY KEY : 기본키 (중복값 x, NULL x)
-- DEFAULT 초기값 : 초기값으로 초기화
-- UNIQUE : 값의 중복을 허용하지 않음. NULL은 허용, 하나의 테이블에서 여러 번 등장 가능


CREATE TABLE product (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 현재 db에 존재하는 모든 table 확인하기
SHOW TABLES

-- 3. 테이블 구조확인
-- 테이블 컬럼 정보. (자료형, null 여부, key, 옵션 확인 가능)
DESC product

-- 4. 테이블 삭제
-- DROP TABLE 이름 : 테이블의 이름과 같은 테이블을 삭제한다.
DROP TABLE product
-- TRUNCATE TABLE 이름 : 테이블 초기화. 모든 레코드 삭제

-- ALTER : 테이블의 속성을 수정
-- 테이블을 만들었고 테이블에 데이터가 추가되었을 때 컬럼 정보가 바뀌었을 때 

-- 컬럼 추가
ALTER TABLE product ADD add_date Date;

-- 컬럼 수정
-- 컬럼 속성 수정
ALTER TABLE product MODIFY add_date INT;
-- 컬럼 이름 수정
ALTER TABLE product CHANGE add_date add_date2 INT;

-- 컬럼 삭제
ALTER TABLE product DROP add_date2;



