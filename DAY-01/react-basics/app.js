//selection

let divEl = document.querySelector('#root');

//craeate tag
// React.createElement(tag, props, children)
//prop == attribute

let h1 = React.createElement('h1', null, 'I am learning React!');

//manupulation

let rootEl = ReactDOM.createRoot(divEl);

rootEl.render(h1);

//-------------------------------------------------------------
{/* <div>
    <div>
        <h1>

        </h1>
    </div>
</div> */}

let p1 = React.createElement('div', null, React.createElement('div', null, React.createElement('h1', {id:"sam"}, 'I am Subham!')));

// rootEl.render(p1);

//-------------------------------------------------------------

let mh1 = <div>
    <div>
        <h1>
            I am Subham! Hii
        </h1>
    </div>
</div>

rootEl.render(mh1);