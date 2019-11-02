import { messages } from 'cucumber-messages'
import React from 'react'
import Feature from './Feature'

interface IProps {
  gherkinDocument: messages.IGherkinDocument
}

const GherkinDocument: React.FunctionComponent<IProps> = ({
                                                            gherkinDocument,
                                                          }) => {
  return (
    gherkinDocument.feature ? <Feature feature={gherkinDocument.feature}/> : <div>Empty or malformed Gherkin in {gherkinDocument.uri}</div>
  )
}

export default GherkinDocument
