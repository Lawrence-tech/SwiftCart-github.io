README for SwiftCart: Streamlined Grocery Delivery

Link to the landing page : https://ngwanatuka.github.io/SwiftCart-github.io/

## Team Members

- Moses MOLEPO: Frontend Developer. Responsible for designing and implementing the user interface and user experience of the grocery delivery system.
- Lavendah KINYUA: Project Manager and Backend Developer. Responsible for project management, coordinating team efforts, and developing the backend infrastructure.
- Mohamed SENGHOR: Database Administration. Responsible for managing the database, ensuring data integrity, and implementing data security measures.

The roles have been decided based on the team members' skills and expertise, ensuring a well-rounded team capable of handling different aspects of the project.

## Overview

The SwiftCart project aims to revolutionize the grocery shopping experience by providing a streamlined and efficient grocery delivery system. With SwiftCart, users can conveniently order groceries online and have them delivered to their doorstep. The project focuses on enhancing user convenience, optimizing delivery routes, and providing a personalized shopping experience.

## Technologies

The project utilizes the following technologies:

- Languages: Python, JavaScript, HTML, CSS
- Frameworks: Flask
- Database: MySQL
- Libraries: SQLAlchemy

## Challenge Statement

The Grocery Delivery System aims to solve the problem of time-consuming and inefficient grocery shopping by providing a convenient online platform for users to order groceries and have them delivered to their doorstep. SwiftCart simplifies the process and saves time for users, allowing them to focus on their important tasks. However, it does not address issues related to supply chain management and inventory control for grocery stores.

The SwiftCart system will help busy individuals, elderly people, and those with limited mobility who find it challenging to visit physical stores regularly. It will also benefit grocery stores by expanding their customer reach and increasing sales. The project is not specifically dependent on a particular locale and can be implemented in any area with adequate delivery infrastructure.

## Risks

Technical risks:
- Potential issues may arise with integrating third-party APIs, such as Google Maps API and Twilio API. Safeguards include thorough testing and having backup plans in case of API failures or downtime. Docker will be used to build a specific environment to minimize issues caused by differences in underlying operating systems.
- Non-technical risks:
- Delays may occur due to unforeseen circumstances, such as team members' availability or external factors. Strategies to prevent negative outcomes involve effective communication, contingency planning, and setting realistic timelines.

## Infrastructure

- Branching and merging: The team will follow the GitHub flow for branching and merging. Feature branches will be used for individual tasks, and merging will occur into the main branch after code reviews and testing.
- Deployment strategy: The project will be populated through an administrative interface where authorized personnel can add, modify, or remove grocery items, prices, and availability.
- Testing: The team will utilize automated testing frameworks like Jest for frontend testing and other testing tools for backend testing. Continuous integration tools like Travis CI can be employed for automated testing during the development process.

## Existing Solutions

- Online Marketplaces: Amazon, eBay, etc., have a large customer base and an organized and accessible business.
- Delivery Apps: Several web/mobile solutions specialize in online delivery in multiple fields, especially grocery. Examples include Jumia, widely used in Africa.
- Local Delivery Services: In recent years, there has been a large influx of young people in the field of delivery. Many start by finding a motorcycle, doing optional modifications, and starting work.

By leveraging technology, SwiftCart aims to transform the grocery shopping experience and make it more convenient and efficient for users.

## Architecture

### APIs

- **GET /api/products**
  - Description: Retrieves a list of available grocery products.
  - Response:

 Returns a JSON array containing product information, including name, description, price, and availability.

- **GET /api/product/{id}**
  - Description: Retrieves the details of a specific product.
  - Parameters: {id} represents the unique identifier of the product.
  - Response: Returns a JSON object containing the details of the requested product.

- **POST /api/orders**
  - Description: Places a new order for groceries.
  - Request: Expects a JSON object with the order details, including the selected products, quantities, delivery address, and payment information.
  - Response: Returns a JSON object confirming the order placement and providing the order ID.

- **GET /api/orders/{id}**
  - Description: Retrieves the details of a specific order.
  - Parameters: {id} represents the unique identifier of the order.
  - Response: Returns a JSON object containing the details of the requested order, including the order products, quantities, delivery status, and estimated delivery time.

- **PUT /api/orders/{id}/cancel**
  - Description: Cancels a specific order.
  - Parameters: {id} represents the unique identifier of the order.
  - Response: Returns a JSON object confirming the cancellation of the order.

- **GET /api/orders**
  - Description: Retrieves a list of all orders placed by the user.
  - Parameters: None
  - Response: Returns a JSON array containing information about the user's orders, including order ID, products, quantities, delivery status, and timestamps.

- **GET /api/delivery/status**
  - Description: Retrieves the current status of the delivery service.
  - Response: Returns a JSON object containing the status of the delivery service, such as operational or under maintenance.

These API routes will enable web clients to interact with the web server, allowing users to browse and search for products, place orders, track order status, and manage their account.

## Data Model

The data model includes the following entities:

- Customers: Stores customer information such as their unique ID, name, email, phone number, and shipping address.
- Orders: Stores order information such as the unique order ID, associated customer ID, total amount, delivery address, and order date.
- Products: Stores information about available products, including a unique product ID, name, description, price, and image URL.
- Order Details: Represents the relationship between orders and products, including the order ID, product ID, quantity, and the unit price for each product within an order.

This data model allows for efficient storage and retrieval of customer information, order details, and product information, facilitating the smooth operation of the SwiftCart grocery delivery system.

## User Stories

- As a user, I want to have the ability to search for specific products or browse through different categories so that I can quickly find the items I am looking for without having to navigate through the entire catalog.
- As a user, I want to have a seamless and secure payment process that allows me to choose from various payment options like mobile money transfer or credit card.
- As a user, I want to have the flexibility to schedule my deliveries for a specific date and time so that I can choose a time that fits my schedule.
- As a user, I want to have access to my shopping history, including past orders and receipts.

Please note that this README provides a comprehensive overview of the SwiftCart project, including team members, technologies, challenges, infrastructure, APIs, data model, and user stories. It serves as a guide for understanding the project and its objectives.

