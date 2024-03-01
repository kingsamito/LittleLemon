import React from 'react'
import reserve from '../assets/img/reserve.jpg'
import reserve2 from '../assets/img/reserve2.jpg'

const Reservation = () => {
    return (
        <div className='container'>
            <section className='hero-section'>
                <div className='details-container'>
                    <h1>Reserve a Table</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.</p>
                </div>
                <img src={reserve} alt='reserve' />
            </section>
            <section className='form-section'>
                <div className='form-section-left'>
                    <img src={reserve2} alt='reserve2' />
                </div>
                <form className='form-section-right'>
                    <div>
                        <label>Date</label>
                        <input type='date' />
                    </div>
                    <div>
                        <label>Time</label>
                        <input type='time' />
                    </div>
                    <div>
                        <label>Number of Guests</label>
                        <input type='number' />
                    </div>
                    <div>
                        <label>Occasion</label>
                        <select>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    <button>Submit</button>
                </form>
            </section>
        </div >
    )
}

export default Reservation