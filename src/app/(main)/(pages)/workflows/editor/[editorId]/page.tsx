import { ConnectionsProvider } from '@/providers/ConnectionProvider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'
import EditorCanvas from './_components/EditorCanvas'



const page = () => {
  return (
    <div className='h-full'>
	<EditorProvider>
		<ConnectionsProvider>
      <EditorCanvas/>
    </ConnectionsProvider>
	</EditorProvider>
    </div>
  )
}

export default page