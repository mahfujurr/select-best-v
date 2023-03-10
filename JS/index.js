// player-1

document.getElementById('messi-btn').addEventListener('click', function(){

    // validation check start
    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }
    // validation check end
    
    // clicked button enable and disable codes start

    const messiString = getInnerTextOnly('messi-field');

    const messiBtnDiv = document.getElementById('messi-btn-div');
    messiBtnDiv.innerHTML = '<button id="messi-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = messiString;
    olId.appendChild(li1);
    document.getElementById('messi-btn').disabled = 'true';

    // clicked button enable and disable codes end

    // player expenses

    document.getElementById('calculate-btn').addEventListener('click', function(){
        
        const perPlayerValue = getValueFromInputField('per-player-field');

        const selectedPlayerExpenses = perPlayerValue * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })
})

// player-2

document.getElementById('neymar-btn').addEventListener('click', function(){

    // validation check start

    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }
    // validation check end
    
    // clicked button enable and disable codes start
    const neymarString = getInnerTextOnly('neymar-field');

    const neymarBtnDiv = document.getElementById('neymar-btn-div');
    neymarBtnDiv.innerHTML = '<button id="neymar-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = neymarString;
    olId.appendChild(li1);
    document.getElementById('neymar-btn').disabled = 'true';

    // clicked button enable and disable codes end

    // player expenses

    document.getElementById('calculate-btn').addEventListener('click', function(){
        
        const perPlayerValue = getValueFromInputField('per-player-field');

        const selectedPlayerExpenses = perPlayerValue * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })
})

// player-3

document.getElementById('kylian-btn').addEventListener('click', function(){

    // validation check start

    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }
    // validation check end
    
    // clicked button enable and disable codes start
    const kylianString = getInnerTextOnly('kylian-field');

    const kylianBtnDiv = document.getElementById('kylian-btn-div');
    kylianBtnDiv.innerHTML = '<button id="kylian-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = kylianString;
    olId.appendChild(li1);
    document.getElementById('kylian-btn').disabled = 'true';

    // clicked button enable and disable codes end

    // player expenses

    document.getElementById('calculate-btn').addEventListener('click', function(){
        
        const perPlayerValue = getValueFromInputField('per-player-field');

        const selectedPlayerExpenses = perPlayerValue * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })  
})

// player-4

document.getElementById('vitor-btn').addEventListener('click', function(){

    // validation check start

    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }
    // validation check end
    
    // clicked button enable and disable codes start
    const vitorString = getInnerTextOnly('vitor-field');

    const vitorBtnDiv = document.getElementById('vitor-btn-div');
    vitorBtnDiv.innerHTML = '<button id="vitor-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = vitorString;
    olId.appendChild(li1);
    document.getElementById('vitor-btn').disabled = 'true';

    // clicked button enable and disable codes end

    // player expenses

    document.getElementById('calculate-btn').addEventListener('click', function(){
        
        const perPlayerValue = getValueFromInputField('per-player-field');

        const selectedPlayerExpenses = perPlayerValue * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    }) 
})

// player-5

document.getElementById('ramos-btn').addEventListener('click', function(){

    // validation check start

    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }
    // validation check end
    
    // clicked button enable and disable codes start
    const ramosString = getInnerTextOnly('ramos-field');

    const ramosBtnDiv = document.getElementById('ramos-btn-div');
    ramosBtnDiv.innerHTML = '<button id="ramos-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = ramosString;
    olId.appendChild(li1);
    document.getElementById('ramos-btn').disabled = 'true';

    // clicked button enable and disable codes end

    // player expenses

    document.getElementById('calculate-btn').addEventListener('click', function(){
        
        const perPlayerValue = getValueFromInputField('per-player-field');

        const selectedPlayerExpenses = perPlayerValue * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    })
})

// player-6

document.getElementById('renato-btn').addEventListener('click', function(){

    // validation check start
    
    const nodeList = document.getElementById('ol-field');
        let number = nodeList.childNodes ;
        if ((number.length ) >= 5){
            alert("Can't select more than 5 player");
            return;
        }
    // validation check end
    
    // clicked button enable and disable codes start
    const renatoString = getInnerTextOnly('renato-field');

    const renatoBtnDiv = document.getElementById('renato-btn-div');
    renatoBtnDiv.innerHTML = '<button id="renato-btn" class="rounded-lg bg-slate-300	 my-3 py-1 font-bold w-4/5 ">SELECT</button>'

    const olId = document.getElementById('ol-field');
    const li1 = document.createElement('li');
    li1.innerText = renatoString;
    olId.appendChild(li1);
    document.getElementById('renato-btn').disabled = 'true';

    // clicked button enable and disable codes end

    // player expenses

    document.getElementById('calculate-btn').addEventListener('click', function(){
        
        const perPlayerValue = getValueFromInputField('per-player-field');

        const selectedPlayerExpenses = perPlayerValue * parseFloat(number.length) ;

        const expensesId = document.getElementById('player-expenses-field');
        expensesId.innerText = selectedPlayerExpenses;
    }) 
})

