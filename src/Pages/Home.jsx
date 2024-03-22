import React from "react";

function Home() {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid  grid-two-cols ">
                        <div className="hero-content">
                            <h1>welcome to the Mern series</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nulla, quis rem? Accusamus,
                                corporis magni. Sint nam, ullam blanditiis
                                officia possimus natus vitae delectus ratione.
                                Provident mollitia fuga dicta modi vel! Lorem
                                ipsum dolor sit amet consectetur adipisicing
                                elit. Atque aperiam blanditiis deserunt, totam
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect Now</button>
                                </a>
                                <a href="/Services">
                                    <button className="btn  secondary-btn ">
                                        learn more
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* her images */}
                        <div className="hero-image">
                            <img
                                src="/images/home.png"
                                alt=""
                                width="400"
                                height="500"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
