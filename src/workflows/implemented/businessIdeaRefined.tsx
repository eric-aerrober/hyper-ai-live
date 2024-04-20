import { HyperExecution } from "hyper-ai";
import { WorkflowSaved } from "../workflow";


interface AnswerQuestionInput {
    question: string
}

export class RefineBusinessIdeaWorkflow extends WorkflowSaved<AnswerQuestionInput> {

    constructor() {
        super({
            name: 'Weekend Business Idea Evaluation',
            fields: ['businessIdea'],
            requires_llm: true
        });
    }

    protected async internalInvoke(h: HyperExecution): Promise<void> {
        h.tell(`
            We will be evaluating the following business idea that will be tackled in a weekend by two highly competent software developers:

            ${h.state.businessIdea}

            To do this, we will be asking questions and using the answers to determine the viability of the idea across different dimensions.
        `);

        await h.consider( `
            First, we should determine some general information about the business idea and what it aims to do.

            Questions: 

            1. In your own words, what value is the business idea providing? Be specific about the value it is providing. What can you do with this idea? What problem does it solve? What is the benefit of using it? 

            2. To whom is the business idea providing value, be specific. Is it a specific group of people, a specific industry, a specific region? Lets choose 3 different target audiences. Give a detailed description of each and why they would find value in the business idea.

            3. If the business idea is successful, what would be the primary way in which it makes money? Subscription, one-time purchase, advertising, pay-per-use, etc. Give 3 different revenue models here.
        `)

        await h.ask({
            prompt: `
                Lets double-click on the value provided by the business idea. Lets be very specific about the value it is providing and how we can get adoption through that.

                Questions:
                1. What are a set of features you can imagine this business idea having? Go into detail about each feature. List 10 features.

                2. What is the most important launch features for an MVP of this business idea? We are not looking to launch a polished product with many or all of the features asked for. The montra here is "launch early, launch often". Since the goal is 1 weekend, we need to be very specific about what features are needed to launch. 

                We are going to break down the MVP features into 3 seperate scopes. For each scope, determine exactly one use case which there might be some interest for, and then for that use case, what is the minimum feature set needed to make that use case work. We can expand to other use cases later. Dont worry about the 'detailedFeatures' you wrote above, some of them may be included in the MVP, some may not. Some new features may be included in the MVP that were not in the 'detailedFeatures' list. For each MVP scope, make sure the features listed there are the minimum needed to make that specifc use case work. We will likely have the same feature listed in multiple MVP scopes.
                                
                3. For each use case, how long do you think it would take to build this MVP feature set? Again, we have 1 weekend to build this. Be specific about the time it would take to build each feature and the total time it would take to build the MVP. Assume we have 2 developers working on this full-time for 2 days.

                For time estimantes, dont use exact hours or anything like that, simply rank each feature on a compexity score of "easy", "medium", "hard" and give a sentence for each on why you think it is easy, medium or hard.

            `,
            format: {
                features: {
                    detailedFeatures: {
                        featureShortName1: ". . .",
                        featureShortName2: ". . .",
                        featureShortNameN: ". . ."
                    },
                    mvpFeatures: {
                        useCaseShortName1: {
                            quickSummary: "answers what the use case is",
                            features: {
                                featureShortName1: {
                                    description: ". . .",
                                    complexityAssessment: 'what do we have to do for this from a technical perspective',
                                    complexity: 'easy | medium | hard'
                                },
                                featureShortName2: ". . .",
                                featureShortNameN: ". . ."
                            }
                        },
                        useCaseShortNameN: '. . .'
                    },
                }
            }
        })

        await h.ask({

            prompt: `
                
                The ultimant goal here is to go from nothing to getting some ammount of tracktion in one weekend. To do this, we will need a few high-level things to do.

                1. We will need to have a very specific solution to a very specific problem that a very specific group of people have. We can expand over time, but for launch, target exectly one group of people with exactly one problem.

                2. We will need to have a way to deliver that solution in one weekend with a doable list of features.
                
                3. We will have to have a launch plan that will get us some users in one weekend. This will almost always be through social media or through paid advertising. There may be other options though. For this, we also want to nail down specifics, if we want to tweet about it, who do we tweet at and how. if its reddit, what communities, what do we say, how do we frame it. If its paid ads, where do we buy them, how much do we spend, what do we say? Maybe its directly asking people to use it, how do we do that? Provide 7 attributes here as specifics key-value pairs to answer following questions that are relevant to the launch plan.

                4. We will need to have a line in the sand that says "if we dont have X of some metric by some time Y, we will pivot to something else". This could be "if we dont have 10 unique signups to our webapp by the end of sunday evning, we will pivot to something else".

                Consider the above, and we are going to go through the MVP scopes you built above and answer the questions for them. Then we will choose the scope we like the most.

            `,
            format: {
                scopes: {
                    scopeShortName1: {
                        who: "who is the target audience",
                        problem: "what is the problem they have",
                        solution: "what is the solution to the problem that we will provide in the MVP",
                        why: "why do we think this we can do this in one weekend",
                        summary: "high level summary of the scope in less than 2 sentences to describe what we are doing",
                        features: {
                            featureShortName1: "simple description of the feature with 1 sentence about what it does",
                            featureShortName2: ". . .",
                            featureShortNameN: ". . ."
                        },
                        launch: {
                            plan: "high level summary of how we will launch the project assuming we meet all the features 10 words or less",
                            specifics: {
                                'attributeOfLaunch': 'answer to the question about the attribute of the launch plan',
                            },
                            summary: "high level summary of the launch plan, using the specifics above to fill in the blanks, 20 words or less.",
                            pivot: "if the launch plan fails, what is our high level summary of what we can do the same day as an alternative plan to get traction a different way"
                        },
                        metrics: {
                            keyRespondingMetric: "what is the metric we are looking for to gague success",
                            target: "IE: what is the target value of this metric we are looking for by the end of the first day? Week? This should be VERY conservative. 5 Signups is good. 1 sale is great. 1000 views is good.",
                            summary: "high level summary of the metrics, 10 words or less. We want X of Y by Z time."
                        },
                        futureGrowth: "what are some ideas for future features and where we can take this project if it works",
                        thoughts: "your general thoughts on this project and if it could work, be critical, what will go wrong, what will go right, etc."
                    },
                    scopeShortName2: '. . .',
                    scopeShortName3: '. . .'
                },
                decision: {
                    thoughts: "which scope do you think is the best and why?",
                    scope: "which scope are we going to go with and why?",
                    scopeShortName: "the scopeShortName of the scope we are going with"
                }
            }
        })

    }

    render (state: any) {

        const topChoice = state.scopes[state.decision.scopeShortName]
        const otherChoices = Object.keys(state.scopes).filter((scope) => scope !== state.decision.scopeShortName).map((scope) => state.scopes[scope])

        const renderChoice = (choice:any) => `
            ## ${choice.summary}

            ${choice.thoughts}

            - Who: ${choice.who}
            - Problem: ${choice.problem}
            - Solution: ${choice.solution}
            - Why: ${choice.why}

            ### MVP Launch Features

            ${
                Object
                    .keys(choice.features)
                    .map((feature, i) => choice.features[feature])
                    .map((feature, i) => `- ${feature}`)
                    .join('\n')
            }

            ### Launch Plan

            - ${choice.launch.plan}

            - Alternative Plan: ${choice.launch.pivot}

            ### Metrics

            - ${choice.metrics.summary}
        `.replaceAll('            ', '')

        return [
            '# Top Business Idea',
            renderChoice(topChoice),
            '-------------------',
            '# Other Business Ideas',
            ...otherChoices.map(renderChoice)
        ].join('\n\n')
    }

}
