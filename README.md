



This is a simple Car Management System implemented using both a Node.js server and a React application. The system allows you to view a list of cars and add new cars to the list.


Server Setup-

The server is implemented using Node.js and Express. It serves as the backend for the Car Management System, providing endpoints for retrieving and adding car data.

Port: The server runs on port 3000, which can be configured using the PORT environment variable.


Middleware-

The server uses the following middleware:

CORS (Cross-Origin Resource Sharing): The cors middleware is used to enable cross-origin requests, allowing the React frontend to make requests to the server from a different domain.


Endpoints-

GET /: This endpoint serves an HTML page that welcomes users to the Car Management System. Users can click a button to view the list of cars.
GET /api/v1/cars: This endpoint returns a list of sample car data in JSON format. Sample car data is provided as an array of objects.
POST /api/v1/cars: This endpoint allows users to add a new car to the list of cars. It expects the new car's details in the request body (model, year, and color). If the required data is provided, the new car is added to the sample car data.
React Application


App Component-

The frontend is implemented as a React application. The main component, App, allows users to view the list of cars and add new cars to the list.



Component State-

The App component maintains the following state variables:

sampleCars: An array to store the list of cars retrieved from the server.
newCar: An object to store the details of the new car being added (model, year, color).


Component Methods-

fetchCarData(): A method to fetch car data from the server when the component mounts.
handleAddCar(): An event handler to add a new car to the list of cars when the "Add Car" button is clicked. It makes an API request to the server to add the new car.
handleInputChange(): An event handler to update the newCar state object as the user enters data into input fields.


Rendering-

The App component renders the following sections:

A title welcoming users to the Car Management System.
An input section to add a new car, including model, year, and color fields.
A button to add the new car to the list.
A section displaying the list of cars with their model, year, and color.

# mw5miniproject
