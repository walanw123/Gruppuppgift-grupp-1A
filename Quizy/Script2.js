document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 SPEL STARTAR!');
    
    const box = document.getElementById('box1');
    const text = document.getElementById('colorText');
    
    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'orange'];
    let currentColor = '';
    
   
    function randomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        currentColor = colors[randomIndex];  // ← VIKTIGT: SÄTT FÖRST!
        
        box.className = currentColor;
        text.textContent = 'Vilken färg är jag? 🎨';
        console.log('🎨 Ny färg:', currentColor, 'Klass:', box.className);
    }
    
  
    function checkAnswer(guess) {
        console.log('🎯 DU GISSAR:', guess);
        console.log('🎯 RÄTT SVAR:', currentColor);
        console.log('🎯 BOX KLASS:', box.className);
        
        if (guess === currentColor) {
            text.textContent = '✅ RÄTT! Ny färg...';
            setTimeout(randomColor, 1500);
        } else {
            text.textContent = `❌ Fel! Jag är ${currentColor.toUpperCase()}!`;
            setTimeout(() => {
                text.textContent = 'Vilken färg är jag? 🎨';
            }, 2500);
        }
    }
    
    
    document.getElementById('btn1').addEventListener('click', () => checkAnswer('red'));
    document.getElementById('btn2').addEventListener('click', () => checkAnswer('blue'));
    document.getElementById('btn3').addEventListener('click', () => checkAnswer('green'));
    document.getElementById('btn4').addEventListener('click', () => checkAnswer('yellow'));
    document.getElementById('btn5').addEventListener('click', () => checkAnswer('black'));
    document.getElementById('btn6').addEventListener('click', () => checkAnswer('white'));
    document.getElementById('btn7').addEventListener('click', () => checkAnswer('orange'));
    
  
    setTimeout(() => {
        randomColor();
    }, 500);
});
