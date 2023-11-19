let storyText = document.getElementById('story-text');

function makeChoice(choice) {
switch (choice) {
    case 'A':
    storyText.textContent = "You chose Path A. Along the way, you meet a friendly dragon who offers to help you on your quest.";
    removeAllButtons()
    addButton("Accept the dragon's help", "C");
    addButton("Decline the dragon's help", "D");
    break;

    case 'B':
    storyText.textContent = "You chose Path B. As you walk deeper into the forest, you stumble upon a hidden treasure chest.";
    removeAllButtons()
    addButton("Open the treasure chest", "E");
    addButton("Ignore the treasure chest", "F");
    break;

    case 'C':
    storyText.textContent = "With the dragon's help, you easily overcome the challenges and reach your destination. Congratulations, you've completed the quest!";
    removeAllButtons();
    break;

    case 'D':
    storyText.textContent = "You decide not to accept the dragon's help. The journey becomes more challenging, but you eventually reach your destination on your own. Congratulations, you've completed the quest!";
    removeAllButtons();
    break;

    case 'E':
    storyText.textContent = "You open the treasure chest and find a magical amulet inside. The amulet grants you special powers, making the rest of your journey much easier. Congratulations, you've completed the quest!";
    removeAllButtons();
    break;

    case 'F':
    storyText.textContent = "You ignore the treasure chest and continue your journey. The path becomes more difficult, but you persevere and reach your destination. Congratulations, you've completed the quest!";
    removeAllButtons();
    break;
}
}

function addButton(text, choice) {
const button = document.createElement('button');
button.textContent = text;
button.onclick = function() {
    makeChoice(choice);
};
document.getElementById('story-container').appendChild(button);
}

function removeAllButtons() {
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.remove());
}
