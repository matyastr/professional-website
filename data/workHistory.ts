import type { WorkHistoryItem } from '@/types';

export const workHistory: WorkHistoryItem[] = [
  {
    company: 'FNB (First National Bank)',
    location: 'Pittsburgh, PA',
    roles: [
      {
        title: 'Manager of Business Analysts',
        startDate: 'April 2026',
        endDate: 'Present',
        description:
          'Lead a specialized team of Business Analysts in the strategic delivery of end-to-end software and hardware solutions for the retail branch network. Oversee the requirements lifecycle for critical banking infrastructure, including teller systems, fraud prevention tools, and customer acquisition platforms.',
      },
    ],
  },
  {
    company: 'FIS',
    location: 'Pittsburgh, PA (Remote)',
    roles: [
      {
        title: 'Director of Mobile Engineering',
        startDate: 'January 2025',
        endDate: 'June 2025',
        description:
          'Coordinated the procurement of 60 developers, organized by 7 feature teams, geographically located in the US, Mexico, Poland, and India, to transform our white-label mobile banking app. Promoted a unified mission and values, led in engineering best practices, found process improvement opportunities.',
        highlights: [
          'Reimagined feature set while migrating from Ionic-Angular to React Native, aligning with a unified tech stack.',
        ],
      },
    ],
  },
  {
    company: 'Audacy',
    location: 'Pittsburgh, PA (Remote)',
    roles: [
      {
        title: 'Sr. Director of Engineering, Amperwave and BetQL',
        startDate: 'September 2023',
        endDate: 'January 2025',
        description:
          'Directed the delivery teams on two of the most profitable Audacy assets, BetQL and Amperwave. Delivered key-growth player props sports betting features for the BetQL platform. Reimagined the Amperwave podcasting platform to be seamlessly integrated with internal and external parties, increasing platform adoption and revenue growth.',
        highlights: [
          'Directed Audacy\'s Amperwave full stack engineering and QA teams around podcast delivery, ingestion, and AdTech campaign management.',
          'Directed the BetQL full stack engineering efforts including React Native iOS and Android mobile apps, Next.JS web app, subscription management via RevenueCat, Stripe, GraphQL Node server, MySQL, and GCP backend.',
        ],
      },
      {
        title: 'Sr. Director of Engineering, Clients and Client Services',
        startDate: 'January 2023',
        endDate: 'September 2023',
        description:
          'Managed all B2C Audacy streaming app teams (Dev, QA, PM) including native, RN iOS, and Android mobile apps, React web SPA, and connected devices such as Alexa, Google Home, Automotive OS, and Smart TVs.',

      },
      {
        title: 'Director of Engineering, Clients',
        startDate: 'January 2022',
        endDate: 'December 2022',
        description:
          'Responsible for the launch of the A2 platform, a complete overhaul of our apps and infrastructure. Led a group of 20 team members, including 2 engineering managers and respective development teams, a product owner, a scrum master, and QA team.',
        highlights: [
          'Platform increased total listening hours (TLH) year over year since launching in July 2022, increasing ad revenue and making it the pivotal revenue driving digital platform for Audacy.',
        ],
      },
    ],
  },
  {
    company: 'Branding Brand',
    location: 'Pittsburgh, PA (Remote)',
    roles: [
      {
        title: 'Director of E-Commerce Engineering',
        startDate: 'March 2021',
        endDate: 'January 2022',
        description:
          'Led the engineering, product development, & client relationships of our major retail partners. Pivotal in leading the teams responsible for launching the Ralph Lauren, DXL, and Tilly\'s mobile apps, along with new and improved versions of the Burberry, BJ\'s Wholesale Club, and Madewell mobile apps.',
        highlights: [
          'Led five engineering managers and their respective mobile development teams.',
          'Managed strong development, product, QA, and design coordination to meet client expectations.',
        ],
      },
      {
        title: 'Software Development Manager',
        startDate: 'July 2019',
        endDate: 'March 2021',
        description:
          'Acted as engineering and project manager for the BJ\'s Wholesale Club React Native mobile app.',
        highlights: [
          'Included capacity planning, requirements engineering, technical feasibilities, Scrumban project management, retrospectives, demos, story grooming and sub tasking, and product direction.',
          'Responsible for the career and technical coaching of a team of developers.',
          'Promoter of best practices: Jira project and release management, automation when possible, full team PR reviews, unit tests, and embedding checklists in critical activities.',
        ],
      },
    ],
  },
  {
    company: 'Brunner',
    location: 'Pittsburgh, PA',
    roles: [
      {
        title: 'Product Director',
        startDate: 'October 2018',
        endDate: 'July 2019',
        description:
          'Product and project manager of an investment portal for a large player in the wealth-management industry.',
        highlights: [
          'Created an interactive and engaging team culture while ensuring growth and profitability.',
          'Implemented Kanban development methodology and continuous improvement activities.',
          'Worked with clients and design/development teams to develop short and long-term plans for system design.',
          'Provided recommendations and insight to clients regarding their technology and development platforms.',
        ],
      },
    ],
  },
  {
    company: 'ChemADVISOR / UL Solutions',
    location: 'Pittsburgh, PA',
    roles: [
      {
        title: 'Software Engineering Manager',
        startDate: 'May 2015',
        endDate: 'October 2018',
        description:
          'Led and developed our safety data sheet authoring full-stack software suite and our first ChemADVISOR Training ionic mobile application. Increased company revenue as we grew SaaS hosting of our authoring software year over year.',
        highlights: [
          'Supervised and mentored a globally diverse engineering team in the USA, China, Belgium, and India.',
        ],
      },
      {
        title: 'Software Engineer',
        startDate: 'May 2012',
        endDate: 'May 2015',
        description:
          'Microsoft .NET Agile developer as part of a global team using C#, VB.NET, SQL Server, XML, XSLT, and CSS.',
        highlights: [
          'Reduced code complexity, increased test coverage, and profiled code using Big(O) time complexity analysis.',
          'Implemented a CruiseControl.NET server, the team\'s first automated continuous integration tool.',
        ],
      },
    ],
  },
];
