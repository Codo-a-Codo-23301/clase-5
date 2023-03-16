
class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        const myInputHTML = myApp.innerHTML + "<input type="+ this.type + ">";

        myApp.innerHTML = myInputHTML;
       
    }   
}


let arrayOfInputs = ["text" , "checkbox" , "text", "text", "color", "date","text"  ];

function RenderInput(type){
    let myInput = new Input("app", type );
    myInput.render();
}


let arrayInputTexts= arrayOfInputs.filter(e=>e==="text")

//arrayOfInputs.forEach(e=>RenderInput(e))

arrayInputTexts.forEach(e=>RenderInput(e))