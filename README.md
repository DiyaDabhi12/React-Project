# 🚗 Car Collection - React JS Project

## 📌 Project Overview

Car Collection is a React JS based web application that displays a collection of popular cars in a clean and responsive card layout.

The project contains a header with navigation, a car collection section displaying car details, and a footer.

Each car card displays:

* Car Name
* Car Model
* Car Image
* Car Description
* Car Price

---

## ✨ Features

* 🚘 Display multiple cars
* 🖼️ Car images
* 📋 Car model and description
* 💰 Car price
* 📱 Responsive design
* 🧩 React Components
* 🔄 Data passing using Props
* 🎨 Custom CSS styling
* 📌 Header and Footer components

---

## 🛠️ Technologies Used

* React JS
* JavaScript
* HTML
* CSS
* JSX
* Vite

---

## 📂 Project Structure

```text
Project-1/
│
├── public/
│   └── logo.png
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── Home.jsx
│   ├── header.jsx
│   ├── footer.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### 1. Open the project folder

Open the project in VS Code.

### 2. Install dependencies

Open the terminal and run:

```bash
npm install
```

This will install all the required packages.

---

## ▶️ Run the Project

Start the development server using:

```bash
npm run dev
```

After running the command, Vite will provide a local URL.

Open that URL in your browser to view the project.

---

## 🧩 Components

### Header Component

The `Header` component contains:

* Website logo
* Home
* About
* Contact Us
* Service

### Home Component

The `Home` component displays the complete car collection.

Car data is passed from `App.jsx` to `Home.jsx` using props.

```jsx
<Home car={car} />
```

The car list is displayed using the JavaScript `map()` method.

```jsx
props.car.map((item) => (
  <div className="card" key={item.id}>
    <h2>{item.name}</h2>
    <img src={item.image} alt={item.name} />
    <h3>{item.model}</h3>
    <p>{item.description}</p>
    <p>{item.price}</p>
  </div>
))
```

### Footer Component

The `Footer` component displays the copyright information at the bottom of the website.

---

## 🚘 Car Collection

The project contains 15 cars:

1. Tata Punch
2. Maruti Suzuki Fronx
3. Hyundai Creta
4. Tata Nexon
5. Mahindra Scorpio
6. Kia Seltos
7. Maruti Suzuki Brezza
8. Maruti Suzuki Victoris
9. Hyundai Venue
10. Mahindra Thar
11. Maruti Suzuki Dzire
12. Maruti Suzuki Swift
13. Maruti Suzuki Ertiga
14. Maruti Suzuki Baleno
15. Mahindra XUV 3XO

---

## 🎨 Styling

The project uses custom CSS to style:

* Header
* Navigation bar
* Car cards
* Car images
* Grid layout
* Footer
* Responsive layout

The car cards are displayed using CSS Grid.

```css
.container {
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
```

---

## 📱 Responsive Design

The website can be made responsive for different screen sizes.

### Desktop

3 car cards are displayed in each row.

### Tablet

2 car cards are displayed in each row.

### Mobile

1 car card is displayed in each row.

---

## 📚 React Concepts Used

This project demonstrates:

* Functional Components
* JSX
* Props
* Array `map()`
* `key` property
* Import and Export
* Component-based architecture
* CSS styling
* Responsive design

---

## 🚀 Future Improvements

The following features can be added in the future:

* 🔍 Search Cars
* 🔽 Price Filter
* 🚘 Car Category Filter
* ❤️ Favorite Cars
* 📄 Car Details Page
* 🌙 Dark Mode
* 📱 Mobile Navigation
* 🔐 Login and Registration
* 🛒 Car Booking
* ⭐ Car Rating
* 🔄 Sort Cars by Price
* 📊 Car Comparison

---

## 👩‍💻 Author

**Diya Dabhi**

---

## 📄 License

This project is created for learning and educational purposes.

---

## ⭐ Conclusion

Car Collection is a simple React JS project created to practice React components, props, JSX, JavaScript arrays, CSS Grid, and responsive web design.

OUTPUT :
![Project Screenshot](./Screenshot%20(78).png)
![Project Screenshot](./Screenshot%20(80).png)


video:
https://drive.google.com/file/d/1FB0Dkl4X7Rwg1vpvCb6rPsNl9RKKigOE/view?usp=sharing"# React-Project" 
