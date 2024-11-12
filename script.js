:root {
  --terminal-black: #0a0a0a;
  --terminal-green: #00ff00;
  --terminal-red: #ff3333;
  --terminal-text: #33ff33;
  --terminal-dim: #1a1a1a;
  --glitch-color: #00ff00;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Code', monospace;
}

body {
  background-color: var(--terminal-black);
  color: var(--terminal-text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
}

#matrix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
}

.terminal-container {
  width: 100%;
  max-width: 800px;
  backdrop-filter: blur(5px);
}

.terminal {
  background-color: rgba(26, 26, 26, 0.95);
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  overflow: hidden;
  border: 1px solid rgba(0, 255, 0, 0.1);
}

.terminal-header {
  background-color: #1a1a1a;
  padding: 10px;
  display: flex;
  gap: 8px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red { background-color: #ff5f56; }
.yellow { background-color: #ffbd2e; }
.green { background-color: #27c93f; }

.terminal-content {
  padding: 20px;
}

.command-line {
  margin: 10px 0;
}

.prompt {
  color: #00ff00;
  margin-right: 10px;
}

.response {
  color: #cccccc;
  margin-left: 20px;
  margin-bottom: 20px;
}

.social-links {
  margin-top: 20px;
  margin-left: 20px;
}

.social-links a {
  color: var(--terminal-text);
  text-decoration: none;
  margin-right: 15px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #ffffff;
  text-shadow: 0 0 8px var(--terminal-text);
}

.projects {
  font-family: 'Fira Code', monospace;
  line-height: 1.6;
}

.projects a {
  color: var(--terminal-text);
  text-decoration: none;
  transition: all 0.3s ease;
}

.projects a:hover {
  color: #ffffff;
  text-shadow: 0 0 8px var(--terminal-text);
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                 0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                 0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                 -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                 -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                 0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                 0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,

