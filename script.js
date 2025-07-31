const messages = [
    {
      text: "You're the peanut butter to my bread 💑",
      emoji: "🥜🍞",
      animation: "animate__heartBeat"
    },
    {
      text: "My heart races just thinking about you 💓",
      emoji: "🏃‍♀️❤️",
      animation: "animate__pulse"
    },
    {
      text: "You're my home and my adventure all at once 🏡✨",
      emoji: "🏠🌍",
      animation: "animate__rubberBand"
    },
    {
      text: "I fall for you more and more every day 💘",
      emoji: "🍂💞",
      animation: "animate__flip"
    },
    {
      text: "You're the reason I smile without reason 😊",
      emoji: "☀️😊",
      animation: "animate__swing"
    },
    {
      text: "I'm grateful for every little moment with you 🌸",
      emoji: "⏳💖",
      animation: "animate__tada"
    },
    {
      text: "Forever and always, it's you 💍❤️",
      emoji: "∞💍",
      animation: "animate__bounce"
    }
  ];
  
  const emojisForRain = ["💖", "💕", "💘", "❤️", "💝", "💓", "🌸", "✨", "🌟", "🥰", "😍", "💋"];
  
  let index = 0;
  const card = document.getElementById('card');
  const note = document.getElementById('love-note');
  const mainTitle = document.getElementById('main-message');
  const memoryCount = document.getElementById('memory-count');
  const emojiDisplay = document.getElementById('emoji-display');
  
  function showNextMessage() {
    if (index < messages.length) {
      card.style.animation = 'none';
      void card.offsetWidth;
      card.style.animation = 'fadeIn 1s ease';
  
      mainTitle.textContent = "My Love 💌";
      note.textContent = messages[index].text;
      memoryCount.textContent = `Memory ${index + 1} of ${messages.length}`;
      
      // Update emoji display with animation
      emojiDisplay.textContent = messages[index].emoji;
      emojiDisplay.className = 'emoji-display animate__animated';
      emojiDisplay.classList.add(messages[index].animation);
      
      index++;
      
      // Create special effect on last message
      if (index === messages.length) {
        setTimeout(() => {
          createHeartExplosion();
          startEmojiRain();
        }, 500);
      }
    } else {
      mainTitle.textContent = "The End? Never. 💞";
      note.textContent = "Because my love for you never ends 🌈";
      memoryCount.textContent = "Our story continues...";
      emojiDisplay.textContent = "💫💖";
      emojiDisplay.className = 'emoji-display animate__animated animate__pulse animate__infinite';
    }
  }
  
  // Floating hearts
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.innerHTML = ['💖', '💕', '💘', '❤️', '💝', '💓'][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    document.getElementById('floating-hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }
  
  // Sparkles effect
  function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.width = sparkle.style.height = (Math.random() * 5 + 3) + 'px';
    sparkle.style.animationDelay = (Math.random() * 2) + 's';
    document.getElementById('sparkles').appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }
  
  // Emoji rain effect
  function createEmojiRain() {
    const emoji = document.createElement('div');
    emoji.className = 'emoji-drop';
    emoji.textContent = emojisForRain[Math.floor(Math.random() * emojisForRain.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.fontSize = (Math.random() * 20 + 15) + 'px';
    emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.getElementById('emoji-rain').appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
  }
  
  function startEmojiRain() {
    for (let i = 0; i < 50; i++) {
      setTimeout(createEmojiRain, i * 100);
    }
  }
  
  // Heart explosion for special moments
  function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.innerHTML = '❤️';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg) translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`;
        heart.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-out forwards`;
        document.getElementById('floating-hearts').appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
      }, i * 100);
    }
  }
  
  // Initialize effects
  setInterval(createHeart, 400);
  setInterval(createSparkle, 100);
  
  // Add your name to the footer
  document.getElementById('your-name').textContent = "Your Shruu...";