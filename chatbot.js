const userMessage = [
  ["hi", "hey", "hello"],
  ["tablet", "tablets", "medicines", "medicine"],
  ["i have fever"],
  ["i have cold"],
  ["i have headache"],
  ["how are you", "how is life", "how are things", "how are you doing"],
  ["paracectamol"],
  ["i need to talk to doctor"],
  ["my appointment status"],
  ["how to book appointment"],
  ["appointment notifications"],
  ["your name please", "your name", "may i know your name", "what is your name"],
  ["what are the upcoming bookings i have"],
  ["what", "why", "how", "where", "when"],
  ["corona", "covid19", "coronavirus"],
  ["tell me a joke", "tell me about yourself"],
  ["bored", "tired"],
  ["I feel sick", "I have a fever", "I have cough"],
  ["What medicine should I take?", "Is there a cure for COVID-19?"],
  ["Do you have any medical advice?", "Can you give me some health tips?"],
  ["How can I protect myself from COVID-19?", "What precautions should I take?"],
  ["I have a headache", "I feel dizzy", "I feel weak"],
  ["I think I need to see a doctor", "Can you recommend a doctor?"],
  ["thank you"],
];

const botReply = [
  ["Hello! how can i help u"],
  ["what tablet detail you need ?"],
  ["Take paracetamol or ibuprofen in appropriate doses to help bring your temperature down."],
  ["stay hydrated","rest your self","Sip warm liquids",],
  [" apply ice or a cool washcloth to the forehead. Massage also can relieve muscle tension — and sometimes headache pain. Gently massage your temples, scalp, neck and shoulders with your fingertips, or gently stretch your neck."],
  ["im here to help you"],
  ["Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever)."],
  ["to whom would you like to talk ?"],
  ["enter your mobile number to know about your current appointment status"],
  ["its very simple!! go to home,scroll down and select book appointment option"],
  ["yes,you'll get a notification before an hour to the meeting"],
  ["hi my name is MEDE your healthcare assistant."],
  [" there is no further appointments"],
  ["COVID-19 is a type of coronavirus that has caused a global pandemic."],
  ["I'm a bot, but I can tell you a joke!"],
  ["Feeling bored or tired can be common, especially during these challenging times."],
  ["You should consider contacting a healthcare professional for proper evaluation and treatment."],
  ["I'm not a doctor, but I can provide general advice. Please consult a healthcare professional for personalized recommendations."],
  ["Wearing masks, practicing good hand hygiene, and maintaining physical distance can help prevent the spread of COVID-19."],
  ["Headaches can have various causes. It's best to consult a doctor if you're experiencing persistent symptoms."],
  ["If you're feeling unwell, it's advisable to see a doctor for proper evaluation and treatment."],
  ["you're always welcome"],
];

const alternative = [
  
  "I'm here to help you with medical queries.",
  "Can you ask me something related to health?"
];

  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }