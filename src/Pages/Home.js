import React from 'react'
import fish from '../assets/img/fish.jpg'
import breadCombo from '../assets/img/breadCombo.jpg'
import salad from '../assets/img/salad.jpg'
import spag from '../assets/img/spag.jpg'
import about from '../assets/img/about.jpg'


const Home = () => {
    return (
        <div className='container'>
            <section className='hero-section'>
                <div className='details-container'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <img src={fish} alt='fish' />
            </section>
            <section className='week-special'>
                <div className='week-special-text-container'>
                    <h3>This week's specials</h3>
                    <button>Online Menu</button>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <img src={breadCombo} alt='breadCombo' />
                        <div>
                            <div className='namePrice'>
                                <h3>Bread Combo</h3>
                                <p>$12.00</p>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.</p>
                            <button>Order Delivery</button>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={spag} alt='spag' />
                        <div>
                            <div className='namePrice'>
                                <h3>Bread Combo</h3>
                                <p>$12.00</p>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.</p>
                            <button>Order Delivery</button>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={salad} alt='salad' />
                        <div>
                            <div className='namePrice'>
                                <h3>Bread Combo</h3>
                                <p>$12.00</p>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.</p>
                            <button>Order Delivery</button>
                        </div>

                    </div>
                </div>
            </section>
            <section className='testimonials'>
                <h1>What people say about us</h1>
                <div className='card-container'>
                    <div className='card'>
                        <div>
                            <div>
                                <h3>John Tims</h3>
                                <p>5 stars</p>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <div>
                                <h3>Mark Fred</h3>
                                <p>4.5 stars</p>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <div>
                                <h3>Kingsley Hallway</h3>
                                <p>4 stars</p>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className='our-story'>
                <div>
                    <h1>Our story</h1>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.</p>
                </div>
                <img src={about} alt='about' />
            </section >
        </div >
    )
}

export default Home