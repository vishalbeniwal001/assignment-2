const song = `Oh-ooh-whoa-oh-oh-oh-oh
Oh-ooh-whoa-oh-oh-oh-oh
Oh-ooh-whoa-oh, oh-oh-oh-oh

You know you love me (yo), I know you care (uh-huh)
Just shout whenever (yo), and I'll be there (uh-huh)
You are my love (yo), you are my heart (uh-huh)
And we will never, ever, ever be apart (yo, uh-huh)

Are we an item? (Yo) girl, quit playin' (uh-huh)
"We're just friends" (yo), what are you sayin'? (Uh-huh)
Said, "There's another" (yo), and looked right in my eyes (uh-huh)
My first love broke my heart for the first time, and I was like (yo, uh-huh)

"Baby, baby, baby, oh"
Like, "Baby, baby, baby, no"
Like, "Baby, baby, baby, oh"
I thought you'd always be mine, mine

"Baby, baby, baby, oh"
Like, "Baby, baby, baby, no"
Like, "Baby, baby, baby, oh"
I thought you'd always be mine, mine

Oh, for you, I would've done whatever (uh-huh)
And I just can't believe we ain't together (yo, uh-huh)
And I wanna play it cool (yo), but I'm losin' you (uh-huh)
I'll buy you anything (yo), I'll buy you any ring (uh-huh)

And I'm in pieces (yo), baby, fix me (uh-huh)
And just shake me 'til you wake me from this bad dream (yo, uh-huh)
I'm goin' down (oh), down, down, down (uh-huh)
And I just can't believe, my first love won't be around, and I'm like

"Baby, baby, baby, oh"
Like, "Baby, baby, baby, no"
Like, "Baby, baby, baby, oh"
I thought you'd always be mine, mine

"Baby, baby, baby, oh"
Like, "Baby, baby, baby, no"
Like, "Baby, baby, baby, oh"
I thought you'd always be mine, mine (Luda!)

When I was 13, I had my first love
There was nobody that compared to my baby
And nobody came between us, nor could ever come above
She had me goin' crazy
Oh, I was starstruck
She woke me up daily
Don't need no Starbucks (woo)

She made my heart pound
And skip a beat when I see her in the street and
At school on the playground
But I really wanna see her on the weekend
She knows she got me dazin'
'Cause she was so amazin'
And now, my heart is breakin'
But I just keep on sayin'

"Baby, baby, baby, oh"
Like, "Baby, baby, baby, no"
Like, "Baby, baby, baby, oh"
I thought you'd always be mine, mine

"Baby, baby, baby, oh"
Like, "Baby, baby, baby, no"
Like, "Baby, baby, baby, oh"
I thought you'd always be mine, mine

I'm gone (yeah, yeah, yeah, yeah, yeah, yeah)
Now, I'm all gone (yeah, yeah, yeah, yeah, yeah, yeah)
Now, I'm all gone (yeah, yeah, yeah, yeah, yeah, yeah)
Now, I'm all gone (gone, gone, gone)
I'm gone`;

