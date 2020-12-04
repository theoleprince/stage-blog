# blog
This is a standalone application for blog, its formed by Laravel Back-End and Angular Front-End.

## Back-End Laravel

1. Move yourself on backend directory
```
$ cd blog
```

2. Install all dependencies
```
$ composer install
```

3. Generate the app key
```
$ php artisan key:generate
```

4. Copy `.env.example` to `.env` and edit the file according to your environment
```
$ cp .env.example .env
```

5. Run migrations to set up tables into databse and fill them up with initials datas (seed)
```
$ php artisan migrate
```
6. Start the app on the default port (:8000)
```
$ php artisan serve
```

## Front-End Angular

1. Move yourself on frontend directory
```
$ cd blog-frontend
```

2. Install all dependencies
```
$ npm install
```

3. Start the app on the default port (:4200)
```
$ ng serve
```
