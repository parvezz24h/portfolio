// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create coding background animation
    const hero = document.querySelector('.hero');
    const codingBg = document.createElement('div');
    codingBg.className = 'coding-bg';
    hero.insertBefore(codingBg, hero.firstChild);

    const codeSymbols = [
        'function()', 'const', 'let', 'var', 'class', 'import', 'export',
        'return', 'if', 'else', 'for', 'while', 'switch', 'case',
        '{ }', '[ ]', '( )', '=>', '===', '!==', '&&', '||',
        'async', 'await', 'try', 'catch', 'throw', 'new',
        '<div>', '</div>', '<>', 'html', 'css', 'js', 'jsx',
        'console.log()', '.map()', '.filter()', '.reduce()',
        'useState', 'useEffect', 'render()',
        '0', '1', '10', '01', '101', '110', '001', '100',
        'true', 'false', 'null', 'undefined',
        'Android', 'Flutter', 'Kotlin', 'Java', 'Dart',
        'API', 'JSON', 'HTTP', 'REST'
    ];

    const codeSnippets = [
        'fun main() {...}',
        'class App extends',
        'public void',
        'private val',
        '@Override',
        'import android',
        'Widget build()',
        'setState(() {})',
        'const data = await',
        'try { } catch { }',
        'if (true) { }',
        'for (i in 0..10)',
        'lateinit var',
        'companion object'
    ];

    // Create more falling code particles with variety
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'code-particle';

        // Mix symbols and snippets
        const useSnippet = Math.random() > 0.7;
        particle.textContent = useSnippet
            ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
            : codeSymbols[Math.floor(Math.random() * codeSymbols.length)];

        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 8) + 's';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.fontSize = (Math.random() * 10 + 10) + 'px';

        // Add blur effect to some particles for depth
        if (Math.random() > 0.6) {
            particle.style.filter = 'blur(0.5px)';
            particle.style.opacity = '0.15';
        }

        codingBg.appendChild(particle);
    }

    // Create floating code blocks
    const floatingCodes = [
        '// Mobile App Dev',
        '/* Android + Flutter */',
        '=> { code }',
        'func build() ->',
        'class Developer {',
        '}',
        'Widget()',
        '@Composable',
        '<Fragment>'
    ];

    for (let i = 0; i < 8; i++) {
        const floater = document.createElement('div');
        floater.className = 'code-floater';
        floater.textContent = floatingCodes[i % floatingCodes.length];
        floater.style.left = (Math.random() * 80 + 10) + '%';
        floater.style.top = (Math.random() * 80 + 10) + '%';
        floater.style.animationDelay = (i * 0.5) + 's';
        codingBg.appendChild(floater);
    }

    // Resume Download Dialog
    const downloadResumeBtn = document.getElementById('downloadResumeBtn');
    const resumeDialog = document.getElementById('resumeDialog');
    const dialogCloseBtn = document.getElementById('dialogCloseBtn');
    const dialogCancelBtn = document.getElementById('dialogCancelBtn');
    const dialogYesBtn = document.getElementById('dialogYesBtn');

    // Show dialog when Download Resume button is clicked
    if (downloadResumeBtn && resumeDialog) {
        downloadResumeBtn.addEventListener('click', function() {
            resumeDialog.classList.add('active');
        });

        // Close dialog on X button
        dialogCloseBtn.addEventListener('click', function() {
            resumeDialog.classList.remove('active');
        });

        // Close dialog on Cancel button
        dialogCancelBtn.addEventListener('click', function() {
            resumeDialog.classList.remove('active');
        });

        // Close dialog when clicking outside
        resumeDialog.addEventListener('click', function(e) {
            if (e.target === resumeDialog) {
                resumeDialog.classList.remove('active');
            }
        });

        // Download resume on Yes button
        dialogYesBtn.addEventListener('click', function() {
            // Open resume in new tab
            window.open('parvez_resume.pdf', '_blank');

            // Close dialog
            resumeDialog.classList.remove('active');

            // Show success notification
            showNotification('Resume opened in new tab!', 'success');
        });
    }

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    console.log('Hamburger:', hamburger);
    console.log('Nav Menu:', navMenu);
    console.log('Nav Menu HTML:', navMenu.innerHTML);
    console.log('Nav Menu Children:', navMenu.children.length);

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            console.log('Hamburger clicked!');
            e.preventDefault();
            e.stopPropagation();

            navMenu.classList.toggle('active');
            console.log('Menu active:', navMenu.classList.contains('active'));
            console.log('Computed display:', window.getComputedStyle(navMenu).display);
            console.log('Menu position:', navMenu.getBoundingClientRect());
            console.log('Menu visibility:', window.getComputedStyle(navMenu).visibility);
            console.log('Menu opacity:', window.getComputedStyle(navMenu).opacity);

            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (spans.length >= 3) {
                if (navMenu.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
                } else {
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = '';
                }
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                if (spans.length >= 3) {
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = '';
                }
            });
        });
    } else {
        console.error('Hamburger or navMenu not found!');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #4A90E2;
    }
`;
document.head.appendChild(style);

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.innerHTML;
heroTitle.innerHTML = '';

function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        if (text.substring(i, i + 6) === '<span>') {
            const endIndex = text.indexOf('</span>', i) + 7;
            element.innerHTML += text.substring(i, endIndex);
            setTimeout(() => typeWriter(element, text, endIndex), 100);
        } else {
            element.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(element, text, i + 1), 100);
        }
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter(heroTitle, originalText);
    }, 500);
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add initial styles to elements to animate
const animateElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .stat-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Initialize EmailJS (replace with your actual public key)
emailjs.init('YOUR_PUBLIC_KEY');

// Contact form submission
const contactForm = document.getElementById('contactForm');
const submitButton = contactForm.querySelector('button[type="submit"]');
const originalButtonText = submitButton.textContent;

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Update button state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        // Send email using EmailJS
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: 'Md Parvez'
        };
        
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
        await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    } catch (error) {
        console.error('Error sending email:', error);
        showNotification('Failed to send message. Please try again or email directly.', 'error');
    } finally {
        // Reset button state
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// Notification function
function showNotification(message, type) {
    // Remove any existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add form field names
contactForm.querySelector('input[type="text"]').setAttribute('name', 'name');
contactForm.querySelector('input[type="email"]').setAttribute('name', 'email');
contactForm.querySelector('textarea').setAttribute('name', 'message');

// Parallax effect for hero section (only on desktop)
if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage && scrolled < 1000) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Add hover effect to project cards (only on desktop)
if (window.innerWidth > 768) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Dynamic year in footer
const footer = document.querySelector('.footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = footer.innerHTML.replace('2024', currentYear);

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light theme
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add number counting animation for stats
const animateNumbers = () => {
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        const duration = 2000;
        const increment = finalValue / (duration / 16);
        let currentValue = 0;
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(counter);
                stat.textContent = stat.textContent.includes('+') ? finalValue + '+' : finalValue;
            } else {
                stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('+') ? '+' : '');
            }
        }, 16);
    });
};

// Trigger number animation when stats section is in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add skill tag animation on hover
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});