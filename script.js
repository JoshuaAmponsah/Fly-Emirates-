<script>
        
        const tabs = document.querySelectorAll('.search-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                
                const returnInput = document.getElementById('return');
                if (tab.textContent === 'One Way') {
                    returnInput.disabled = true;
                    returnInput.style.opacity = '0.5';
                } else {
                    returnInput.disabled = false;
                    returnInput.style.opacity = '1';
                }
            });
        });

        // Flight Search Form Submission
        const flightSearchForm = document.getElementById('flightSearchForm');
        flightSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const from = document.getElementById('from').value;
            const to = document.getElementById('to').value;
            const departure = document.getElementById('departure').value;
            const returnDate = document.getElementById('return').value;
            const passengers = document.getElementById('passengers').value;
            const flightClass = document.getElementById('class').value;
            
            // In a real application, this would redirect to search results
            alert(`Searching for flights from ${from} to ${to} departing ${departure}${returnDate ? `, returning ${returnDate}` : ''} for ${passengers} in ${flightClass} class.`);
            
            // Simulate loading
            const searchBtn = flightSearchForm.querySelector('.search-btn');
            const originalText = searchBtn.textContent;
            searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
            
            setTimeout(() => {
                searchBtn.textContent = originalText;
                // Here you would typically redirect to search results page
                window.location.href = "#"; // Replace with actual search results page
            }, 1500);
        });

        // Book Now Buttons
        const bookNowButtons = document.querySelectorAll('.book-now');
        bookNowButtons.forEach(button => {
            button.addEventListener('click', () => {
                const destinationCard = button.closest('.destination-card');
                const destination = destinationCard.querySelector('h3').textContent;
                const price = destinationCard.querySelector('.price').textContent;
                
                alert(`Booking ${destination} for ${price}. You'll be redirected to the booking page.`);
                
                // In a real application, redirect to booking page with parameters
                // window.location.href = `/book?destination=${encodeURIComponent(destination)}&price=${encodeURIComponent(price)}`;
            });
        });

        // Auth Buttons
        document.getElementById('loginBtn').addEventListener('click', () => {
            // In a real app, this would open a login modal or redirect
            alert('Login functionality would appear here');
        });

        document.getElementById('signupBtn').addEventListener('click', () => {
            // In a real app, this would open a signup modal or redirect
            alert('Sign up functionality would appear here');
        });

        // Newsletter Subscription
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            
            // Simulate subscription
            const button = newsletterForm.querySelector('button');
            const originalText = button.textContent;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
            
            setTimeout(() => {
                button.textContent = 'Subscribed!';
                alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
                newsletterForm.reset();
                
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }, 1500);
        });

        // Set minimum date for departure to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('departure').min = today;
        document.getElementById('return').min = today;
        
    </script>