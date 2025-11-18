import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { User, Building2 } from 'lucide-react';
import './TypeCard.css';

const BusinessTypeCard = ({ type, title, description, icon: Icon, onClick }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;
    const glow = glowRef.current;

    if (!card) return;

    // Optimize for hardware acceleration
    gsap.set(card, { transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' });
    gsap.set(icon, { transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' });
    gsap.set(glow, { transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' });

    // Simplified floating animation with better performance
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(card, {
      y: 'random(-8, 8)',
      rotation: 'random(-1, 1)',
      duration: 'random(4, 6)',
      ease: 'power1.inOut'
    });

    // Icon continuous rotation with optimized easing
    gsap.to(icon, {
      rotation: '+=360',
      duration: 12,
      ease: 'none',
      repeat: -1
    });

    // Optimized glow pulse
    gsap.to(glow, {
      scale: 1.15,
      opacity: 0.9,
      duration: 3,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true
    });

    // Smooth hover animations with hardware acceleration
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.08,
        y: -15,
        rotation: 0,
        duration: 0.4,
        ease: 'power2.out',
        force3D: true
      });

      gsap.to(icon, {
        scale: 1.15,
        rotation: '+=180',
        duration: 0.5,
        ease: 'power2.out',
        force3D: true
      });

      gsap.to(glow, {
        scale: 1.8,
        opacity: 1,
        duration: 0.4,
        force3D: true
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        force3D: true
      });

      gsap.to(icon, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
        force3D: true
      });

      gsap.to(glow, {
        scale: 1.15,
        opacity: 0.9,
        duration: 0.4,
        force3D: true
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tl.kill();
      gsap.killTweensOf([card, icon, glow]);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [type]);

  return (
    <div
      ref={cardRef}
      className={`business-type-card ${type}`}
      onClick={onClick}
    >
      <div ref={glowRef} className="card-glow" />

      <div className="card-icon-container">
        <div ref={iconRef} className="card-icon">
          <Icon size={48} />
        </div>
      <div className="icon-particles">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>
      </div>

      <h3 ref={titleRef} className="card-title">
        {title}
      </h3>

      <p ref={descRef} className="card-description">
        {description}
      </p>

      <div className="card-shine" />
      <div className="card-border" />
    </div>
  );
};

const BusinessTypeSelection = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);
  const [selectedType, setSelectedType] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const title = titleRef.current;
    const container = containerRef.current;

    if (!title || !container) return;

    // Hardware acceleration setup
    gsap.set([title, container], {
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden'
    });

    // Optimized title entrance animation
    gsap.fromTo(title, {
      opacity: 0,
      y: -30,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      force3D: true
    });

    // Optimized container entrance animation
    gsap.fromTo(container, {
      opacity: 0,
      scale: 0.95,
      y: 20
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      delay: 0.2,
      ease: 'power2.out',
      force3D: true
    });

    // Simplified subtle continuous animation
    gsap.to([title, container], {
      y: 'random(-3, 3)',
      duration: 6,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      delay: 1,
      force3D: true
    });

  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const backdrop = section.querySelector('.section-backdrop');
    const container = section.querySelector('.section-container');
    const content = contentRef.current;

    if (selectedType) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Open section animation
      gsap.set(section, { opacity: 0, display: 'block' });
      gsap.set(backdrop, { opacity: 0 });
      if (container) {
        gsap.set(container, { opacity: 0, scale: 0.9, y: 50 });
      }
      if (content) {
        gsap.set(content, { x: 0, opacity: 1 });
      }
      
      gsap.to(section, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        force3D: true
      });
      
      gsap.to(backdrop, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      if (container) {
        gsap.to(container, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          delay: 0.1,
          ease: 'power2.out',
          force3D: true
        });
      }
    } else {
      // Close section animation
      if (backdrop && container) {
        gsap.to(container, {
          opacity: 0,
          scale: 0.9,
          y: 50,
          duration: 0.4,
          ease: 'power2.in',
          force3D: true
        });

        gsap.to(backdrop, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        });

        gsap.to(section, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
          force3D: true,
          delay: 0.1,
          onComplete: () => {
            gsap.set(section, { display: 'none' });
            // Restore body scroll when modal is closed
            document.body.style.overflow = '';
          }
        });
      } else {
        // If elements don't exist yet, just restore scroll
        document.body.style.overflow = '';
      }
    }

    // Cleanup: restore body scroll on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedType]);

  useEffect(() => {
    const content = contentRef.current;
    const form = formRef.current;

    if (!content || !form) return;

    if (showForm) {
      // Slide content left and show form
      gsap.to(content, {
        x: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        force3D: true
      });

      gsap.set(form, { x: '100%', opacity: 0, display: 'block' });
      gsap.to(form, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        force3D: true
      });
    } else {
      // Slide form right and show content
      gsap.to(form, {
        x: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        force3D: true,
        onComplete: () => {
          gsap.set(form, { display: 'none' });
        }
      });

      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        force3D: true
      });
    }
  }, [showForm]);

  const handleCardClick = (type) => {
    if (selectedType === type) {
      // If clicking the same card, close the section
      setSelectedType(null);
      setShowForm(false);
    } else {
      // Otherwise, open/switch to the selected card's section
      setSelectedType(type);
      setShowForm(false);
    }
  };

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowForm(false);
  };

  const getSectionContent = () => {
    if (selectedType === 'individual') {
      return {
        title: 'Individual Account Features',
        content: [
          'Personal brand management and portfolio showcase',
          'Invoice and payment tracking',
          'Client relationship management',
          'Time tracking and productivity tools',
          'Customizable business card and profile'
        ]
      };
    } else if (selectedType === 'business') {
      return {
        title: 'Business Account Features',
        content: [
          'Team collaboration and management tools',
          'Advanced analytics and reporting',
          'Multi-user access and permissions',
          'Enterprise-grade security and compliance',
          'Custom integrations and API access'
        ]
      };
    }
    return null;
  };

  const sectionContent = getSectionContent();

  return (
    <div className="business-type-selection">
      <h2 ref={titleRef} className="selection-title">
        Choose Your Business Type
      </h2>

      <div ref={containerRef} className="cards-container">
        <BusinessTypeCard
          type="individual"
          title="Individual"
          description="Perfect for freelancers, consultants, and solo entrepreneurs looking to manage their personal brand and business."
          icon={User}
          onClick={() => handleCardClick('individual')}
        />

        <BusinessTypeCard
          type="business"
          title="Business"
          description="Ideal for companies, agencies, and organizations seeking comprehensive business management solutions."
          icon={Building2}
          onClick={() => handleCardClick('business')}
        />
      </div>

      {selectedType && (
        <div ref={sectionRef} className="business-section">
          <div className="section-backdrop" onClick={() => handleCardClick(selectedType)}></div>
          {sectionContent && (
            <div className="section-container" onClick={(e) => e.stopPropagation()}>
              <div ref={contentRef} className="section-content">
                <button 
                  className="section-close" 
                  onClick={() => handleCardClick(selectedType)}
                  aria-label="Close section"
                >
                  ×
                </button>
                <h3 className="section-title">{sectionContent.title}</h3>
                <ul className="section-list">
                  {sectionContent.content.map((item, index) => (
                    <li key={index} className="section-item">{item}</li>
                  ))}
                </ul>
                <button 
                  className="register-button" 
                  onClick={handleRegisterClick}
                >
                  Register Now
                </button>
              </div>
              
              <div ref={formRef} className="section-form" style={{ display: 'none' }}>
                <button 
                  className="section-close" 
                  onClick={() => handleCardClick(selectedType)}
                  aria-label="Close section"
                >
                  ×
                </button>
                <button 
                  className="back-button" 
                  onClick={handleBackClick}
                  aria-label="Back to content"
                >
                  ← Back
                </button>
                <h3 className="section-title">Register as {sectionContent.title.split(' ')[0]}</h3>
                <form className="registration-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                  {selectedType === 'business' && (
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input type="text" id="company" name="company" required />
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="message">Additional Information (Optional)</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                  </div>
                  <button type="submit" className="submit-button">
                    Submit Registration
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusinessTypeSelection;