const lyrics = [
  {
    text: "<span class='text-2xl'>Oh</span>-ooh-whoa-oh-oh-<span class='text-xs'>oh</span>-<span class='text-xs'>oh</span>",
    time: 3,
  },
  {
    text: "<span class='text-3xl'>Oh</span>-<span class='text-2xl'>ooh</span>-whoa-oh-oh-oh-<span class='text-sm'>oh</span>",
    time: 6,
  },
  {
    text: "Oh-ooh-whoa-oh, <span class='text-3xl'>oh</span>-<span class='text-2xl'>oh</span>-<span class='text-xl'>oh</span>-<span>oh</span>",
    time: 10,
  },
  {
    text: "You know you love me <span class='bracket-text'>(yo)</span>, I know you care <span class='bracket-text'>(uh-huh)</span>",
    time: 15,
  },
  {
    text: "Just shout whenever <span class='bracket-text'>(yo)</span>, and I'll be there <span class='bracket-text'>(uh-huh)</span>",
    time: 18,
  },
  {
    text: "You are my love <span class='bracket-text'>(yo)</span>, you are my heart <span class='bracket-text'>(uh-huh)</span>",
    time: 23,
  },
  {
    text: "And we will never, ever, ever be apart <span class='bracket-text'>(yo, uh-huh)</span>",
    time: 26,
  },
  {
    text: "Are we an item? <span class='bracket-text'>(Yo)</span> girl, quit playin' <span class='bracket-text'>(uh-huh)</span>",
    time: 30,
  },
  {
    text: "\"We're just friends\" <span class='bracket-text'>(yo)</span>, what are you sayin'? <span class='bracket-text'>(Uh-huh)</span>",
    time: 34,
  },
  {
    text: 'Said, "There\'s another" <span class="bracket-text">(yo)</span>, and looked right in my eyes <span class="bracket-text">(uh-huh)</span>',
    time: 37,
  },
  {
    text: "My first love broke my heart for the first time, and I was like <span class='bracket-text'>(yo, uh-huh)",
    time: 41,
  },
  {
    text: '"<span class="text-3xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 44,
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">no</span>"',
    time: 48,
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 51,
  },
  {
    text: "I thought you'd always be <span class='text-xl uppercase'>mine</span>, <span class='uppercase'>mine</span>",
    time: 56,
  },
  {
    text: '"<span class="text-3xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 60,
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">no</span>"',
    time: 63, //103
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 68, //1.7
  },
  {
    text: "I thought you'd always be <span class='text-xl uppercase'>mine</span>, <span class='uppercase'>mine</span>",
    time: 72, //1.11
  },
  {
    text: "Oh, for you, I would've done whatever <span class='bracket-text'>(uh-huh)</span>",
    time: 76, //1.15
  },
  {
    text: "And I just can't believe we ain't together <span class='bracket-text'>(yo, uh-huh)</span>",
    time: 78, //1.17
  },
  {
    text: "And I wanna play it cool <span class='bracket-text'>(yo)</span>, but I'm losin' you <span class='bracket-text'>(uh-huh)</span>",
    time: 82, //1.21
  },
  {
    text: "I'll buy you anything <span class='bracket-text'>(yo)</span>, I'll buy you any ring <span class='bracket-text'>(uh-huh)</span>",
    time: 85, //1.24
  },
  {
    text: "And I'm in pieces <span class='bracket-text'>(yo)</span>, baby, fix me <span class='bracket-text'>(uh-huh)</span>",
    time: 91, //1.30
  },
  {
    text: "And just shake me 'til you wake me from this bad dream <span class='bracket-text'>(yo, uh-huh)</span>",
    time: 94, //1.33
  },
  {
    text: "I'm goin' down <span class='bracket-text'>(oh)</span>, <span class='text-2xl solid'>down</span>, <span class='text-xl bold'>down</span>,<span class='semi-bold'> down</span> <span class='bracket-text'>(uh-huh)</span>",
    time: 98, //1.37
  },
  {
    text: "And I just can't believe, my first love won't be around, and I'm like",
    time: 101, //1.40
  },
  {
    text: '"<span class="text-3xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 105, //1.44
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">no</span>"',
    time: 108, //1.47
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 112, //1.51
  },
  {
    text: "I thought you'd always be <span class='text-xl uppercase'>mine</span>, <span class='uppercase'>mine</span>",
    time: 116, //1.55
  },
  {
    text: '"<span class="text-3xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 119, //1.58
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">no</span>"',
    time: 124, //2.03
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 127, //2.06
  },
  {
    text: "I thought you'd always be <span class='text-xl uppercase'>mine</span>, <span class='uppercase'>mine</span> <span class='bracket-text'>(Luda!)</span>",
    time: 131, //2.10
  },
  {
    text: "<span class='bold'><span class='text-2xl'>W</span>hen</span> I was <span class='solid text-3xl'>13</span>, I had my first <span class='semi-bold text-2xl'>love</span> ♥",
    time: 135, //2.14
  },
  {
    text: "<span class='italic'>There was nobody that compared to my baby</span>",
    time: 139, //2.18
  },
  {
    text: "<span class='italic'>And nobody came between us, nor could ever come above</span>",
    time: 140, //2.19
  },
  {
    text: "She had me <span class='italic text-2xl'>goin'</span> <span class='text-2xl semi-bold uppercase'>crazy</span>",
    time: 142, //2.21
  },
  {
    text: "<span class='text-3xl'>Oh</span>, I was <span class='semi-bold'>starstruck</span>",
    time: 144, //2.23
  },
  {
    text: "She woke me up <span class='semi-bold'>daily</span>",
    time: 146, //2.25
  },
  {
    text: "Don't need <span class='uppercase'>no</span> Starbucks <span class='bracket-text'>(woo)</span>",
    time: 148, //2.27
  },
  {
    text: "She made my heart <span class='semi-bold'>pound</span>",
    time: 150, //2.29
  },
  {
    text: "<span class='italic'>And skip a beat when I see her in the street <span class='semi-bold'>and</span></span>",
    time: 151, //2.30
  },
  {
    text: "<span class='uppercase semi-bold'>At</span> school on the <span class='bold text-xl'>playground</span>",
    time: 153, //2.32
  },
  {
    text: "<span class='italic'>But I really wanna see her on the weekend</span>",
    time: 155, //2.34
  },
  {
    text: "She knows she got me <span class='text-xl bold'>dazin</span>'",
    time: 157, //2.36
  },
  {
    text: "'Cause she was so <span class='text-xl bold'>amazin</span>'",
    time: 159, //2.38
  },
  {
    text: "And now, my heart is <span class='text-xl bold'>breakin</span>'",
    time: 161, //2.40
  },
  {
    text: "<span class='semi-bold'>But I just keep on <span class='bold text-xl italic'>sayin</span>'",
    time: 163, //2.42
  },
  {
    text: '"<span class="text-3xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 165, //2.44
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">no</span>"',
    time: 168, //2.47
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 171, //2.50
  },
  {
    text: "I thought you'd always be <span class='text-xl uppercase'>mine</span>, <span class='uppercase'>mine</span>",
    time: 175, //2.54
  },
  {
    text: '"<span class="text-3xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 179, //2.58
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">no</span>"',
    time: 182, //3.01
  },
  {
    text: '<span class="light italic">Like</span>, "<span class="text-2xl bold">Baby</span>, <span class="text-2xl semi-bold">baby, baby</span>, <span class="text-xl uppercase">oh</span>"',
    time: 186, //3.05
  },
  {
    text: "I thought you'd always be <span class='text-xl uppercase'>mine</span>, <span class='uppercase'>mine</span>",
    time: 190, //3.09
  },
  {
    text: "I'm gone <span class='bracket-text'>(<span class='text-2xl'>yeah</span>, yeah,<span class='text-sm'> yeah</span>,<span class='text-2xl'>yeah</span>, yeah,<span class='text-sm'> yeah</span>)</span>",
    time: 193, //3.12
  },
  {
    text: "<span class='text-xl'>Now</span>, I'm all gone <span class='bracket-text'>(<span class='text-2xl'>yeah</span>, yeah,<span class='text-sm'> yeah</span>,<span class='text-2xl'>yeah</span>, yeah,<span class='text-sm'> yeah</span>)</span>",
    time: 196, //3.15
  },
  {
    text: "<span class='text-xl'>Now</span>, I'm all gone <span class='bracket-text'>(<span class='text-2xl'>yeah</span>, yeah,<span class='text-sm'> yeah</span>,<span class='text-2xl'>yeah</span>, yeah,<span class='text-sm'> yeah</span>)</span>",
    time: 200, //3.19
  },
  {
    text: "<span class='text-xl'>Now</span>, I'm all gone <span class='bracket-text'>(<span class='text-2xl semi-bold'>gone</span>, <span class='text-xl'>gone</span>, <span class='text- light'>gone</span>)</span>",
    time: 204, //3.23
  },
  {
    text: "I'm gone",
    time: 207, //3.26
  },
];

const lyricEle = document.getElementById("lyric-section");
const audio = document.getElementById("myAudio");
const infoSection = document.getElementById('info-section');
const lyricBars = document.getElementById('music-bars-section');

let currentIndex = 0;
const syncLyrics = () => {
  const currentTime = audio.currentTime;

  while (
    currentIndex < lyrics.length - 1 &&
    currentTime >= lyrics[currentIndex + 1].time
  )
    currentIndex++;

  lyricEle.innerHTML = lyrics[currentIndex].text;
};

const startScript = () => {
  infoSection.classList.add('hidden');
  lyricEle.classList.remove('hidden');
  lyricBars.classList.remove('hidden');
  audio.play();
  audio.addEventListener("timeupdate", syncLyrics);
};

const stopScript = () => {
  infoSection.classList.remove('hidden');
  lyricEle.classList.add('hidden');
  lyricBars.classList.add('hidden');
  audio.pause();
  audio.currentTime = 0;
  currentIndex = 0;
};


