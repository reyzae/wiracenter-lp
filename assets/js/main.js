document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const sidebar = document.querySelector('.sidebar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const body = document.body;

    // --- Preloader Effect ---
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1500);
    }

    // --- Sidebar & Hamburger Menu Toggle ---
    if (sidebar && hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
            if (sidebar.classList.contains('active')) {
                const overlay = document.createElement('div');
                overlay.classList.add('mobile-overlay');
                document.body.appendChild(overlay); 
                overlay.addEventListener('click', () => {
                    sidebar.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                    overlay.remove();
                });
            } else {
                const overlay = document.querySelector('.mobile-overlay');
                if (overlay) overlay.remove();
            }
        });
    }

    // --- Dark Mode Toggle ---
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('dark-mode', isDarkMode);
            darkModeToggle.querySelector('i').classList.toggle('fa-sun', !isDarkMode);
            darkModeToggle.querySelector('i').classList.toggle('fa-moon', isDarkMode);
        });
        if (localStorage.getItem('dark-mode') === 'true') {
            body.classList.add('dark-mode');
            darkModeToggle.querySelector('i').classList.add('fa-moon');
            darkModeToggle.querySelector('i').classList.remove('fa-sun');
        } else {
            darkModeToggle.querySelector('i').classList.add('fa-sun');
            darkModeToggle.querySelector('i').classList.remove('fa-moon');
        }
    }

    // --- Navigation Active State (Updated for Multi-Page) ---
    const currentPath = window.location.pathname;
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (currentPath.endsWith(itemHref) || (itemHref === 'index.html' && (currentPath === '/' || currentPath.endsWith('/index.html')))) {
            item.classList.add('current-page');
        } else {
            item.classList.remove('current-page');
        }
    });

    // --- Project Modal Functionality (hanya jika modal ada di halaman ini) ---
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        const closeButton = document.querySelector('.close-button');
        const modalProjectTitle = document.getElementById('modalProjectTitle');
        const modalProjectImage = document.getElementById('modalProjectImage');
        const modalProjectTech = document.getElementById('modalProjectTech');
        const modalProjectDescription = document.getElementById('modalProjectDescription');
        const modalProjectLink = document.getElementById('modalProjectLink');

        const projectsData = {
            'chatbot': {
                title: 'AI-Powered Chatbot Assistant',
                image: 'https://via.placeholder.com/600x400?text=AI+Chatbot',
                tech: 'Technologies: Python, Flask, OpenAI API, NLTK',
                description: 'This project involves developing an intelligent chatbot that leverages OpenAI\'s powerful language models to provide quick, accurate, and conversational responses to user queries. It features natural language understanding, context retention, and integration with external data sources. Ideal for customer support or personal assistance.',
                link: 'https://github.com/yourusername/ai-chatbot-repo'
            },
            // Tambahkan project lain sesuai kebutuhan
        };

        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = e.target.dataset.projectId;
                const project = projectsData[projectId];

                if (project) {
                    modalProjectTitle.textContent = project.title;
                    modalProjectImage.src = project.image;
                    modalProjectTech.textContent = project.tech;
                    modalProjectDescription.textContent = project.description;
                    modalProjectLink.href = project.link;
                    projectModal.classList.add('show');
                    body.style.overflow = 'hidden';
                }
            });
        });

        if (closeButton) closeButton.addEventListener('click', () => {
            projectModal.classList.remove('show');
            body.style.overflow = '';
        });

        window.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.classList.remove('show');
                body.style.overflow = '';
            }
        });
    }

    // --- Basic Scroll Reveal ---
    const revealElements = document.querySelectorAll(
        '.section-header, .about-content, .filter-sort-bar, .articles-grid, .projects-grid, .tools-grid, .contact-info, .hero-content, .contact-card'
    );
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });

    // --- Section Aktif (home/about/articles/contact/projects) ---
    ['home', 'about', 'articles', 'contact', 'projects'].forEach(id => {
        const section = document.getElementById(id);
        if (section) section.classList.add('active-section');
    });

    // --- Animasi IN + Validasi Contact (Hanya jika elemen ada) ---
    const contactSection = document.querySelector('.contact-section');
    const heroContent = contactSection ? contactSection.querySelector('.hero-content') : null;
    const contactCard = document.querySelector('.contact-card');
    const form = document.getElementById('contactForm');

    if (contactSection && heroContent && contactCard) {
        setTimeout(() => {
            heroContent.classList.add('reveal');
            contactCard.classList.add('reveal');
        }, 400);
    }
    if(form) {
        form.addEventListener('submit', function(e) {
            let error = false;
            ['name','email','subject','message'].forEach(id=>{
                const el = document.getElementById(id);
                if (!el.value.trim()) {
                    el.classList.add('input-error');
                    error = true;
                } else {
                    el.classList.remove('input-error');
                }
            });
            // Email format
            const email = document.getElementById('email');
            if(email && !/^[^@]+@[^@]+\.[a-z]{2,}$/.test(email.value)){
                email.classList.add('input-error');
                error = true;
            }
            // Jika error, shake
            if(error){
                form.classList.add('shake');
                setTimeout(()=>form.classList.remove('shake'),400);
                e.preventDefault();
                return;
            }
            // Jika sukses
            e.preventDefault();
            form.style.display = 'none';
            const succ = document.getElementById('formSuccess');
            if (succ) succ.style.display = 'block';
        });
        // Hilangkan error style saat user edit field
        form.querySelectorAll('input,textarea').forEach(el=>{
            el.addEventListener('input',()=>el.classList.remove('input-error'));
        });
    }
});