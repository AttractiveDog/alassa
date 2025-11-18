import logo from "./logo.svg";
import "./App.css";
import Cubes from './components/Cubes';
import CardNav from './components/CardNav';
import BlurText from './components/BlurText';
import BusinessTypeSelection from './components/TypeCard';

const navItems = [
  {
    label: "Products",
    bgColor: "#5227FF",
    textColor: "#fff",
    links: [
      { label: "Feature 1", href: "#", ariaLabel: "Navigate to Feature 1" },
      { label: "Feature 2", href: "#", ariaLabel: "Navigate to Feature 2" },
      { label: "Feature 3", href: "#", ariaLabel: "Navigate to Feature 3" }
    ]
  },
  {
    label: "Solutions",
    bgColor: "#fff",
    textColor: "#000",
    links: [
      { label: "Solution 1", href: "#", ariaLabel: "Navigate to Solution 1" },
      { label: "Solution 2", href: "#", ariaLabel: "Navigate to Solution 2" },
      { label: "Solution 3", href: "#", ariaLabel: "Navigate to Solution 3" }
    ]
  },
  {
    label: "Resources",
    bgColor: "#060010",
    textColor: "#fff",
    links: [
      { label: "Documentation", href: "#", ariaLabel: "Navigate to Documentation" },
      { label: "Blog", href: "#", ariaLabel: "Navigate to Blog" },
      { label: "Support", href: "#", ariaLabel: "Navigate to Support" }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <div className="cubes-background">
        <Cubes
          gridSize={13}
          maxAngle={60}
          radius={4}
          borderStyle="2px dashed #5227FF"
          faceColor=" #fff"
          rippleColor="#fff"
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
        />
      </div>
      <CardNav
        logo={logo}
        logoAlt="Alassa Logo"
        items={navItems}
        baseColor="rgba(255, 255, 255, 0.95)"
        menuColor="#000"
        buttonBgColor="#5227FF"
        buttonTextColor="#fff"
      />
      <div className="hero-section">
        <BlurText
          text="Welcome to Alassa"
          className="hero-title"
          delay={100}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
        />
        <BlurText
          text="Building the future, one cube at a time"
          className="hero-subtitle"
          delay={150}
          animateBy="words"
          direction="top"
          stepDuration={0.3}
        />
      </div>
      <div className="content-section">
        <BusinessTypeSelection />
      </div>
    </div>
  );
}

export default App;
