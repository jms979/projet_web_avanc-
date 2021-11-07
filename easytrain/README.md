# easytrain

The project should be pulled from the Main branch.

## Project setup
```
cd easytrain/

npm install
```

## Project run
```
npm run start
```

# DataBase Creation (PostgreSQL) :

```
CREATE DATABASE "easytrain"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;
    
CREATE TABLE public.users
(
    id serial NOT NULL,
    email text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.users
    OWNER to postgres;
```