# Framer Motion Tutorial

## 📌 Overview

This project is a **Framer Motion tutorial** aimed at helping developers improve their animation skills in React. It covers **basic and advanced animation techniques**, including gestures, animation controls, view-based animations, and scroll-based animations.

## 🚀 Tech Stack

- **React** - For building the UI components
- **Framer Motion** - For animations and transitions

## 📂 Folder Structure

```
project-root/
│-- src/
│   ├── components/
│   │   ├── BasicsOfMotion.js
│   │   ├── Gestures.js
│   │   ├── AnimationControls.js
│   │   ├── ViewBasedAnimation.js
│   │   ├── ScrollAnimation.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│-- package.json
│-- README.md
```

## 🎯 Features Covered

1. **Basics of Motion** - Learn how to create simple animations with Framer Motion.
2. **Gestures** - Implement hover, tap, and drag gestures.
3. **Animation Controls** - Control animations dynamically with custom triggers.
4. **View-Based Animations** - Trigger animations based on viewport visibility.
5. **Scroll Animations** - Animate elements based on scroll progress.

## 🛠 Installation and Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/SteeveSticks/FRAMER-MOTION-TUTORIAL.git
cd framer-motion-tutorial
```

### 2️⃣ Install Dependencies

```sh
npm install
# or
yarn install
```

### 3️⃣ Start the Project

```sh
npm start
# or
yarn start
```

## 🖥️ Usage

Open `src/App.js` and uncomment the animation components you want to test.
For example, to enable **gesture animations**, update `App.js` like this:

```jsx
import Gestures from "./components/Gestures";
<Gestures />;
```

## 🔥 Example: Adding a Simple Animation

Inside `BasicsOfMotion.js`, you can animate an element like this:

```jsx
import { motion } from "framer-motion";

const BasicsOfMotion = () => {
  return (
    <motion.div animate={{ x: 100 }} transition={{ duration: 0.5 }}>
      Move me!
    </motion.div>
  );
};

export default BasicsOfMotion;
```

## 📝 Notes

- This tutorial does **not** have a deployed link yet.
- The animations are modularized in separate components for easy understanding.

## 🌟 Contributing

Feel free to **fork** this project and enhance it! PRs are welcome.

## 📄 License

This project is open-source under the **MIT License**.

---

🔗 **Follow for more tutorials!** 🚀
