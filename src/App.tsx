import { WorkflowDisplayed } from "pages/workflow"
import { useState } from "react"
import { knownWorkflows } from "workflows"

export function App () {

    const [page, setPage] = useState<string | null>(null)

    return <>
        <div
            className="w-full h-8 bg-indigo-600 text-white flex gap-5 px-5 py-1"
        >
            <a 
                onClick={() => setPage('generateIdea')}
                className="px-2 rounded text-white hover:bg-indigo-300">Generate Idea</a>
            <a  
                onClick={() => setPage('refineIdea')}
                className="px-2 rounded text-white hover:bg-indigo-300">Refine Idea</a>
        </div>

        <WorkflowDisplayed workflow={knownWorkflows[page || 'generateIdea']} />
    </>
}