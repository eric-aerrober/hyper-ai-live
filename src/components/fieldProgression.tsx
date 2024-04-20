export interface FieldProgressionsRenderedProps {
    fieldProgressions: any[]
}

interface FieldEvent {
    id: string
    name: string
    type: string
    messages: string[]
}

export function FieldProgressionsRendered ({fieldProgressions}: FieldProgressionsRenderedProps) {

    const byId: Record<string, FieldEvent> = {}

    for (const fieldProgression of fieldProgressions) {

        const id = fieldProgression.id
        const type = fieldProgression.type
        const message = fieldProgression.message

        if (!byId[id]) {
            byId[id] = { id, type, name: message, messages: [] }
        } else {
            if (type === "end") {
                byId[id].type = "end"
            }
            if (type === "log") {
                byId[id].messages.push(message)
            }
        }
    }

    return <div className="font-mono text-sm text-gray-500">
        {
            Object.keys(byId).map((id, i) => {

                const statusIcon = byId[id].type === "end" ? "✔" : "•"
                const statusColor = byId[id].type === "end" ? "text-green-500" : "text-indigo-500"

                return <div key={i} className="my-4">
                    <div className={`font-bold ${statusColor}`}>{statusIcon} {byId[id].name}</div>
                    <ul>
                        {
                            byId[id].messages.map((message, j) => (
                                <li key={j}>{message}</li>
                            ))
                        }
                    </ul>
                </div>
            })
        }
    </div>

}