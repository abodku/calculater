const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const b0 = document.getElementById("b0");
const bEq = document.getElementById("bEq");
const bPs = document.getElementById("bPs");
const bMs = document.getElementById("bMs");
const bMp = document.getElementById("bMp");
const bDv = document.getElementById("bDv");
const inout = document.getElementById("inout");
const cb = document.getElementById("c");
const acb = document.getElementById("ac")

const vrf=(a)=>{
    if (lastEqual){
        inout.value="0";
        lastEqual=false;
    }
    (inout.value=="0") ? inout.value = a : inout.value=inout.value.concat(a);
}

const fb0 = ()=>{
    vrf(0);
}
const fb1 = ()=>{
    vrf(1);
}
const fb2 = ()=>{
    vrf(2);
}
const fb3 = ()=>{
    vrf(3);
}
const fb4 = ()=>{
    vrf(4);
}
const fb5 = ()=>{
    vrf(5);
}
const fb6 = ()=>{
    vrf(6);
}
const fb7 = ()=>{
    vrf(7);
}
const fb8 = ()=>{
    vrf(8);
}
const fb9 = ()=>{
    vrf(9);
}

const c = ()=>{
    if (inout.value.length > 1){
        inout.value=inout.value.slice(0,-1);
    }else if (inout.value.length ===1){
        inout.value="0";
    }
}

const ac = ()=>{
    fst, scnd, ans, btween = 0;
    lastEqual=false;
    inout.value="0";
}

var fst, scnd, ans, btween = 0;
var lastEqual=false;

const setFun = ()=>{
    fst=Number(inout.value);
    inout.value=0;
}

const fbPs = ()=>{
    btween="pluss";
    setFun();
}
const fbMs = ()=>{
    btween="minus";
    setFun();
}
const fbDv = ()=>{
    btween="devaid";
    setFun();
}
const fbMp= ()=>{
    btween="multiply";
    setFun();
}

const fbEq = ()=>{
    scnd=Number(inout.value);
    if (btween==="pluss"){
        ans=fst+scnd;
    }else if (btween==="minus"){
        ans=fst-scnd;
    }else if (btween==="devaid"){
        ans=fst/scnd;
    }else if (btween==="multiply"){
        ans=fst*scnd;
    }
    inout.value=ans;
    fst, scnd, ans, btween = 0;
    lastEqual=true;
}

cb.addEventListener("click", c);
acb.addEventListener("click", ac);
bPs.addEventListener("click", fbPs);
bMs.addEventListener("click", fbMs);
bDv.addEventListener("click", fbDv);
bMp.addEventListener("click", fbMp);
b1.addEventListener("click", fb1);
b2.addEventListener("click", fb2);
b3.addEventListener("click", fb3);
b4.addEventListener("click", fb4);
b5.addEventListener("click", fb5);
b6.addEventListener("click", fb6);
b7.addEventListener("click", fb7);
b8.addEventListener("click", fb8);
b9.addEventListener("click", fb9);
b0.addEventListener("click", fb0);
bEq.addEventListener("click", fbEq);