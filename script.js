// Matrix background effect
const canvas = document.createElement('canvas');
canvas.id = 'matrix';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.opacity = '0.12';
canvas.style.zIndex = '-1';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = new Array(Math.floor(columns)).fill(1);

let animationFrameId;

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.015)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        if (Math.random() > 0.985) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.995) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
}

function animate() {
    setTimeout(() => {
        drawMatrix();
        animationFrameId = requestAnimationFrame(animate);
    }, 100);
}

animate();

window.addEventListener('resize', () => {
    cancelAnimationFrame(animationFrameId);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
});

// Typing effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect for project names
document.querySelectorAll('.project-name').forEach(project => {
    const originalText = project.textContent;
    project.textContent = '';
    setTimeout(() => {
        typeWriter(project, originalText, 50);
    }, 500);
});

// Command response typing effect
document.querySelectorAll('.typing-effect').forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    typeWriter(element, text, 30);
});

// Add hover sound effect (optional)
document.querySelectorAll('.project, .glow-effect').forEach(element => {
    element.addEventListener('mouseenter', () => {
        const audio = new Audio('data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAU');
    });
});

// Add this new typing animation code
function typeText(element, text, speed = 50) {
    return new Promise(resolve => {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

async function startLoginSequence() {
    const loginSteps = [
        { selector: '[data-type="login"] .typing', text: 'login: mr_robot' },
        { selector: '[data-type="password"] .typing', text: 'password: ********' },
        { selector: '[data-type="access"] .typing', text: 'Access granted...' },
        { selector: '[data-type="loading"] .typing', text: 'Loading user profile...' }
    ];

    for (const step of loginSteps) {
        const element = document.querySelector(step.selector);
        await typeText(element, step.text);
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Show main content after login sequence
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.querySelector('.login-sequence').style.display = 'none';
    document.querySelector('.main-content').classList.remove('hidden');

    // Start typing main content
    const commands = document.querySelectorAll('.main-content .typing');
    for (const command of commands) {
        await typeText(command, command.textContent);
        const response = command.parentElement.querySelector('.typing-delay');
        if (response) {
            response.style.opacity = '1';
            await new Promise(resolve => setTimeout(resolve, 300));
        }
    }
}

// Start the sequence when page loads
document.addEventListener('DOMContentLoaded', startLoginSequence); 