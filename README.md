# ORM-E-Commerce-Back-End

## Description

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. This project involved modifying code to build the back end for an e-commerce site. The working Express.js API was configured to use sequelize to interact with a MySQL database. In order to support the company, in competing with other e-commerce companies, it is important that the website uses the latest technologies.

## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Usage
Once the user has run the code in the terminal; they should then navigate to Postman or insomnia and search the following URL http://localhost:3001 and add the following routes in accordance with what data they would like to see or edit:
```
/categories 
/products 
/tags
```
Then the user can use the GET method to read and recieve the data, the POST method to create data, the PUT method to update data and the DELETE method to remove data.

## Installation
To install this application please add your username and password into a .env file for your own protection, please use .env.EXAMPLE file for support. Then type the following demands in the terminal:
```md
npm i
mysql -u root -p
```
Then when prompted enter your mySQL password. Please ensure you have properly logged into your mySQL before continuing.
```md
source db/schema.sql
quit;
```
```md
npm run seed
npm run start
```
Finally, the code can be tested and data can be created, read, updated and deleted with the use of applications such as Postman or Insomnia.

## Walkthrough video