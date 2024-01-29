import React from 'react'
import DOMPurify from 'dompurify'

export interface WysiwygProps { content: string }

const RenderWysiwyg: React.FC<WysiwygProps> = ({ content }) => {
    const sanitizedData = (content: string) => ({
        __html: DOMPurify.sanitize(content)
    })
    return (
        <div dangerouslySetInnerHTML={sanitizedData(content)}></div>
    )
}

export default RenderWysiwyg