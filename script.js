// Formation Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Form data storage
    let formData = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        country: 'FR',
        postalCode: ''
    };

    // Current step tracking
    let currentStep = 1;

    // DOM elements
    const step1Form = document.getElementById('step1-form');
    const step1Element = document.getElementById('step-1');
    const step2Element = document.getElementById('step-2');
    const stepIndicators = document.querySelectorAll('.step-indicator');
    const finalSubmitBtn = document.getElementById('final-submit');
    const backToStep1Btn = document.getElementById('back-to-step1');
    const buyerDetailsDiv = document.getElementById('buyer-details');

    // Initialize the page
    initializePage();

    function initializePage() {
        // Set up event listeners
        setupEventListeners();
        
        // Show step 1 by default
        showStep(1);
    }

    function setupEventListeners() {
        // Step 1 form submission
        if (step1Form) {
            step1Form.addEventListener('submit', handleStep1Submit);
        }

        // Step 2 buttons
        if (finalSubmitBtn) {
            finalSubmitBtn.addEventListener('click', handleFinalSubmit);
        }

        if (backToStep1Btn) {
            backToStep1Btn.addEventListener('click', () => showStep(1));
        }

        // Smooth scrolling for CTA buttons
        const ctaButtons = document.querySelectorAll('a[href="#formulaire"]');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.getElementById('formulaire');
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form input listeners for real-time validation
        const formInputs = step1Form.querySelectorAll('input, select');
        formInputs.forEach(input => {
            input.addEventListener('input', handleInputChange);
            input.addEventListener('blur', validateField);
        });
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        formData[name] = value;
    }

    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        // Remove previous error styling
        field.classList.remove('error');
        
        // Basic validation
        if (field.hasAttribute('required') && !value) {
            field.classList.add('error');
            return false;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                return false;
            }
        }
        
        return true;
    }

    function handleStep1Submit(e) {
        e.preventDefault();
        
        // Validate all fields
        const isValid = validateStep1();
        
        if (isValid) {
            // Store form data
            const formDataObj = new FormData(step1Form);
            for (let [key, value] of formDataObj.entries()) {
                formData[key] = value;
            }
            
            // Show step 2
            showStep(2);
            updateBuyerDetails();
        } else {
            showValidationErrors();
        }
    }

    function validateStep1() {
        const requiredFields = step1Form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!validateField({ target: field })) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    function showValidationErrors() {
        // Add error styling to invalid fields
        const invalidFields = step1Form.querySelectorAll('.error');
        invalidFields.forEach(field => {
            field.style.borderColor = '#ef4444';
            field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        });
        
        // Show error message
        showNotification('Veuillez remplir tous les champs obligatoires correctement.', 'error');
    }

    function showStep(step) {
        currentStep = step;
        
        // Update step indicators
        stepIndicators.forEach((indicator, index) => {
            if (index + 1 === step) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Show/hide form steps
        if (step === 1) {
            step1Element.classList.add('active');
            step2Element.classList.remove('active');
        } else {
            step1Element.classList.remove('active');
            step2Element.classList.add('active');
        }
        
        // Scroll to form
        const formElement = document.getElementById('formulaire');
        if (formElement) {
            formElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    function updateBuyerDetails() {
        if (buyerDetailsDiv) {
            buyerDetailsDiv.innerHTML = `
                <p>${formData.firstName} ${formData.lastName}</p>
                <p>${formData.email}</p>
                <p>${formData.address}</p>
                <p>${formData.city}, ${formData.postalCode}</p>
            `;
        }
    }

    function handleFinalSubmit() {
        // Disable button to prevent double submission
        finalSubmitBtn.disabled = true;
        finalSubmitBtn.textContent = 'Traitement en cours...';
        
        // Simulate payment processing
        setTimeout(() => {
            // In a real application, this would send data to your backend
            console.log('Form data to be sent:', formData);
            
            // Show success message
            showNotification('Inscription réussie ! (Simulation - backend à implémenter)', 'success');
            
            // Reset form after 3 seconds
            setTimeout(() => {
                resetForm();
            }, 3000);
            
        }, 2000);
    }

    function resetForm() {
        // Reset form data
        formData = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            country: 'FR',
            postalCode: ''
        };
        
        // Reset form fields
        step1Form.reset();
        
        // Remove error styling
        const errorFields = step1Form.querySelectorAll('.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
            field.style.borderColor = '';
            field.style.boxShadow = '';
        });
        
        // Reset button
        finalSubmitBtn.disabled = false;
        finalSubmitBtn.textContent = 'Valider ma formation maintenant !';
        
        // Go back to step 1
        showStep(1);
    }

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'bold',
            zIndex: '10000',
            maxWidth: '400px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });
        
        // Set background color based on type
        switch (type) {
            case 'success':
                notification.style.background = '#10b981';
                break;
            case 'error':
                notification.style.background = '#ef4444';
                break;
            default:
                notification.style.background = '#3b82f6';
        }
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Add CSS for error states
    const style = document.createElement('style');
    style.textContent = `
        .form-content input.error,
        .form-content select.error {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }
        
        .form-content input:focus.error,
        .form-content select:focus.error {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }
    `;
    document.head.appendChild(style);
});

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sanitizeInput(input) {
    return input.trim().replace(/[<>]/g, '');
}

// Export functions for potential external use
window.FormationPage = {
    formatPrice,
    validateEmail,
    sanitizeInput
};