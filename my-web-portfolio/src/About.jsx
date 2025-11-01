import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './About.css';

function About(){
    // Your images - replace with your own
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
            title: 'TU Dublin',
            description: 'Class of 2028',
            backText: 'Currently studying towards a Bachelors of Science in Data Science and Artificial Intelligence.'
        },
        {
            url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
            title: 'Myself',
            description: 'And who I am',
            backText: 'Is it crazy to say I want to change the world?'
        },
        {
            url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
            title: 'My Background',
            description: '',
            backText: ''
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsFlipped(false); // Reset flip when changing slides
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsFlipped(false); // Reset flip when changing slides
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsFlipped(false); // Reset flip when changing slides
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return(
        <section className="about" id="student">
            <div className="about-content">
                <h2></h2>   
                {/* Carousel */}
                <div className="carousel-container">
                    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                        {/* Front of card (Image) */}
                        <div className="flip-card-front" onClick={handleFlip}>
                            <div className="carousel-image" style={{
                                backgroundImage: `url(${images[currentIndex].url})`
                            }}>
                                {/* Overlay */}
                                <div className="carousel-overlay">
                                    <h3>{images[currentIndex].title}</h3>
                                    <p>{images[currentIndex].description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Back of card (Text) */}
                        <div className="flip-card-back" onClick={handleFlip}>
                            <div className="flip-card-content">
                                <h3>{images[currentIndex].title}</h3>
                                <p>{images[currentIndex].backText}</p>
                                <p className="click-hint">Click to go back</p>
                            </div>
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button onClick={goToPrevious} className="carousel-btn carousel-btn-left">
                        <ChevronLeft color="white" size={24} />
                    </button>

                    {/* Right Arrow */}
                    <button onClick={goToNext} className="carousel-btn carousel-btn-right">
                        <ChevronRight color="white" size={24} />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;