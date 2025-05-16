document.addEventListener('DOMContentLoaded', () => {
    // Event Handling
    const actionBtn = document.getElementById('action-btn');
    const actionText = document.getElementById('action-text');
    const keypressInput = document.getElementById('keypress-input');

    // Button Click
    actionBtn.addEventListener('click', () => {
        actionText.textContent = 'Button Clicked!';
        actionBtn.style.backgroundColor = '#e74c3c';
    });

    // Hover Effect
    actionBtn.addEventListener('mouseenter', () => {
        actionText.textContent = 'Hovering over button!';
    });

    actionBtn.addEventListener('mouseleave', () => {
        actionText.textContent = 'Interact with the button (click, hover, or double-click)!';
    });

    // Keypress Detection
    keypressInput.addEventListener('keypress', (e) => {
        actionText.textContent = `Key pressed: ${e.key}`;
    });

    // Bonus: Double-Click
    actionBtn.addEventListener('dblclick', () => {
        actionText.textContent = 'Secret Double-Click Action!';
        actionBtn.style.backgroundColor = '#f1c40f';
        actionBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            actionBtn.style.transform = 'rotate(0deg)';
        }, 500);
    });

    // Slideshow
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // Accordion
    const accordionTitles = document.querySelectorAll('.accordion-title');
    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.classList.toggle('active');
        });
    });

    // Form Validation
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    const validateField = (input, errorElement, validationFn, errorMessage) => {
        if (!validationFn(input.value)) {
            errorElement.textContent = errorMessage;
            input.classList.add('invalid');
            return false;
        } else {
            errorElement.textContent = '';
            input.classList.remove('invalid');
            return true;
        }
    };

    // Real-time Validation
    nameInput.addEventListener('input', () => {
        validateField(
            nameInput,
            nameError,
            value => value.trim().length >= 2,
            'Name must be at least 2 characters.'
        );
    });

    emailInput.addEventListener('input', () => {
        validateField(
            emailInput,
            emailError,
            value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            'Please enter a valid email.'
        );
    });

    passwordInput.addEventListener('input', () => {
        validateField(
            passwordInput,
            passwordError,
            value => value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value),
            'Password must be 8+ characters with an uppercase letter and a number.'
        );
    });

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isNameValid = validateField(
            nameInput,
            nameError,
            value => value.trim().length >= 2,
            'Name must be at least 2 characters.'
        );
        const isEmailValid = validateField(
            emailInput,
            emailError,
            value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            'Please enter a valid email.'
        );
        const isPasswordValid = validateField(
            passwordInput,
            passwordError,
            value => value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value),
            'Password must be 8+ characters with an uppercase letter and a number.'
        );

        if (isNameValid && isEmailValid && isPasswordValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});