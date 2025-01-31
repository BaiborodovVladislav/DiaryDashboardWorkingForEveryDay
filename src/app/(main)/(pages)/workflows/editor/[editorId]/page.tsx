import { ConnectionsProvider } from '@/providers/ConnectionProvider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
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