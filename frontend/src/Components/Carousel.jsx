function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="seat.jpg" className="d-block w-100" alt="My first slide" style={{width:'100px', height:'500px'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Luxury That Flies With You</h5>
                            <p>Step Into A World Where Every Details Is Crafted For you.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="airport.jpg" className="d-block w-100" alt="My second slide" style={{width:'100px', height:'500px'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Premium Departures Worldwide</h5>
                            <p>From our luxury International Terminal To Over 150 Destinations.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="window.jpg" className="d-block w-100" alt="My third slide" style={{width:'100px', height:'500px'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Above The Clouds,Beyond Expectations</h5>
                            <p>Watch The Sunrise Paint the Clouds in gold.And Every Moment in The Air Becomes A Memory.</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousel