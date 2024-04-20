import { FieldProgressionsRendered } from "components/fieldProgression";
import { useEffect, useState } from "react"
import { WorkflowSaved } from "workflows/workflow";
import Markdown from "react-markdown";

interface WorkflowDisplayedProps {
    workflow: WorkflowSaved<any>
}

export function WorkflowDisplayed ({workflow}: WorkflowDisplayedProps) {

    const [fields, setFields] = useState<any>(workflow.fieldsMap())
    const [running, setRunning] = useState(false)
    const [output, setOutput] = useState<any>(null)
    const [fieldProgression, setFieldProgression] = useState([] as any[])

    useEffect(() => {

        const listener = (e: KeyboardEvent) => {
            if (e.key === "Enter" && running === false) {
                onSubmit()
                e.preventDefault()
            }
        }

        document.addEventListener("keydown", listener)
        return () => {
            document.removeEventListener("keydown", listener)
        }
    });

    const setKey = () => {
        const keyData = window.prompt("Please enter your OpenAI Key")
        localStorage.setItem("openai-key", keyData!)
    }

    const onSubmit = async () => {
        setFieldProgression([])
        setFields(workflow.fieldsMap())
        setRunning(true)
        const consumeEvent = (event: any) => setFieldProgression(current => [...current, event])
        const data = await workflow.invoke(fields, consumeEvent)
        setRunning(false)
        setOutput(data)
    }

    return <>

        <div className="block mx-auto max-w-[900px] px-5 relative mb-60">

            <h1 className="text-2xl font-bold my-10 text-center">{workflow.name}</h1>
            {
                Object.keys(fields).map((field, i) => (
                    <textarea 
                        key={i}
                        placeholder={field}
                        className={`w-full my-4 p-4 border border-gray-300 rounded-md ${running ? "bg-gray-200" : ""}`}
                        rows={2}
                        value={fields[field]} 
                        onChange={e => setFields({...fields, [field]: e.target.value})}
                    />
                ))
            }

            {
                Object.keys(fields).length == 0 && <button onClick={onSubmit} className={`px-4 py-2 rounded-md border hover:border-gray-300 hover:bg-indigo-500 hover:text-white w-full `}>
                    Run Workflow
                </button>
            }

            {
                output && <>
                    
                    <div className="p-2 mt-5 text-sm text-gray-400">Analysis:</div>
                    <div className="p-2 text-sm">
                        <Markdown>{workflow.render(output)}</Markdown>
                        <div className="mb-[100px]" />
                    </div>

                </>
            }

        </div>
            
        <div className="absolute top-10 left-0 p-2">
            <button onClick={setKey} className={`px-4 py-2 rounded-md border hover:border-gray-300 hover:bg-indigo-500 hover:text-white `}>
                Set Key
            </button>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-300 overflow-y-auto h-52">
            <FieldProgressionsRendered fieldProgressions={fieldProgression} />
        </div>

    </>


}