import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Omni Studio Migration to Amperwave',
    company: 'Audacy',
    description:
      'Directed the migration of all Audacy podcasts from Omni Studio to inhouse podcasting platform Amperwave, delivering substantial cost-savings to the company.',
    highlights: [
      'Coordinated the cutoff and migration of 2k podcasts, 800k episodes, and all included RSS feeds.',
      'Provided hands-on SQL experience working with the team to run migration scripts and health checks.',
    ],
    tags: ['Podcasting', 'Migration', 'SQL', 'Platform'],
  },
  {
    title: 'Client Services Overhaul',
    company: 'Audacy',
    description:
      'Led the initiative to revamp our legacy Client Services package in our Audacy mobile apps to increase development velocity and provide better visibility for app support issues.',
    highlights: [
      'Migrated from JavaScript to TypeScript, converting to modern programming techniques.',
      'Incorporated XState as state management solution for all audio streaming.',
      'Sold the need for the project to leadership and coordinated all project management.',
    ],
    tags: ['TypeScript', 'XState', 'Audio Streaming', 'Refactoring'],
  },
  {
    title: 'Anytime Live',
    company: 'Audacy',
    description:
      'Led the team through the launch of the Anytime Live service that allows content creators to stream live shows to a digital audience, similar to Instagram or Facebook Live.',
    highlights: [
      'Uses SignalWire with WebRTC for session hosting and audio/video streaming, and message passing via Pubsub.',
      'Coordinated the MVP of the feature and helped elevate the impact of scope creep to stakeholders.',
      'Worked on team knowledge transfer as some team members rolled off mid-development.',
    ],
    tags: ['WebRTC', 'Live Streaming', 'SignalWire', 'Mobile'],
  },
  {
    title: 'A2 App Performance Improvements',
    company: 'Audacy',
    description:
      'Led the initiative to greatly improve the stability and performance of the apps.',
    highlights: [
      'Coordinated improvements including unnecessary rerenders, improved animation logic, more efficient Recoil atoms, fixing crashing bugs, and reducing player events sent from Client Services.',
    ],
    tags: ['Performance', 'React Native', 'Optimization'],
  },
  {
    title: 'A2 Program Launch',
    company: 'Audacy',
    description:
      'Oversaw the pre-launch development and July 2022 launch of new A2 React Native iOS and Android apps, Web SPA, and Client Services core package.',
    highlights: [
      'Dual-maintained legacy native iOS and Android apps until the cutover to the new RN apps.',
      'Coordinated with all backend teams on a run book, deploy dependencies, and rollback options.',
    ],
    tags: ['React Native', 'iOS', 'Android', 'Web SPA', 'Launch'],
  },
  {
    title: 'Curbside Pickup',
    company: 'Branding Brand',
    description:
      'Engineering and project management of a curbside pickup feature for two wholesale club partner\'s mobile apps.',
    highlights: [
      'Developed a workflow between the consumer app and the team member app so users can buy online, pull up to the store, and have their order delivered to their car.',
      'During the pandemic, this feature allowed users to safely pick up their orders while not exposing themselves and others in the store. For people in high-risk groups, this potentially is the only way for them to get life-saving food and supplies.',
    ],
    tags: ['React Native', 'E-Commerce', 'COVID-19', 'Mobile'],
  },
  {
    title: 'Engineering New-Hire Onboarding',
    company: 'Branding Brand, Audacy, and FIS',
    description:
      'Spearheaded the Confluence engineering onboarding program for new team members, providing a comprehensive semi-asynchronous learning experience.',
    highlights: [
      'Utilized Jira, articles and videos to create an asynchronous onboarding experience.',
      'Recorded training videos so new hires can learn parts of the process asynchronously.',
    ],
    tags: ['Onboarding', 'Documentation', 'Leadership'],
  },
  {
    title: 'Instacart Same-Day Delivery Integration',
    company: 'Branding Brand',
    description:
      'Led the team to create a seamless integration with the wholesale club partner and Instacart for same-day delivery purchases.',
    highlights: [
      'Utilized client Instacart API wrappers to engineer a native and seamless checkout experience of Instacart items.',
      'Created new React Native components to show and receive SDD data.',
      'Included a mixed cart experience (ship to home, buy online pickup in store, and Instacart items all in the same cart).',
    ],
    tags: ['React Native', 'API Integration', 'E-Commerce'],
  },
  {
    title: 'PayPal Payment Integration',
    company: 'Branding Brand',
    description:
      'Integrated React Native PayPal as a bridge into the wholesale club partner\'s app.',
    highlights: [
      'Utilized the Braintree SDK and JWT token creation on the server side to create a web view experience for associating a PayPal account to a checkout.',
    ],
    tags: ['React Native', 'Payments', 'Braintree SDK'],
  },
  {
    title: 'Guitar Gallery Website Redesign',
    company: 'Freelance',
    description:
      'Worked with father (Tim S. Matyas) and brother (Tom Matyas) to redesign Guitar Gallery\'s website.',
    highlights: [
      'Project plan based on requirements gathering and evaluation of the existing site.',
      'Used WordPress as the CMS technology.',
      'Created both staging (AWS EC2) and production (DreamHost) environments.',
    ],
    tags: ['WordPress', 'AWS', 'Web Design'],
  },
  {
    title: 'Safety Data Sheet Authoring Software',
    company: 'ChemADVISOR / UL Solutions',
    description:
      'Engineering manager, project manager, and developer as part of a five-member development team.',
    highlights: [
      'Microsoft .NET desktop application written in C# and hosted in AWS.',
      'Architected and managed a team to build an XML content repository that mirrored the implementation of Subversion using a web service and Microsoft SQL database.',
      'Performed requirements engineering, managed and estimated issues, created and kicked off sprints, monitored sprint progress, closed sprints, and deployed software.',
    ],
    tags: ['C#', '.NET', 'AWS', 'SQL Server', 'XML'],
  },
  {
    title: 'Autonomous Firefighting Robots',
    company: 'Westminster College & Freelance',
    description:
      'Constructed two autonomous robots (YYZ and BU2B2) that navigated rooms of a mock house floor layout searching for and extinguishing a candle.',
    highlights: [
      'YYZ was written in C with an experimental operating system with 2 linked Atmel chips.',
      'BU2B2 used an Arduino MEGA board and was written in C++.',
      'Competed for 3 years in the Trinity College Firefighting Competition in Hartford, CT.',
      'This was an incredible experience that instilled a lifelong interest in hobby robotics.',
    ],
    tags: ['C', 'C++', 'Arduino', 'Robotics', 'Hardware'],
  },
];
