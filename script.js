// script.js
// Function to fetch blog posts
function loadBlogPosts() {
    fetch('https://api.example.com/posts') // Adjust the API endpoint accordingly
        .then(response => response.json())
        .then(posts => {
            const blogSection = document.getElementById('blog');
            posts.forEach(post => {
                const article = document.createElement('article');
                article.innerHTML = `<h3>${post.title}</h3><p>${post.summary}</p>`;
                blogSection.appendChild(article);
            });
        });
}
function shareOnFacebook() {
    var url = window.location.href;
    var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    window.open(facebookUrl, 'facebook-share-dialog', 'width=800,height=600');
}

function shareOnTwitter() {
    var url = window.location.href;
    var text = "Check out this awesome portfolio!";
    var twitterUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text);
    window.open(twitterUrl, 'twitter-share-dialog', 'width=800,height=600');
}

function shareOnLinkedIn() {
    var url = window.location.href;
    var linkedInUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(url);
    window.open(linkedInUrl, 'linkedin-share-dialog', 'width=800,height=600');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load blog posts on page load
document.addEventListener('DOMContentLoaded', loadBlogPosts);
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
    });
});
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');

    if (category === 'all') {
        for (const project of projects) {
            project.style.display = 'block';
        }
    } else {
        for (const project of projects) {
            project.style.display = project.classList.contains(category) ? 'block' : 'none';
        }
    }
}
function filterGallery(category) {
    const elements = document.querySelectorAll('.img-wrap');

    if (category === 'all') {
        elements.forEach(element => element.style.display = 'block');
    } else {
        elements.forEach(element => {
            element.style.display = element.classList.contains(category) ? 'block' : 'none';
        });
    }
}

