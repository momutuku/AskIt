# Contact Form in Angular and Laravel
A simple contact form to allow users to send inquiries to the support team

## Technologies used
    - Angular js for the frontend
    - Laravel for the backend
    - Sqlite for data storage

## Requirements
    - [Node js, NPM](https://nodejs.org/en/download) version 18.14.0
    - [Angular CLI](https://angular.io/cli) version 17.3.6
    - [PHP](https://www.php.net/manual/en/install.php) version 8.1
    - [Composer](https://getcomposer.org/download/) version 2.6.1

## Implemented endpoints



## Dependencies
### Frontend
### Backend


## How to run the application
1. Clone this repository: `git clone https://github.com/momutuku/AskIt.git`
   ### Backend
        1. Navigate to the folder named backend
        2. Make a copy of the file `env.example` and rename it to `.env`
        3. By default the project runs on sqlite database. To use MySQL uncomment the database section and fill in required details
        4. Open the command prompt and run `composer install` to install required packages
        5. Run `php artisan migrate` to create all database tables. Incase the sqlite database does not exist select yes when prompterd to create the database file.
        6. Run `php artisan serve` to start the server
        7. Endpoints can be accessed through port 8000 on localhost http://127.0.0.1:8000
   ### Frontend
        1. Navigate to the folder named frontend
        2. Run `npm install` to install all required packages
        3. Run `npm start` to start the application
        4. The site runs on port 4200. I  can be accessed through http://localhost:4200