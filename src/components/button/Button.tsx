import './Button.css';

export default function Button(props: { text: string}) {
  return (
    <a href="#" className='button'>
        {props.text}
    </a>
  )
}
