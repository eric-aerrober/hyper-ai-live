import { WorkflowDisplayed } from "pages/workflow"
import { knownWorkflows } from "workflows"

export function App () {

    const page = window.location.pathname.split('/').pop()

    return <>
        <div
            className="w-full h-8 bg-indigo-600 text-white flex gap-5 px-5 py-1"
        >
            <a href="/generateIdea" className="px-2 rounded text-white hover:bg-indigo-300">Generate Idea</a>
            <a href="/refineIdea" className="px-2 rounded text-white hover:bg-indigo-300">Refine Idea</a>
        </div>

        <WorkflowDisplayed workflow={knownWorkflows[page || 'generateIdea']} />
    </>
}