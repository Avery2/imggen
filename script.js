let guys = [
    "Blades fans 😎",
    "Emo 🖤",
    "Weeb 🌸",
    "Suns out Guns out 💪",
    "Joke but louder 🤣",
    "Grustle bro 💪😎",
    "Superhero movie 🦸‍♂️",
    "Cat 😺",
    "NPC 🎮",
    "You smoke? 🚬",
    "Feminist 👩‍🔬",
    "Bass pro 🎣",
    "Valorant gamer 🎮",
    "Truck <3 🚚",
    "Hypebeast 🤩",
    "Yellow ass 💛",
    "Slow Texter ⏳",
    "Fast Texter ⚡️",
    "I'm Italian 🇮🇹",
    "Russ 🎵",
    "I'm nice 😇",
    "Subscription carrier 📦",
    "E boys 🤘",
    "Social Social Media 📱",
    "Hmu for a tbh guy 🤙",
    "Guy obsessed with making guys 🤔",
    "Gatekeeper 🚧",
    "Hater 😡",
    "Golden retriever 🐕",
    "Dog people 🐶",
    "Cat people 🐱",
    "Foodie 🍽️",
    "Organized Chaos 🌀",
    "Minimalist 🧘‍♂️",
    "Coffee Connoisseur ☕",
    "Theatre Kid 🎭",
    "Health Nut 🥦",
    "I'm Sober 🚱",
    "No but have you heard 🙉",
    "Cheerleader 📣",
    "Gentle Giant 🦍",
    "Eternal Optimist 🌞",
    "Smile Ambassador 😁",
    "Compliment Master 💯",
    "Genuine Optimist 🌟",
    "Cant take a Compliment 🙈",
    "Cook 👨‍🍳",
    "Chef 👩‍🍳",
    "ENERGY ⚡️",
    "Patient ⌛",
    "Inspiration Generator 🌠",
    "Comforting Presence 🤗",
    "Goofy Dancer 🕺",
    "Handwritten Letters Sender ✉️",
    "Community Builder 🏘️",
    "Cuddler 🤗",
    "Creative Surprise Planner 🎁",
    "Leaky Lips 🤐",
    "Hooded man 👤",
    "Mama's boy 👩‍👦",
    "Types hahaha instead of HAHAHAHA 😂",
    '"its not that deep 🤔"',
    "alcoholics 🍺",
    "1-up 🍄",
    ];

// registerFont(path.join("./NotoColorEmoji.ttf", 'NotoColorEmoji.ttf'), { family: 'Noto Color Emoji' });


const { createCanvas } = require('canvas');
const fs = require('fs');

function createImageFromText(text, filename) {
    // Create canvas
    const canvas = createCanvas(250, 250);
    const ctx = canvas.getContext('2d');

    // Set background color
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text color
    ctx.fillStyle = 'black';

    // Set font properties
    ctx.font = '30px Arial';

    // Calculate width and height of text to center it
    let textWidth = ctx.measureText(text).width;
    let textHeight = ctx.measureText('M').width;  // 'M' is used to estimate text height

    // Draw text in center of canvas
    ctx.fillText(text, (canvas.width - textWidth) / 2, (canvas.height + textHeight) / 2);

    // Save as PNG
    let out = fs.createWriteStream(__dirname + '/' + filename);
    let stream = canvas.createPNGStream();
    stream.pipe(out);

    out.on('finish', () =>  console.log('PNG file was created.'));
}


guys.map(guy => {
    const words = guy.split(' ');

    if (words.length > 2) {
        let withLineBreaks = '';
        for(let i = 0; i < words.length; i++) {
            withLineBreaks += words[i];
            if((i+1) % 2 === 0 && i !== words.length - 1) {
                withLineBreaks += '\n';
            } else if(i !== words.length - 1) {
                withLineBreaks += ' ';
            }
        }
        return withLineBreaks;
    }

    return guy;
}).forEach((guy, index) => {
    createImageFromText(guy, index + '.png');
});
