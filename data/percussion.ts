import type { PercussionService, VideoShowcase, PercussionPhoto, MusicalShow } from '@/types';

export const percussionIntro = {
  background: [
    'I have been performing and teaching for as long as I can remember. I grew up in a musical family. Both of my parents played guitar and bass guitar and played music for most of their lives. In 1985, my father Tim S. Matyas co-founded the Guitar Gallery.',
    'I started my percussion journey in the 5th grade by playing snare drum in the school band. From there, I continued to play marching snare, marching tenor drums, and jazz drum set in high school. I studied under Val Dapra during this time at Guitar Gallery. We primarily focused on drum set, but also studied hand drumming.',
    'I continued my studies at Westminster College where I was a music double major for 3 semesters. I studied percussion and music under P.J. Gatch III and Dr. R. Tad Greig. I learned everything I know from them in regards to music theory, keyboard, and orchestral percussion. During my time at Westminster I performed in the Symphonic Band, Wind Ensemble, Men\'s Choir, and as a pit percussionist for the Opera program.',
    'Since graduating from Westminster, I have been performing and educating in the Greater Pittsburgh Area. I am a founding member of the Pittsburgh Steeline, where I play bass and boom drums. I have played pit percussion for many high school musicals. I also teach private percussion lessons, teach high school band camp, and compose and arrange.',
  ],
};

export const percussionServices: PercussionService[] = [
  {
    title: 'Broadway Musical Percussion',
    description:
      'I play both drum set and percussion books. Short on players? I can combine drum set and percussion books together for the best musical experience!',
  },
  {
    title: 'Private Percussion Lessons',
    description:
      'I teach students of all ages on drum set, keyboard, marching, and orchestral percussion. In-person and virtual lessons are available. Contact me for more details!',
  },
  {
    title: 'Pittsburgh Steeline',
    description:
      'I am a founding member of the Pittsburgh Steeline. We are the official drum line of the Pittsburgh Steelers, performing at Heinz Field during games, parades, festivals, runs/walks, corporate events, and more!',
  },
  {
    title: 'Drum Line Instruction & Arrangement',
    description:
      'Need help instructing this year\'s drum line or composing/arranging tunes? Contact me for details!',
  },
];

export const videoShowcases: VideoShowcase[] = [
  {
    title: 'The Little Mermaid - Overture',
    description:
      'Chartiers-Houston 2017 musical. In this example, I play drum set, timpani, and auxiliary percussion.',
    url: 'https://www.youtube.com/embed/-8y1fOm11sc',
  },
  {
    title: 'Hello Dolly - Bows',
    description:
      'Chartiers-Houston 2019 musical. In this example, I play swing drum set.',
    url: 'https://www.youtube.com/embed/UNDDUVl9t94',
  },
  {
    title: 'Heinz Hustle - Bass Line Showcase',
    description:
      'Pittsburgh Steeline bass line showcase at Tequila Cowboy in Pittsburgh. I am playing bass 4, or the second largest bass drum.',
    url: 'https://www.youtube.com/embed/VXnJu4ca4ag',
  },
  {
    title: '2019 Full Performance',
    description:
      'Pittsburgh Steeline full performance of our 2019 set. I am playing bass 1, or the smallest bass drum.',
    url: 'https://www.youtube.com/embed/7vFGtHBVpaI',
  },
  {
    title: 'Kickstart My Heart - Marching Band',
    description:
      'Chartiers-Houston Buccaneer Marching Band performing a cover of Motley Crue\'s Kickstart My Heart. I help instruct the drum line and co-arrange show tunes.',
    url: 'https://www.youtube.com/embed/UjBMjucZsl0?start=184',
  },
];

export const schoolDistricts = {
  instruction: ['Chartiers-Houston Marching Band'],
  musicalPit: [
    'Chartiers-Houston School District',
    'South Side Area School District',
    'Armstrong School District',
    'California School District',
    'Brentwood School District',
    'Mercer School District',
  ],
};

export const musicals = [
  'Once Upon a Mattress',
  'Oklahoma!',
  'Mary Poppins',
  'Footloose',
  'The Little Mermaid',
  'White Christmas',
  'Hello Dolly',
  'Shrek the Musical',
  'Annie',
  'Bye Bye Birdie',
  'Godspell'
];

export const percussionPhotos: PercussionPhoto[] = [
  { src: '/images/percussion/photo-1.jpg', alt: 'Boom Drum Performance' },
  { src: '/images/percussion/photo-2.jpg', alt: 'Musical Pit Percussion' },
  { src: '/images/percussion/photo-3.jpg', alt: 'Steeline Bass Drum' },
  { src: '/images/percussion/photo-4.jpg', alt: 'Keyboard Playing' },
  { src: '/images/percussion/photo-5.jpg', alt: 'Pittsburgh Steeline' },
];