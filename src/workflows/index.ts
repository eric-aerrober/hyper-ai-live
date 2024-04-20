import { RefineBusinessIdeaWorkflow } from "./implemented/businessIdeaRefined";
import { GenerateIdeasWorkflow } from "./implemented/generateIdeas";
import { WorkflowSaved } from "./workflow";


export const knownWorkflows: Record<string, WorkflowSaved<any>> = {
    refineIdea: new RefineBusinessIdeaWorkflow(),
    generateIdea: new GenerateIdeasWorkflow()
}