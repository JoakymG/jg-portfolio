import { Component, OnInit } from '@angular/core';

interface techStack {
  name: String;
  imagePath: String;
}
@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent implements OnInit {
  techStack: Array<techStack> = [
    {
      name: 'HTML5',
      imagePath:
        'data:image/png;base64,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',
    },
    {
      name: 'CSS3',
      imagePath:
        'data:image/png;base64,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',
    },
    {
      name: 'SASS',
      imagePath:
        'https://icons-for-free.com/iconfiles/png/512/bxl+sass-1325051938962961620.png',
    },
    {
      name: 'Angular',
      imagePath:
        'https://angular.io/assets/images/logos/angular/angular_solidBlack.svg',
    },
    {
      name: 'Git & GitHub',
      imagePath:
        'https://www.damiandemasi.com/static/media/icon-github.8d8f94f2.webp',
    },
    {
      name: 'JavaScript',
      imagePath:
        'data:image/png;base64,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',
    },
    {
      name: 'NgRx',
      imagePath: '../../assets/images/tech-stack/ngrx.svg',
    },
  ];

  myStory: Array<string> = [
    'My interest in technology started as far as I can remember, at a couple years old. I have souvenirs of playing minesweeper on an old windows xp machine and be mesmerized at the infamous screensavers. I spend too much time to see the end of the maze',
    'Since then, I always had an interest for technology, but I didn\'t really do anything relatable at the time, the only thing I was doing is play video games and dismantle old electronics to see what was inside. The only time I touched some "code", it was to configure the json file of a Minecraft Server.',
    'Jump to highschool, science course, we learned electricity! We made a circuit with a light bulb, a switch and a battery; the level was as high as homo erectus discovering fire. I, then, discovered a passion for electronics and programming, my first project  was a useless box: You press the switch on the box and a lever comes out of it to reset the switch... Homo erectus to Neanderthals!',
    'From my new brilliant discovery, I now knew what my future was, so I took Robotics and Programming at college. I knew so much that this is what I wanted, that only did one year before stepping out of school. At least, I\'ve learned more coding, we were using C to make little microcontroler programs. I also learned a bit of C# on my own to make a game in Unity, a bit more fun.',
    'Fast fowards a couple of uneventful years, I landed a job as a tech at Staples. My job was quite simple, taking computers in, make a diagnostic, wishing I didn\'t see almost everything that people put in their computer... and do the proper repairs needed. Not long after, I changed job to be an network IT specialist at a industrial automation reseller.',
    'Needless to say that networking wasn\'t my top skill, but fortunately for me, two of my top skills is self-teaching and quick learner, so I went on and learned networking. I did a couple of great project like redoing the entire cabling of the server racks and redoing the entire firewall protection.',
    'Being a network admin, you need a lot of info like username, password, list of material, licenses and the list goes on, the look on my face when I saw that it was all well stored in a, wait for it, Excel spread sheet! Whooo! When it takes you 15min to find the right password. Let me tell you one of my favorite quote, it goes like this: "Excel is not a database." -Probably Microsoft themselves. That was mistake number one. Mistake number two, I went on and build an entire app using Access! Sometimes I think I like to put a little challenge, I don\'t like VBA, even less making a UI in Access.',
    'In the mean time, I have stumbled upon a youtube channel name "The Coding Train", it\'s mainly little 5-10 minutes projects to do using p5, a JavaScipt Library. I tried a couple project and it was love at first sight, I found my programming language. So I did a couple projects on and off, nothing very serious, until I came accross the "Angular - Node - MongoDB & Express (MEAN) Tutorial for Beginners - Getting Started" on youtube. Game changer, I went from not knowing what to do with JavaScript, to full Web Stack using entirely Javascript! Front to Back, top to bottom.',
    'So here I am, a couple months later with more than 500 hours of online course and self-taught full stack web developer. I know it\'s going to be an amazing journey, but the learning is only beggining for me! I\'m looking foward to build numerous projects, studying new technologies every day and gaining a ton of experience along the way.',
    'I strongly believe in self growth and forcing myself to never stop learning as Albert Einstein well said that "Intellectual growth  should commence at birth and cease only at death".'
  ];

  constructor() {}

  ngOnInit(): void {}
}
