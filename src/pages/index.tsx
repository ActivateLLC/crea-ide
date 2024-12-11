import { useCallback, useState } from 'react'
import Editor from '@monaco-editor/react'

export default function IDE() {
  const [code, setCode] = useState('// Start coding here')

  const handleEditorChange = useCallback((value: string | undefined) => {
    setCode(value || '')
  }, [])

  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Crea.Dev IDE</h1>
      </nav>
      
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  )
}