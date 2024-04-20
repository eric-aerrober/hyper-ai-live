import { HyperExecution } from "hyper-ai";
import { WorkflowSaved } from "../workflow";
import ReactJson from "react-json-view";
import { group } from "console";


interface AnswerQuestionInput {
    question: string
}

export class GenerateIdeasWorkflow extends WorkflowSaved<AnswerQuestionInput> {

    constructor() {
        super({
            name: 'Generate Buisness Ideas',
            fields: [],
            requires_llm: true
        });
    }

    protected async internalInvoke(h: HyperExecution): Promise<void> {

        const businessSectors = [
            'Finance',
            'Healthcare',
            'Education',
            'Retail',
            'Real Estate',
            'Travel',
            'Food',
            'Entertainment',
            'Transportation',
            'Technology',
            'Media',
            'Energy',
            'Construction',
            'Agriculture',
            'Manufacturing',
            'Hospitality',
            'Telecommunications',
            'Automotive',
            'Legal',
            'Consulting',
            'Marketing',
            'Insurance',
            'Non-Profit',
            'Government',
            'Other'
        ]

        const aspectsOfThings = [
            'Websites',
            'Apps',
            'Software',
            'E-commerce',
            'Artificial Intelligence',
            'Internet of Things',
            'Virtual Reality',
            'Augmented Reality',
            'Cybersecurity',
            'Data Analytics',
            'Cloud Computing',
            'Mobile Applications',
            'Social Media',
            'Digital Marketing',
            'Online Education',
            'Healthtech',
            'Fintech',
            'SaaS',
            'Gaming',
            'Robotics',
            'Clean Energy',
            'Smart Home',
            'Biotechnology',
            'Fashion Tech',
            'Food Tech',
            'Travel Tech',
            'Sports Tech',
            'Music Tech',
            'EdTech',
            'AgriTech',
            'Logistics',
            'Renewable Energy',
            'Space Tech',
            'Green Tech',
            'Health and Wellness',
            'Fitness Tech',
            'Beauty Tech',
            'Automotive Tech',
            'Insurance Tech',
            'Legal Tech',
            'Media and Entertainment',
            'E-commerce Platforms',
            'Marketplaces',
            'Social Networking',
            'Gig Economy',
            'Sharing Economy',
            'On-demand Services',
            'Crowdfunding',
            'Cryptocurrency',
            'Payment Solutions',
            'Supply Chain Management',
            'Customer Relationship Management',
            'Project Management',
            'Collaboration Tools',
            'Productivity Apps',
            'Communication Tools',
            'Video Conferencing',
            'Remote Work Solutions',
            'Healthcare Solutions',
            'Education Technology',
            'Gamification',
            'Personal Finance',
            'Investment Platforms',
            'Digital'
        ]

        const businessModels = [
            'Subscription',
            'Freemium',
            'Marketplace',
            'E-commerce',
            'SaaS',
            'Lead Generation',
            'Affiliate Marketing',
            'Dropshipping',
            'Crowdfunding',
            'On-demand',
            'Sharing Economy',
            'Gig Economy',
            'Blockchain',
            'Cryptocurrency',
            'Payment Solutions',
            'Supply Chain Management',
            'Customer Relationship Management',
            'Project Management',
            'Collaboration Tools',
            'Productivity Apps',
            'Communication Tools',
            'Video Conferencing',
            'Remote Work Solutions',
            'Healthcare Solutions',
            'Education Technology',
            'Gamification',
            'Personal Finance',
            'Investment Platforms',
            'Digital'
        ]

        const colors = [
            'Red',
            'Blue',
            'Green',
            'Yellow',
            'Orange',
            'Purple',
            'Pink',
            'Brown',
            'Gray',
            'Black',
            'White'
        ]

        const feelings = [
            'Happy',
            'Excited',
            'Stressed',
            'Inspired',
            'Tired',
            'Confused',
            'Curious',
            'Frustrated',
            'Hopeful',
            'Anxious',
            'Content',
            'Bored',
            'Energetic',
            'Optimistic',
            'Overwhelmed',
            'Productive',
            'Relaxed',
            'Satisfied',
            'Unmotivated',
            'Accomplished',
            'Creative'
        ]

        const kindsOfPeople = [
            'Students',
            'Entrepreneurs',
            'Parents',
            'Gamers',
            'Artists',
            'Fitness Enthusiasts',
            'Travelers',
            'Students',
            'Remote Workers',
            'Small Business Owners',
            'Freelancers',
            'Musicians',
            'Book Lovers',
            'Foodies',
            'Fashionistas',
            'Pet Owners',
            'Outdoor Adventurers',
            'Tech Enthusiasts',
            'Social Media Influencers',
            'Photographers',
            'Content Creators',
            'Teachers',
            'Health and Wellness Professionals',
            'Sports Fans',
            'Investors',
            'Designers',
            'Writers',
            'Gardeners',
            'Coders',
            'Scientists',
            'Engineers',
            'Architects',
            'Lawyers',
            'Doctors',
            'Nurses',
            'Psychologists',
            'Chefs',
            'Athletes',
            'Dancers',
            'Actors',
            'Singers',
            'Comedians',
            'Journalists',
            'Activists',
            'Volunteers',
            'Philanthropists',
            'Leaders',
            'Innovators',
            'Dreamers',
            'Explorers',
            'Problem Solvers',
            'Change Makers',
            'Visionaries',
            'Creators',
            'Influencers',
            'Mentors',
            'Coaches',
            'Consultants',
            'Researchers',
            'Analysts',
            'Strategists',
            'Project Managers',
            'Entrepreneurship Students',
            'Technology Students',
            'Business Students',
            'Marketing Students',
            'Design Students',
            'Engineering Students',
            'Art Students',
            'Music Students',
            'Film Students',
            'Writing Students',
            'Science Students',
            'Medical Students',
            'Law Students',
            'Education Students',
            'Psychology Students',
            'Culinary Students',
            'Sports Students',
            'Language Students',
            'History Students',
            'Mathematics Students',
            'Physics Students',
            'Chemistry Students',
            'Biology Students',
            'Geology Students',
            'Astronomy Students',
            'Environmental Science Students',
            'Social Science Students',
            'Computer Science Students',
            'Data Science Students',
            'Robotics Students',
            'Artificial Intelligence Students',
            'Cybersecurity Students',
            'Web Development Students',
            'Mobile App Development Students',
            'Game Development Students',
            'UI/UX Design Students',
            'Graphic Design Students',
            'Fashion Design Students',
            'Interior Design Students',
            'Architecture Students',
            'Law Students',
            'Medical Students',
            'Nursing Students',
            'Psychology Students',
            'Counseling Students',
            'Nutrition Students',
            'Fitness Students',
            'Physical Therapy Students',
            'Sports Science Students',
            'Healthcare Administration Students',
            'Public Health Students',
            'Social Work Students',
            'Environmental Studies Students',
            'Sustainability Students',
            'Political Science Students',
            'Economics Students',
            'International Relations Students',
            'Anthropology Students',
            'Sociology Students',
            'Philosophy Students',
            'Religious Studies Students',
            'English Literature Students',
            'Creative Writing Students',
            'Journalism Students',
            'Film Studies Students',
            'Theater Students',
            'Dance Students',
            'Music Performance Students',
            'Music Education Students',
            'Music Therapy Students',
            'Fine Arts Students',
            'Studio Art Students',
            'Art History Students',
            'Fashion Merchandising Students',
            'Fashion Design Students',
            'Textile Design Students',
            'Interior Design Students',
            'Architecture Students',
            'Urban Planning Students',
            'Law Students',
            'Legal Studies Students',
            'Pre-Med Students',
            'Pre-Nursing Students',
            'Pre-Dental Students',
        ]

        const randomInList = (list: string[]) => {
            return list[Math.floor(Math.random() * list.length)]
        }

        const randomGroup = () => {
            return [
                randomInList(businessSectors),
                randomInList(aspectsOfThings),
                randomInList(businessModels),
                randomInList(colors),
                randomInList(feelings),
                randomInList(kindsOfPeople)
            ].join(', ')
        }

        h.tell(`
            We will be generating random business ideas and then refining them to see if they are viable.

            To do this, we will first be trying to get you into the right headspace to generate ideas, generate ideas, and then try to refine them into something that could be a viable business.

            Some things to know when we mean "business ideas" are software / online / mostly digital ideas that can be launched quickly and cheaply by software developers.
            
        `);

        await h.ask({
            prompt: `
                First, we will be aiming to get you into the right headspace to generate ideas. What i will do, is use a wordbank i have to construct a collection of word pairings. These word pairings are amlost always nonsense, but they can help you think of new ideas. For each word group, generate 4 ideas that are inspired by that word group. The inspiration can be direct or entirely abstract. Try to avoid duplicate ideas in the doument.

                Example business ideas:
                - Some kind of app that helps people find the best deals on flights
                - A website that tracks analitics on link clicks
                - A software that helps people manage their time better
                - A minimalist app that helps people track their habits


                Groups:

                1. ${randomGroup()}
                2. ${randomGroup()}
                3. ${randomGroup()}
                4. ${randomGroup()}
                5. ${randomGroup()}
                6. ${randomGroup()}
                7. ${randomGroup()}
                8. ${randomGroup()}
            `,
            format: {
                topLevelIdeas: [
                    {
                        groupId: 1,
                        group: 'the group of words assigned to this group',
                        vibes: 'what do you think of when you think of this group?',
                        ideas: [
                            'Idea 1',
                            'Idea 2',
                            'Idea 3',
                            'Idea 4',
                        ]
                    },
                    {
                        groupId: 2,
                        '...' : '...'
                    },
                    '...'
                ]
            }
        })

        await h.ask({
            prompt: `
                Now that you have generated some ideas, we will be trying to refine the above ideas above into good ideas. We want to select only one idea from each group that we think is the best. Be critical. Be harsh. Take a stand. The goal is to weed out the bad ideas and find the good ones.

                1. What problem does this idea solve?
                2. Can this problem be solved in some way through a weekend of coding? What is this MVP solution?
                3. How do i get my first sale? Do i need an "in" with a certain group of people? Do i need to be a part of a certain community?
                4. Is this problem already been solved by a simple or existing solution?
                5. Consider this idea, is it good? Give me 2 sentences on why you think this idea is good or bad.

                When considering the idea, think about the following
                - Is this idea unique? Is it different from what is already out there? What value would a user have using us over them?
                - Is this idea useful? Is the target audience big enough and do they actually need this? Do they actually exist?
                - Is this idea feasible? Can this be built and launched quickly and cheaply by a software developer on a weekend or is there custom hardware, supply chains, or connections needed?
                    THIS IS VERY KEY. EXAMPLE: IF I NEED TO GO GET A CONTRACT WITH A CARPENTER SUPPLY COMPANY TO MAKE THIS WORK, IT IS NOT A GOOD IDEA
                - Is this idea profitable? Can this be monetized in some way? Is there a clear path to revenue within one week?

                6. Rate this, 1-10, on how good of an idea you think it is. (10 is a amazing idea). Return only a number and nothing else.
            `,
            format: {
                ideasExplores: [
                    {
                        idea: 'G1-Idea 1',
                        summary: 'one sentence summary of the idea',
                        problemSolved: '...',
                        weekendCoding: '...',
                        firstSale: '...',
                        existingSolution: '...',
                        consideration: '...',
                        rated: 5,
                    },
                    {
                        idea: 'G2-Idea 2',
                        summary: 'one sentence summary of the idea',
                        problemSolved: '...',
                        weekendCoding: '...',
                        firstSale: '...',
                        existingSolution: '...',
                        consideration: '...',
                        rated: 5,
                    },
                    {
                        idea: 'G3-Idea 1',
                        summary: 'one sentence summary of the idea',
                        problemSolved: '...',
                        weekendCoding: '...',
                        firstSale: '...',
                        existingSolution: '...',
                        consideration: '...',
                        rated: 5,
                    },
                    '. . . all ideas abovce'
                ]
            }
        })
    }

    render (state: any) {

        const ideasByRating = state.ideasExplores.sort((a: any, b: any) => b.rated - a.rated)

        const renderIdea = (idea:any) => `

            ## ${idea.summary} (Rating: ${idea.rated})

            ${idea.consideration}

            - Problem Solved: ${idea.problemSolved}
            - Weekend Coding: ${idea.weekendCoding}
            - First Sale: ${idea.firstSale}
            - Existing Solution: ${idea.existingSolution}

        `.replaceAll('            ', '')

        return [
            '# Generated Idea',
            ...ideasByRating.map(renderIdea)
        ].join('\n\n')

    }

}
