const style ={

   header: {
      height: "80px",
      background: "#222",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 50px"
    },

    img: {
      width: "150px",
      height: "150px",
      objectFit: "contain"
    },

    nav: {
      display: "flex",
      gap: "30px"
    },

    a: {
      color: "white",
      textDecoration: "none",
      fontSize: "18px"
    }
};
function Header(){
    return(
        <header style={style.header}>
            <img src="/logo.png" alt="car logo" style={style.img} />
            <nav style={style.nav}>
                <a href="#" style={style.a}>Home</a>
                <a href="#"style={style.a}>About</a>
                <a href="#"style={style.a}>Contact Us</a>
                <a href="#"style={style.a}>Service</a>
            </nav>
        </header>
    )
}

export default Header;