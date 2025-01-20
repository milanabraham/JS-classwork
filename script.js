const projects = [
    {
        title: "Age Calculator",
        description: "A simple Age Calculator for begineers.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/Age-Calc1/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/Age-Calc1"
    },
    {
        title: "Auto Saver",
        description: "When anything type in the textarea it automatically saves all in the localstorage .",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/Autosaver/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/Autosaver"
    },
    {
        title: "Dad jokes generator",
        description: " A simple dad jokes generator using fetch api and async await function in javascript", 
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/Dadjokes/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/Dadjokes"
    },
    {
        title: "Digital Clock",
        description: "A simple digital clock using javascript",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/digital-clock/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/digital-clock"
    },
    {
        title: "Dark Mode",
        description: "A simple dark mode using javascript and localstorage to save the mode of the user.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/Dark-mode/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/Dark-mode"
    },
    {
        title: "Infinate-scroll",
        description: "A simple infinate scroll using javascript and fetch api to get the data from the api. ",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/Infinate-scroll/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/Infinate-scroll"
    },
    {
        title: "Nested-comments",
        description: "A simple nested comments using javascript and localstorage to save the comments. so that when we refresh the page the comments will not be deleted and reset function to reset the comments.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/Nested-comments/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/Nested-comments"
    },
    {
        title: "Usercard",
        description: "A simple usercard using javascript that allows user to input data from prompt and fetch data and stores to local storage .",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/Usercard/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/Usercard"
    },
    {
        title: "burger-order",
        description: "A simple burger order using javascript and localstorage to save the order.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/burger-order/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/burger-order"
    },
    {
        title: "emoji-finder",
        description: "A simple emoji finder using javascript that fetch the data from a js file and display the emoji and its name and when we click on the emoji it will copy the emoji to the clipboard also search emoji by typing the name of the emoji name or description.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/emoji-finder/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/emoji-finder"
    },
    {
        title: "feedback-ui",
        description: "A simple feedback ui using javascript that allows user to give feedback and rating.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/feedback-ui/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/feedback-ui"
    },
    {
        title: "image-search",
        description: "A simple image search using javascript that fetch the data from the api and display the image and its name and description.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/image-search/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/image-search"
    },
    {
        title: "keyboard-codes",
        description: "A simple keyboard codes using javascript that display the key code and key.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/keyboard-codes/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/keyboard-codes"
    },
    {
        title: "leaderboard",
        description: "A simple leaderboard using javascript that display the leaderboard of the players and their scores also we can add the player and score.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/leaderboard/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/leaderboard"
    },
    {
        title: "movie-search",
        description: "A simple movie search using javascript that fetch the data from the api and display the movie and its name and description.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/movie-search/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/movie-search"
    },
    {
        title: "pokemon",
        description: "A simple pokemon using javascript that fetch the data from the api and display the pokemon and its name and description.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/pokemon/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/pokemon"
    },
    {
        title: "shapes",
        description: "A simple shapes using javascript that display the shapes and its name and description.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/shapes/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/shapes"
    },
    {
        title: "sticky-notes",
        description: "A simple sticky notes using javascript that allows user to add notes and delete notes.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/sticky-notes/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/sticky-notes"
    },
    {
        title: "stopwatch",
        description: "A simple stopwatch using javascript that allows user to start, stop and reset the stopwatch.",
        technologies: ["Html", "Css", "Js"],
        demo: "https://milanabraham.github.io/JS-classwork/stop-watch/",
        repository: "https://github.com/milanabraham/JS-classwork/tree/main/stop-watch"
    }
    
];

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle rounded-full';
    particle.style.width = Math.random() * 10 + 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    document.getElementById('particles').appendChild(particle);

    setTimeout(() => {
        particle.style.transition = 'all 1s ease-out';
        particle.style.opacity = '1';
        particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
        
        setTimeout(() => {
            particle.style.opacity = '0';
            setTimeout(() => particle.remove(), 1000);
        }, 1000);
    }, 10);
}

setInterval(createParticle, 300);

const projectContainer = document.getElementById('project-container');

projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'card rounded-xl shadow-lg overflow-hidden scroll-appear';
    card.style.animationDelay = `${index * 200}ms`;
    
    const techStack = project.technologies
        .map(tech => `
            <span class="tech-tag inline-block rounded-full px-4 py-1 text-sm font-semibold text-indigo-700 mr-2 mb-2">
                ${tech}
            </span>
        `).join('');
    
    card.innerHTML = `
        <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">${project.title}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">${project.description}</p>
            <div class="mb-6 flex flex-wrap">
                ${techStack}
            </div>
        </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100">
            <div class="flex justify-between items-center">
                <a href="${project.demo}" target="_blank" 
                   class="btn bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transform hover:scale-105">
                    View Demo
                </a>
                <a href="${project.repository}" target="_blank" 
                   class="btn border-2 border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transform hover:scale-105">
                    GitHub
                </a>
            </div>
        </div>
    `;
    
    projectContainer.appendChild(card);
});

// Scroll animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-appear').forEach(element => {
    observer.observe(element);
});