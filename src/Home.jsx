function Home (props){
    return(
        <>
        <h1>Car Collection</h1>
        <div className="container">
            {props.car.map((item)=>(
                <div className="card" key={item.id}>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name}/>
                    <h3>{item.model}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            ))}

        </div>
        </>
    )
}

export default Home;