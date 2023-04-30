import React, { useRef } from 'react'

const CodeEditor = () => {
    const htmlCode = useRef(null)
    const cssCode = useRef(null)
    const jsCode = useRef(null)
    const output = useRef(null)

    function run() {

        htmlCode.current.focus();

        output.current();

        // let htmlCode = use(".editor #html-code").value;

        // let cssCode = "<style>" + document.useR(".editor #css-code").value + "</style>";
        // let jsCode = document.useR(".editor #js-code").value;
        // let output = document.useR(".editor #output");

        // console.log(htmlCode,cssCode,jsCode,output); 

        // working in the output section
        // output.contentDocument.body.innerHTML = htmlCode + cssCode;
        // output.contentWindow.eval(jsCode);

        
    }

    // document.querySelector(".editor #html-code").addEventListener("keyup", run);
    // document.querySelector(".editor #css-code").addEventListener("keyup", run);
    // document.querySelector(".editor #js-code").addEventListener("keyup", run);


    useRef(".editor htmlCode").addEventListener("keyup", run);
    useRef(".editor cssCode").addEventListener("keyup", run);
    useRef(".editor jsCode").addEventListener("keyup", run);


    return (
        <div className="editor">
            <textarea ref={htmlCode}></textarea>
            <textarea ref={cssCode}></textarea>
            <textarea ref={jsCode}></textarea>
            {/* <iframe ref={output}></iframe> */}
            <textarea ref={output}></textarea>

        </div>

    )
}

export default CodeEditor
