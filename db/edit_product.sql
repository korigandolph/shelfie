update products
set (name, price, image)=($2, $3, $4)
where id = $1;