



const Carousel = () => {
    return(
        <div className="container">
        <div id="demo" className = "carousel slide" data-ride="carousel">
  <ul className = "carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className = "active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className = "carousel-inner">
    <div className = "carousel-item active">
      <img src="https://images.unsplash.com/photo-1636690581110-a512fed05fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Los Angeles" width="1100" height="500"/>
      <div className = "carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>   
    </div>
    <div className = "carousel-item">
      <img src="https://i.pinimg.com/originals/a1/76/71/a176716205951f374b88a00d77d89a3e.jpg" alt="Chicago" width="1100" height="500"/>
      <div className = "carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div>
    <div className = "carousel-item">
      <img src="https://images.unsplash.com/photo-1636690598773-c50645a47aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="New York" width="1100" height="500"/>
      <div className = "carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
  </div>
  <a className = "carousel-control-prev" href="#demo" data-slide="prev">
    <span className = "carousel-control-prev-icon"></span>
  </a>
  <a className = "carousel-control-next" href="#demo" data-slide="next">
    <span className = "carousel-control-next-icon"></span>
  </a>
</div>
</div>
    );
}

export default Carousel;