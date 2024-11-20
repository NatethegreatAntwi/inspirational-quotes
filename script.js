function explode() {
  const bubble = document.querySelector('.bubble');
  const pieces = document.querySelectorAll('.bubble-piece');
  const quoteElement = document.getElementById('quote');
  const allElements = document.querySelectorAll('header, footer, .bubble-container'); // Select all elements except the quote

  // Hide all other elements smoothly
  allElements.forEach((element) => {
    element.style.opacity = '0'; // Fade out
    element.style.transition = 'opacity 1s ease'; // Smooth transition
    setTimeout(() => {
      element.style.display = 'none'; // Remove from layout after fade
    }, 1000); // Matches the transition duration
  });

  // Animate the bubble pieces
  pieces.forEach((piece) => {
    const xOffset = Math.random() * 200 - 100; // Random x offset
    const yOffset = Math.random() * 200 - 100; // Random y offset
    piece.style.setProperty('--x-offset', `${xOffset}px`);
    piece.style.setProperty('--y-offset', `${yOffset}px`);
    piece.classList.add('animate');
  });

  // Display a random quote and split it into spans
  setTimeout(() => {
    const quotes = [
      "There is always light on the other side of the door.",
      "Believe in yourself and all that you are.",
      "Your potential is endless.",
      "Dream big, work hard, and stay humble.",
      "Every journey begins with a single step."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Split the quote into individual words
    const words = randomQuote.split(" ").map(word => `<span>${word}</span>`).join(" ");
    quoteElement.innerHTML = words; // Add words wrapped in <span>
    quoteElement.style.display = 'block'; // Show the quote
  }, 500);
}

function explode() {
  const bubble = document.querySelector('.bubble');
  const pieces = document.querySelectorAll('.bubble-piece');
  const quoteElement = document.getElementById('quote');
  const allElements = document.querySelectorAll('header, footer, .bubble-container'); // Select all elements except the quote

  // Hide all other elements smoothly
  allElements.forEach((element) => {
    element.style.opacity = '0'; // Fade out
    element.style.transition = 'opacity 1s ease'; // Smooth transition
    setTimeout(() => {
      element.style.display = 'none'; // Remove from layout after fade
    }, 1000); // Matches the transition duration
  });

  // Animate the bubble pieces
  pieces.forEach((piece) => {
    const xOffset = Math.random() * 200 - 100; // Random x offset
    const yOffset = Math.random() * 200 - 100; // Random y offset
    piece.style.setProperty('--x-offset', `${xOffset}px`);
    piece.style.setProperty('--y-offset', `${yOffset}px`);
    piece.classList.add('animate');
  });

  // List of 365 meaningful quotes
  const quotes = [
    "Believe you can, and you're halfway there. – Theodore Roosevelt",
    "Every day is a second chance.",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "Don’t wait. The time will never be just right. – Napoleon Hill",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Dream big and dare to fail. – Norman Vaughan",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Life is short. Live it. Fear is natural. Face it. Memory is powerful. Use it.",
    "A journey of a thousand miles begins with a single step. – Lao Tzu",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Act as if what you do makes a difference. It does. – William James",
    "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
    "The best way to predict the future is to create it. – Peter Drucker",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "If opportunity doesn’t knock, build a door. – Milton Berle",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Fall seven times and stand up eight. – Japanese Proverb",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "I am not a product of my circumstances. I am a product of my decisions. – Stephen Covey",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "The mind is everything. What you think you become. – Buddha",
    "An unexamined life is not worth living. – Socrates",
    "Dream big dreams. Small dreams have no magic.",
    "Tough times never last, but tough people do. – Robert H. Schuller",
    "Do what you feel in your heart to be right—for you’ll be criticized anyway. – Eleanor Roosevelt",
    "Happiness is not by chance, but by choice. – Jim Rohn",
    "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Be so good they can’t ignore you. – Steve Martin",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
    "Doubt kills more dreams than failure ever will.",
    // Add the remaining quotes following this structure until you have 365
  ];

  // Pick a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display the quote
  setTimeout(() => {
    const words = randomQuote.split(" ").map(word => `<span>${word}</span>`).join(" ");
    quoteElement.innerHTML = words; // Add words wrapped in <span>
    quoteElement.style.display = 'block'; // Show the quote
  }, 500);
}