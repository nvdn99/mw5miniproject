const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sample car data
const sampleCars = [
 { model: 'Car Model 1', year: 2020, color: 'Red' },
 { model: 'Car Model 2', year: 2021, color: 'Blue' },
 { model: 'Car Model 3', year: 2019, color: 'Green' },
];

// Serve the HTML page
app.get('/', (req, res) => {
 const htmlContent = `
   <!DOCTYPE html>
   <html>
     <head>
       <title>Car Management</title>
     </head>
     <body>
       <h1>Welcome to the Car Management System</h1>
       <p>This is a simple demonstration of a car management system.</p>
       <form action="/api/v1/cars" method="GET">
         <button type="submit">View Cars</button>
       </form>
       <h2>Add a New Car</h2>
       <form action="/api/v1/cars" method="POST">
         <label for="model">Model:</label>
         <input type="text" id="model" name="model" required><br>
         <label for="year">Year:</label>
         <input type="number" id="year" name="year" required><br>
         <label for "color">Color:</label>
         <input type="text" id="color" name="color" required><br>
         <button type="submit">Add Car</button>
       </form>
     </body>
   </html>
 `;
 res.status(200).send(htmlContent);
});

// Get a list of cars as JSON
app.get('/api/v1/cars', (req, res) => {
 res.status(200).json(sampleCars);
});

// Add a new car
app.post('/api/v1/cars', (req, res) => {
 let formData = req.body;

 // Ensure required data is provided
 if (!formData.model || !formData.year || !formData.color) {
   res.status(400).json({ error: 'Missing required data' });
   return;
 }

 // Add the new car to the sampleCars array
 sampleCars.push(formData);

 res.status(201).json(formData);
});

// Start the server
app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});
