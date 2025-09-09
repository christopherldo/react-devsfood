# DevsFood - React Food Delivery App

![React](https://img.shields.io/badge/React-17.0.2-blue.svg)
![Redux](https://img.shields.io/badge/Redux-4.1.0-purple.svg)
![Styled Components](https://img.shields.io/badge/Styled--Components-5.2.3-pink.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A modern and responsive food delivery application built with React, Redux, and Styled Components. This project provides a complete food ordering experience with category browsing, product search, cart management, and user authentication.

## 🚀 Features

- **Product Catalog**: Browse food items organized by categories
- **Search Functionality**: Find specific products with real-time search
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Pagination**: Navigate through product pages efficiently
- **Responsive Design**: Optimized for desktop and mobile devices
- **State Management**: Persistent cart state using Redux and Redux Persist
- **User Authentication**: Protected routes for orders and profile pages
- **Interactive UI**: Tooltips and modals for enhanced user experience

## 🛠️ Technologies Used

### Frontend
- **React** (17.0.2) - UI library
- **React Router DOM** (5.2.0) - Client-side routing
- **Redux** (4.1.0) - State management
- **Redux Persist** (6.0.0) - Persistent state storage
- **Styled Components** (5.2.3) - CSS-in-JS styling
- **React Tooltip** (4.2.21) - Interactive tooltips

### Development Tools
- **React Scripts** (5.0.1) - Build and development tools
- **ESLint** with Airbnb configuration - Code linting
- **Testing Library** - Unit testing utilities

### API Integration
- **Query String** (qs) - URL parameter handling
- RESTful API integration with B7Web DevsFood API

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Cart/            # Shopping cart component
│   ├── CategoryItem/    # Category display component
│   ├── Header/          # Application header
│   ├── MenuItem/        # Navigation menu items
│   ├── Modal/           # Modal dialog component
│   ├── ModalProduct/    # Product details modal
│   ├── ProductItem/     # Product display component
│   └── PrivateRoute.js  # Protected route wrapper
├── pages/
│   └── HomeScreen/      # Main application screen
├── reducers/            # Redux reducers
│   ├── CartReducer.js   # Cart state management
│   ├── UserReducer.js   # User state management
│   └── index.js         # Combined reducers
├── App.js               # Main application component
├── AppStyled.js         # Global styled components
├── api.js               # API service functions
├── index.js             # Application entry point
└── store.js             # Redux store configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/christopherldo/react-devsfood.git
   cd react-devsfood
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🔧 Configuration

The application uses environment variables for configuration:

- `ESLINT_NO_DEV_ERRORS=true` - Disables ESLint errors in development

## 🌐 API Integration

The application integrates with the B7Web DevsFood API:

- **Base URL**: `https://api.b7web.com.br/devsfood/api`
- **Endpoints**:
  - `GET /categories` - Fetch product categories
  - `GET /products` - Fetch products with filtering and pagination

## 🎨 UI/UX Features

- **Responsive Design**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **Modal Dialogs**: Product details and cart management
- **Tooltips**: Contextual help and information
- **Loading States**: User feedback during API calls

## 🔒 Authentication

The application includes protected routes for:
- Order history (`/orders`)
- User profile (`/profile`)

These routes require user authentication and redirect to login if not authenticated.

## 🛒 Cart Management

The shopping cart features:
- Add products with quantity selection
- Increase/decrease item quantities
- Remove items from cart
- Persistent storage across browser sessions
- Real-time total calculation

## 📱 Browser Support

### Production
- Browsers with >0.2% market share
- Not dead browsers
- Excludes Opera Mini

### Development
- Latest Chrome version
- Latest Firefox version
- Latest Safari version

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Christopher Leonardo**
- GitHub: [@christopherldo](https://github.com/christopherldo)

## 🙏 Acknowledgments

- [B7Web](https://b7web.com.br/) for providing the API
- React community for excellent documentation
- Contributors and testers

---

**Built with ❤️ using React and modern web technologies**
