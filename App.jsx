
import { useState } from "react";
import "./App.css";

const adventure = {
  start: {
    text: \`You are Sterling, adventurer extraordinaire and part-time collector of shiny things that probably aren’t cursed. Today is your birthday, though the world seems to have forgotten — except maybe one person.

You’re standing at the edge of the Whispering Woods, where trees hum lullabies and squirrels have suspiciously good vocabulary. Rumor has it, there’s a mystic relic inside: a silver locket, enchanted to reveal your true path.

Suddenly, a tiny squirrel in a top hat scurries up a stump and squeaks in a surprisingly deep voice:
“Sterling. The forest has been... expecting you.”\`,
    options: [
      { text: "Follow the Glowing Path", next: "glow1" },
      { text: "Take the Shadow Trail", next: "shadow1" },
      { text: "Climb the Singing Tree", next: "tree1" },
    ],
  },
  glow1: {
    text: \`You step onto the glowing trail. The mushrooms beneath your feet sparkle with each step. You hear laughter ahead — not menacing, but mischievous.

A raccoon wearing a monocle is juggling blueberries. He nods to you and says, “You’ll want to pass the riddle to go on. What walks on four legs in the morning, two in the afternoon, and three in the evening?”\`,
    options: [
      { text: "A human", next: "glow2" },
      { text: "A centaur", next: "glowFail" },
    ],
  },
  glowFail: {
    text: \`The raccoon sighs, drops a blueberry, and waves you away. “Come back when you’ve read more scrolls.” You return to the start.\`,
    options: [
      { text: "Back to Start", next: "start" } 
    ]
  },
  glow2: {
    text: \`The raccoon claps and tosses you a glowing stone. “Smart and shiny. Go forth!”

You proceed deeper until you find a strange orb spinning slowly in the air, glowing with a heartbeat-like rhythm.

Touching it reveals a vision of a velvet-wrapped object on a pedestal ahead...\`,
    options: [
      { text: "Approach the pedestal", next: "glow3" }
    ]
  },
  glow3: {
    text: \`You approach the pedestal, where the object pulses gently. It's the silver locket — warm and familiar. As you open it, a voice begins to play...\`,
    options: [
      { text: "Play the Voicenote", next: "voicenote" }
    ]
  },
  shadow1: {
    text: \`You take the shadow trail. It's quiet, but the wind seems to whisper your name. A path of glowing runes appears.

A mysterious fox in a cloak blocks the way. “Only those who pass the test of memory may proceed,” it says. “What color were the mushrooms on the glowing path?”\`,
    options: [
      { text: "Blue", next: "shadow2" },
      { text: "Red", next: "shadowFail" }
    ]
  },
  shadowFail: {
    text: \`The fox flicks its tail, and a sudden gust of wind blows you backward. “Wrong. Try again later.” You find yourself back at the forest entrance.\`,
    options: [
      { text: "Back to Start", next: "start" }
    ]
  },
  shadow2: {
    text: \`The fox smiles slyly and vanishes. You step forward, and the runes light the way to a small glade where a tree glows with gentle fireflies.

Beneath it sits a journal titled “Sterling’s Secrets.” Inside is a clue: “Find what sings at night.”\`,
    options: [
      { text: "Follow the sound of singing", next: "shadow3" }
    ]
  },
  shadow3: {
    text: \`You follow the singing to a pedestal wrapped in vines. Nestled there is the silver locket, glowing with soft warmth. You open it, and a voice begins to play...\`,
    options: [
      { text: "Play the Voicenote", next: "voicenote" }
    ]
  },
  tree1: {
    text: \`You climb the Singing Tree. The melody shifts to something joyful — a birthday tune.

As you reach a branch halfway up, a chirping bird offers you a feather. “Trade this for truth,” it says cryptically.\`,
    options: [
      { text: "Take the feather and climb higher", next: "tree2" },
      { text: "Refuse the feather", next: "treeFail" }
    ]
  },
  treeFail: {
    text: \`The tree shudders and gently lowers you to the ground. “Only the bold get cake,” whispers the wind.\`,
    options: [
      { text: "Back to Start", next: "start" }
    ]
  },
  tree2: {
    text: \`You accept the feather and climb. At the top, you find a nest with a shimmering pendant — not a bird's, but yours. A whisper says, “You’re almost there.”

A nearby vine points to a glowing branch with a velvet-wrapped locket.\`,
    options: [
      { text: "Reach for the locket", next: "tree3" }
    ]
  },
  tree3: {
    text: \`You reach the glowing branch. The locket is warm to the touch. As you open it, a voice begins to play...\`,
    options: [
      { text: "Play the Voicenote", next: "voicenote" }
    ]
  },
  voicenote: {
    text: \`“Hey, so yeah I hope you liked this. I have 0.1% creativity and I used it all on this lol.
    HAPPY BIRTHDAY 🎂🥳🎉🎈🎁🎊 “\`,   
    options: [],
  },
};

function App() {
  const [step, setStep] = useState("start");
  const current = adventure[step];

  return (
    <div className="App">
      <h1>🎉 Sterling’s Birthday Adventure 🎂</h1>
      <p>{current.text}</p>
      <div>
        {current.options.map((opt, idx) => (
          <button key={idx} onClick={() => setStep(opt.next)}>
            {opt.text}
          </button>
        ))}
        {step === "voicenote" && (
          <audio controls>
            <source src="HappyBirthday.m4p" type="audio/mp4" />
          </audio>
        )}
      </div>
    </div>
  );
}

export default App;
