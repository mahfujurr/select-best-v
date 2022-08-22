document.getElementById('messi-btn').addEventListener('click', function(){
    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        // console.log(number);
       
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }

    const messiId = document.getElementById('messi-field');
    const messiString = messiId.innerText;
    const messiBtnDiv = document.getElementById('messi-btn-div');
    messiBtnDiv.innerHTML = '<button id="messi-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = messiString;
    olId.appendChild(li1);
    document.getElementById('messi-btn').disabled = 'true';

    //console.log(messiString);

    // Calculation starts
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const perPlayerId = document.getElementById('per-player-field');
        const perPlayerString = perPlayerId.value ;
        const selectedPlayerExpenses = parseFloat(perPlayerString) * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })
    // Calculation ends
    
})
document.getElementById('neymar-btn').addEventListener('click', function(){
    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        // console.log(number);
        //const perPlayerId = document.getElementById('per-player-field');
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }

    const neymarId = document.getElementById('neymar-field');
    const neymarString = neymarId.innerText;
    const neymarBtnDiv = document.getElementById('neymar-btn-div');
    neymarBtnDiv.innerHTML = '<button id="neymar-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = neymarString;
    olId.appendChild(li1);
    document.getElementById('neymar-btn').disabled = 'true';

    //console.log(messiString);

    // Calculation starts
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const perPlayerId = document.getElementById('per-player-field');
        const perPlayerString = perPlayerId.value ;
        const selectedPlayerExpenses = parseFloat(perPlayerString) * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })
    // Calculation ends
    
})
document.getElementById('kylian-btn').addEventListener('click', function(){
    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        // console.log(number);
        //const perPlayerId = document.getElementById('per-player-field');
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }

    const kylianId = document.getElementById('kylian-field');
    const kylianString = kylianId.innerText;
    const kylianBtnDiv = document.getElementById('kylian-btn-div');
    kylianBtnDiv.innerHTML = '<button id="kylian-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = kylianString;
    olId.appendChild(li1);
    document.getElementById('kylian-btn').disabled = 'true';

    //console.log(messiString);

    // Calculation starts
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const perPlayerId = document.getElementById('per-player-field');
        const perPlayerString = perPlayerId.value ;
        const selectedPlayerExpenses = parseFloat(perPlayerString) * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })
    // Calculation ends
    
})
document.getElementById('vitor-btn').addEventListener('click', function(){
    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        // console.log(number);
        //const perPlayerId = document.getElementById('per-player-field');
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }

    const vitorId = document.getElementById('vitor-field');
    const vitorString = vitorId.innerText;
    const vitorBtnDiv = document.getElementById('vitor-btn-div');
    vitorBtnDiv.innerHTML = '<button id="vitor-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = vitorString;
    olId.appendChild(li1);
    document.getElementById('vitor-btn').disabled = 'true';

    //console.log(messiString);

    // Calculation starts
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const perPlayerId = document.getElementById('per-player-field');
        const perPlayerString = perPlayerId.value ;
        const selectedPlayerExpenses = parseFloat(perPlayerString) * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })
    // Calculation endss
    
})
document.getElementById('ramos-btn').addEventListener('click', function(){
    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        // console.log(number);
        //const perPlayerId = document.getElementById('per-player-field');
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }

    const ramosId = document.getElementById('ramos-field');
    const ramosString = ramosId.innerText;
    const ramosBtnDiv = document.getElementById('ramos-btn-div');
    ramosBtnDiv.innerHTML = '<button id="ramos-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = ramosString;
    olId.appendChild(li1);
    document.getElementById('ramos-btn').disabled = 'true';

    //console.log(messiString);

    // Calculation starts
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const perPlayerId = document.getElementById('per-player-field');
        const perPlayerString = perPlayerId.value ;
        const selectedPlayerExpenses = parseFloat(perPlayerString) * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })
    // Calculation ends
    
})
document.getElementById('renato-btn').addEventListener('click', function(){
    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        // console.log(number);
        //const perPlayerId = document.getElementById('per-player-field');
        if ((number.length) >= 5){
            alert("Can't select more than 5 player");
            return;
        }

    const renatoId = document.getElementById('renato-field');
    const renatoString = renatoId.innerText;
    const renatoBtnDiv = document.getElementById('renato-btn-div');
    renatoBtnDiv.innerHTML = '<button id="renato-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = renatoString;
    olId.appendChild(li1);
    document.getElementById('renato-btn').disabled = 'true';

    //console.log(messiString);

    // Calculation starts
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const perPlayerId = document.getElementById('per-player-field');
        const perPlayerString = perPlayerId.value ;
        const selectedPlayerExpenses = parseFloat(perPlayerString) * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })
    // Calculation ends
    
})