import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';

// Load environment variables from a .env file into process.env
dotenv.config();

// Initialize your application by calling the function returned by the express module
const app = express();

// Declare routes that people can visit on the application

// White Page
app.get('/', (req: Request, res: Response): void => {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `);
});

// Color Page
app.get('/:color', (req: Request, res: Response): void => {
    const color: string = req.params.color; // Type assertion for color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${color};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${color};">${color.charAt(0).toUpperCase() + color.slice(1)} Page</h1>
        </body>
    `);
});

// Listen to a port number defined by a local environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
