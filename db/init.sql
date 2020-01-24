create table products (
    id serial primary key,
    name varchar(200),
    price integer,
    image text
);

select * from products;