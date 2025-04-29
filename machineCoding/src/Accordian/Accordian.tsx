import { useRef } from 'react';
import './Accordian.css';
export default function Accordion() {
    const accordianRef = useRef(null);
    const handleAccordianClick = (e : React.SyntheticEvent) => {
        console.log(e.target, accordianRef.current);
        let elem = e.currentTarget.querySelector('accordion-icon')

    }

    type acc = {
        title : string;
        content : string
    };

    type accArr = acc[];

    const getAccordianElements = (accArr: accArr) => {
       return accArr.map((acc: acc) => {
            return <div>
                <div onClick={handleAccordianClick}  ref={accordianRef}>
                    <span>{acc.title}</span>
                    <span
                        aria-hidden={true}
                        className="accordion-icon"
            />
                </div>
                <div>
                    {acc.content}
                </div>
            </div>
        });
    }

    let accArray = [
        {
            title : 'HTML',
            content : 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
        },
        {
            title : 'CSS',
            content : 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
        },
        {
            title : 'JavaScript',
            content : 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
        }
        
    ]
    return (
      <div className="accordian-container">
        {getAccordianElements(accArray)}
      </div>
    );
  }
  