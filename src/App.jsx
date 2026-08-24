import './App.css'
import Home from './Home'
import Header from './header';
import Footer from './footer';


  let car = [
    {
      id: 1,
      name: "Tata Punch",
      model: "Punch 2026",
      description: "Compact SUV, city driving mate practical ane popular",
      price: "₹5.70 Lakh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOyi1jAP0pV5EjC0aLiuHF29xI4WNuOWweDQvDn5C1A&s=10"
    },
    {
      id: 2,
      name: "Maruti Suzuki Fronx",
      model: "Fronx 2026",
      description: "Stylish crossover SUV with modern design",
      price: "₹6.85 Lakh",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLIl8gJY8HhxwtyuGgMD3Q__Ugt9GJSHAqv8w2baNHA&s=10"
    },
    {
      id: 3,
      name: "Hyundai Creta",
      model: "Creta 2026",
      description: "Premium mid-size SUV with comfortable interior",
      price: "₹10.79 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuFbH6ynh1tvUTkF9EjgG8Ba8jQPjwm-mUa88IZIW2Q&s=10"
    },
    {
      id: 4,
      name: "Tata Nexon",
      model: "Nexon 2026",
      description: "Popular compact SUV with modern features",
      price: "₹7.40 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtxN8yLaNcpaZzYTbb0JgsovNhMLwZOez3BL4Ftp2ng&s=10"
    },
    {
      id: 5,
      name: "Mahindra Scorpio",
      model: "Scorpio 2026",
      description: "Strong SUV with rugged and powerful design",
      price: "₹13.37 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTbTAyFVLqpJdWt17AaBVzeZ3ItHsoYEHVLZFLMCn1Q&s=10"
    },
    {
      id: 6,
      name: "Kia Seltos",
      model: "Seltos 2026",
      description: "Feature-rich mid-size SUV with premium design",
      price: "₹10.99 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQeQAGcNpzF3JCkCZMChxszDWBuwt7WPPo9S7_lT7Kg&s=10"
    },
    {
      id: 7,
      name: "Maruti Suzuki Brezza",
      model: "Brezza 2026",
      description: "Compact SUV with practical family-focused design",
      price: "₹7.40 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KOkIreUSGdjf58_YzTAaIjkW5yPxwoBTlVLOUUNhvg&s=10"
    },
    {
      id: 8,
      name: "Maruti Suzuki Victoris",
      model: "Victoris 2026",
      description: "Modern SUV with stylish design and advanced features",
      price: "₹10.50 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJ4ZBmLnLDM6maqD2MN5JvitgWq0WXB-KGl43SyeXCg&s=10"
    },
    {
      id: 9,
      name: "Hyundai Venue",
      model: "Venue 2026",
      description: "Compact SUV with modern features and stylish design",
      price: "₹8.00 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG7PGNiTPZjVOuoO0PI_b-IOMFbMGq5WvdoKCF7D44g&s=10"
    },
    {
      id: 10,
      name: "Mahindra Thar",
      model: "Thar 2026",
      description: "Popular lifestyle SUV with strong off-road capability",
      price: "₹10.32 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dnx_CqTeg9UTYO9k-f6JiZuF0EuaVgJHEwCr2f8WDQ&s=10"
    },
    {
      id: 11,
      name: "Maruti Suzuki Dzire",
      model: "Dzire 2026",
      description: "Popular compact sedan for comfortable everyday driving",
      price: "₹6.26 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0WXN3AUVubORZ7GIN8yudmC6sg983vV60VJVqjjebA&s=10"
    },
    {
      id: 12,
      name: "Maruti Suzuki Swift",
      model: "Swift 2026",
      description: "Sporty and practical hatchback for daily driving",
      price: "₹5.84 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfR72M-ES_bSeVAkR4JOfjKKXasIXmE4m3JKxfrpWIig&s=10"
    },
    {
      id: 13,
      name: "Maruti Suzuki Ertiga",
      model: "Ertiga 2026",
      description: "Spacious family MPV with comfortable 7-seat capacity",
      price: "₹8.90 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsxJpu18McSy2LMkuUsOPkuGMIFcp8syRSkyCe3JQDw&s=10"
    },
    {
      id: 14,
      name: "Maruti Suzuki Baleno",
      model: "Baleno 2026",
      description: "Premium hatchback with spacious cabin and modern features",
      price: "₹5.99 Lakh",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ajI30-xlDMXqbOLIpLtyqrQCw664l1hQrWR8F7n0-A&s=10"
    },
    {
      id: 15,
      name: "Mahindra XUV 3XO",
      model: "XUV 3XO 2026",
      description: "Feature-rich compact SUV with strong performance",
      price: "₹7.79 Lakh",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvYASEAoBBVP8JUnOfjrqcZfxMGEuyypV4wa03NgZRA&s=10"
    }
  ];

function App() {
  return (
    <>
    <Header/>
    <Home car={car}/>
    <Footer/>
    </>
  )
}

export default App
