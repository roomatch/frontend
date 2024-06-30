import React from 'react'

import Text from '@uiComponents/text/Text'

export default function Card(props:any) {
  return (
    <div key={props.reason.title} className='why__reason'  id={'why__reason-' + (props + 1)}>
    <div id={'why__reason-' + (props.index + 1) + '__degrade'} />
    <div className='why__reason__text'>
      <Text className='why__reason-title' isSubtitle={true} textColor="white" highlighted={false} align='left' text={props.index + 1 + '. ' + props.reason.title}></Text>
      <Text className='why__reason-paragraph' isParagraph={true} textColor="white" highlighted={false} align='left' text={props.reason.description}></Text>
    </div>
    <div className='why__reason__icon'>{React.createElement(props.reason.icon, { className: 'why__reason__icon' })}</div>
  </div>
  )
}
