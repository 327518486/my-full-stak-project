CREATE DATABASE GamesShop
--��������
CREATE TABLE Category
(
CategoryId INT PRIMARY KEY IDENTITY(100,1),
CategoryName VARCHAR(30)
)
--����� ������
insert into Category
VALUES('����� �����')

insert into Category
VALUES('�����')

insert into Category
VALUES('����� �����')

insert into Category
VALUES('����� ������')

insert into Category
VALUES('����� �����')

--������
CREATE TABLE Games
(
GameID INT PRIMARY KEY IDENTITY(1,1),
GameName VARCHAR(30),
GameCategory INT FOREIGN KEY REFERENCES Category,
GamePrice FLOAT,
GameImg VARCHAR(225),
GameAmount INT 
)
--����� ������
insert into Games
VALUES('�������� �����',104,89.90,NULL,30)

insert into Games
VALUES('�����',101,70.00,NULL,45)

insert into Games
VALUES('������� �����',101,25,NULL,20)

insert into Games
VALUES('���� ����� ',103,10.90,NULL,15)

insert into Games
VALUES('����� ����� ',102,95,NULL,15)

--������
CREATE TABLE Customer
(
CustID INT PRIMARY KEY IDENTITY,
CustName VARCHAR(30),
CustPassWord VARCHAR(30),
--CustCreditDetails VARCHAR(30),
CreditNum VARCHAR(30) check(len(CreditNum)=19) ,--16 �����
Cvc VARCHAR(3),--3 ����� ��� ������
VolidThru VARCHAR(10),--����
)
--����� ������
INSERT INTO Customer 
VALUES('���� ����','987654321','2154 1122 5858 9696','369','02/29')

INSERT INTO Customer 
VALUES('���� ���','123456789','1111 2222 3333 4444','567','05/27')

INSERT INTO Customer 
VALUES('���� ���','741852963','2154 1122 5858 9696','753','10/27')

INSERT INTO Customer 
VALUES('��� ����','147258369','2154 1122 5858 9696','654','06/29')

INSERT INTO Customer 
VALUES('���� �����','159628473','9874 1236 8855 9966','123','02/28')

--����
CREATE TABLE Buy
(
BuyId INT PRIMARY KEY IDENTITY(1000,1),
CustID INT FOREIGN KEY REFERENCES Customer,
BuyDaty DATE,
BuySum float
)
--����� ������
INSERT INTO Buy--1000
VALUES(1,GETDATE(),70)

INSERT INTO Buy--1001
VALUES(2,'12/11/2024',105.9)

INSERT INTO Buy--1002
VALUES(3,'01/12/2024',50)

--INSERT INTO Buy--1003
--VALUES(4,'20/11/2024',89.9)

INSERT INTO Buy--1004
VALUES(5,'10/12/2024',95)

--���� ����
CREATE TABLE SaleDetails
(
SaleCode INT PRIMARY KEY IDENTITY(1,1),
BuyId INT FOREIGN KEY REFERENCES Buy,
GameID INT FOREIGN KEY REFERENCES Games,
SaleAmount INT
)
--����� ������
INSERT INTO SaleDetails
VALUES(1000,2,1)

INSERT INTO SaleDetails
VALUES(1001,5,1)

INSERT INTO SaleDetails 
VALUES(1001,4,1)

INSERT INTO SaleDetails
VALUES(1002,3,2)--50

--INSERT INTO SaleDetails
--VALUES(1003,1,1)--89.9

INSERT INTO SaleDetails
VALUES(1004,5,1)--95
