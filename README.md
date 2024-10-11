# Food Delivery App

A food delivery web application built using Vite and React, allowing users to browse a menu, add dishes to their cart, make payments via Stripe, and track their orders in real-time. The app also features an admin panel for managing dishes and tracking orders.

## Features

- **User Registration and Authentication**: Users can sign up and log in to access personalized features.
- **Menu Display**: A dynamic menu showcasing various dishes available for order.
- **Cart Functionality**: Users can add dishes to their cart, modify the quantity, and remove items.
- **Checkout**: Integration with Stripe for secure payments.
- **Order Tracking**: Users can track the status of their order and delivery in real-time.
- **Admin Panel**:
  - Add new dishes to the menu.
  - View a list of all available dishes.
  - Manage and track all user orders, including editing the delivery status.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14+)
- npm or Yarn
- Stripe account for payment integration

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository-url/OrielsFoodApp.git

2. Navigate to the project directory:
   cd OrielsFoodApp
   cd backend and continue from steps 3 to 6
   cd frontend and continue from steps 7 to 8
   cd admin and continue from steps 9 to 10

3. Install dependencies for backend:
    npm install
4. Set up environment variables for Stripe (create a .env file in the root directory):
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET = your_jwt_secret_key
DATABASE_URL = your_database_connection_string

5. Start the backend server:
node server.js

6. The server will be listening at the port:
http://localhost:4000

7. Install dependencies for frontend:
npm install

8. Start the development server
npm run dev

9. Install dependencies for admin panel:
npm install

10. Start the development server:
npm run dev

