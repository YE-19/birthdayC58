// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Secret Date / Password Protection ---
  password: {
    code: '1204',
    title: 'enter a secret date',
    subtitle: 'a date only we know ♡',
    buttonText: 'UNLOCK ♡',
    errorMessages: [
      'no babee!',
      'no try 1122',
    ],
    sticker: '/images/hello-kitty-crying.jpg',
  },

  welcome: {
    greeting: 'hello ',
    name: 'Hanona',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', sticker: '/images/hello-kitty-camera.jpg', label: 'Captured\nMemories' },
      { id: 'flowers', icon: '🌷', sticker: '/images/hello-kitty-flowers.jpg', label: 'Virtual\nFlowers' },
      { id: 'song', icon: '🎵', sticker: '/images/hello-kitty-music.jpg', label: 'our\nsong' },
      { id: 'letter', icon: '💌', sticker: '/images/hello-kitty-cake.jpg', label: 'Love\nLetter' },
    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always' },
      { src: '/images/memory6.jpg', label: '❤️', tag: 'mine' },
      { src: '/images/memory7.jpg', label: '❤️', tag: 'us' },
      { src: '/images/memory8.jpg', label: '❤️', tag: 'us' },
      { src: '/images/memory9.jpg', label: '❤️', tag: 'us' },
      { src: '/images/memory10.jpg', label: '❤️', tag: 'us' },
    ],
  },



  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    poems: [
      "كل سنه ونتي جميله",
      "كل سنه ونتي رقيقه",
      "كل سنه ونتي لطيفه",
      "كل سنه ونتي حنينه",
      "كل سنه ونتي دلوعه",
      "كل سنه ونتي تحفه",
      "كل سنه ونتي قطتي",
      "انا بحبك اوي اوي اوي",
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: `ححححنننوووووووننننهههه 🥳🥳🥳♥️♥️♥️♥️


حنونه عيوني وحبيبة قلبي ودنيتي كلها كبرتي سنه ي كتكوته كل سنه ونتي طيبه ي حبيبتي كل سنه ونتي اجمل واحلى وارق واغلى والطف بنوته ف الدنيا كل سنه ونتي الدنيا كلها وعمري كله كل سنه ونتي الضحكه اللي بتحلي ايامي كل سنه ونتي النعمه والهديه اللي ربنا اداهالي والاقرب لقلبي كل سنه ونتي اجمل واحلى صدفه قابلتها ودايما دايما بدعي ربنا يديمها ليا العمر كلو ومتحرمش منها ولا من ضحكتها التحفه دي ابدا كل سنه ونتي طيبه ي اجمل واحلى وارق عيون فالدنيا كل سنه ونتي دايما معايا ي نور عيوني كل سنه ونتي طيبه ي اشطر بشمهندسه فالدنيا كل سنه ونت طيب يولا ي قمر ي حلو ي تحفه انت ياللي مفيش منك وكل سنه ونا قاعد على قلبك كدا إن شاء الله كل سنه ونتي طيبه ي حبيبتي وكل العمر ليكي ي عمري


كلل سننهه ونتي طيببهه ي مللككههه 👸🏻👸🏻👸🏻♥️


ربنا يخليكي ليا ويديمك ليا اجمل واغلى نعمه ف حياتي انتي فعلا اجمل حاجه حصلتلي واقرب انسانه ليا ولقلبي الدنيا فيها ناس كتير بس بالنسبالي مفيش الا انتي ومفيش دنيا من غيرك مبيفرقليش حد غيرك وانتي الوحيده اللي بيفرق معايا دايما انها تكون بخير وكويسه ساعتها بتبقا خلاص الدنيا كلها كويسه مش عايز حاجه تاني انتي الوحيده اللي يهمني وفارق معايا وجودها الوحيده اللي يهمني انبساطها واللي بتمنى من ربنا اقدر اخليها مبسوطه طول العمر ربنا يحميكي ي حبيبتي ويحفظك ويباركلي فيكي يارب انا دايما هبقا منبهر بيكي وفخور بيكي ودايما هقول يبختي ويحظي بيكي انا حظي الحلو فالدنيا لقيتو فيكي اصلا ربنا يديمك ليا ويجعل فيكي نصيبي الحلو كلو 


انا بحبك اوي اوي اوي اوي ي حنه مفيش كلام يوصف جزء من حبي ليكي والله شايف فيكي راحتي بشوف نفسي انسان مختلف معاكي انسان شايف الدنيا بعيونك الحلوه كل حاجه حلوه دورت او بدور عليها انا لقيتها فيكي انتي مهما قابلت ناس وشوفت ناس عمري م هلاقي حد زيك ولا عمر حد هيوصل لمكانك انتي بالنسبالي مش مجرد حب انتي جنتي ودنيتي وحبيبة قلبي وحبيبة روحي انتي الهديه اللي ربنا اداهالي والوحيده اللي بتمنى من ربنا تفضل معايا العمر كلو  واقدر احافظ عليكي واصونك طول العمر كل سنه ونتي طيبه ي نور عيني 🫂♥️♥️♥️♥️

كل سنهه وراا سنهه وراا سننهه ونا وانتت مععع بعضضنااا زي منتت وزيي مناااا`,
    signoff: 'I love you always,',
    signature: 'Your love ♡',
  },


}

export default content
