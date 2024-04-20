import { CacheInLocalStorage, Hyper, HyperExecution, OpenAIChatBasedLLM, SaveExecutionDataInBrowser } from "hyper-ai";
import { ReactNode } from "react";

interface WorkflowSavedProps {
    name: string;
    fields: string[];
    requires_llm: boolean;
}

export class WorkflowSaved<T> {
    
    public readonly name: string;
    public readonly fields: string[] = [];
    public readonly requires_llm: boolean = false;

    constructor(props: WorkflowSavedProps) {
        this.name = props.name;
        this.fields = props.fields;
        this.requires_llm = props.requires_llm;
    }

    public fieldsMap () {
        return this.fields.reduce((acc, field) => {
            acc[field] = ""
            return acc
        }, {} as any)
    }

    async invoke (input: T, onEvent: any) {
        const hyper = new Hyper({
            using: {
                chatBasedLLM: new OpenAIChatBasedLLM({
                    apiKey: localStorage.getItem("openai-key")!,
                    cache: new CacheInLocalStorage()
                }),
            },
            saving: {
                executionData: new SaveExecutionDataInBrowser('executions')
            },
            events: {
                onTaskEvent: onEvent
            }
        })
        const h = hyper.begin();
        h.updateState(input);
        await this.internalInvoke(h);
        await h.save();
        return h.state;
    }
    
    render (state: any) : string {
        throw new Error("Not implemented");
    }

    protected internalInvoke (context: HyperExecution) : Promise<void> {
        throw new Error("Not implemented");
    }
}