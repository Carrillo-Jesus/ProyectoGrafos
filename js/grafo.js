var nodes = new vis.DataSet([
  { id: 1, label: " Q0 ", borderWidth: 4,fixed:{x:true,y:true}},
  { id: 2, label: " Q1 ", borderWidth: 4,fixed:{x:true,y:true} },
  { id: 3, label: " Q2 ", borderWidth: 4,fixed:{x:true,y:true} },
  { id: 4, label: " Q3 ", borderWidth: 4,fixed:{x:true,y:true} },
  { id: 5, label: " Q4 ", borderWidth: 4,fixed:{x:true,y:true} },

  { id: 6, label: "Q5",fixed:{x:true,y:true}},
  { id: 7, label: "Q6",fixed:{x:true,y:true}},
]);

var edges = new vis.DataSet([
  { id: 0, from: 1, to: 1, arrows: "to",color:'black',selfReferenceSize:1,arrows:{to:{enabled:true,scaleFactor: 3}}}, // if(nodes.get(edges.get(aristas[i-1]).to).label=="Q5 
  { id: 1, from: 1, to: 4, label: "c", arrows: "to" },
  { id: 2, from: 1, to: 3, label: "d", arrows: "to" },
  { id: 3, from: 1, to: 2, label: "a", arrows: "to" },
  { id: 4, from: 1, to: 6, label: "b", arrows: "to" },

  { id: 5, from: 6, to: 6, label: "a", arrows: "to", arrows:{to:{enabled:true}},selfReferenceSize:10 },
  { id: 6, from: 6, to: 6, label: "b", arrows: "to",arrows:{to:{enabled:true}},selfReferenceSize:25 },
  { id: 7, from: 6, to: 6, label: "c", arrows: "to",arrows:{to:{enabled:true}},selfReferenceSize:40 }, 
  { id: 8, from: 6, to: 6, label: "d", arrows: "to",arrows:{to:{enabled:true}},selfReferenceSize:55 },
 

  
  { id: 9, from: 2, to: 2, label: "a", arrows: "to" },
  { id: 10, from: 2, to: 3, label: "d", arrows: "to" },
  { id: 11, from: 2, to: 4, label: "c", arrows: "to" },
  { id: 12, from: 2, to: 5, label: "b", arrows: "to" },

  { id: 13, from: 3, to: 3, label: "d", arrows: "to" },
  { id: 14, from: 3, to: 4, label: "c", arrows: "to" },

  { id: 15, from: 3, to: 6, label: "a", arrows: "to" },
  { id: 16, from: 3, to: 6, label: "b", arrows: "to" },

  { id: 17, from: 4, to: 4, label: "c", arrows: "to" },
  { id: 18, from: 4, to: 7, label: "a", arrows: "to" },
  { id: 19, from: 4, to: 7, label: "b", arrows: "to" },
  { id: 20, from: 4, to: 7, label: "d", arrows: "to" },

  { id: 21, from: 7, to: 7, label: "a", arrows: "to", arrows:{to:{enabled:true}},selfReferenceSize:10 },
  { id: 22, from: 7, to: 7, label: "b", arrows: "to",  arrows:{to:{enabled:true}},selfReferenceSize:25  },
  { id: 23, from: 7, to: 7, label: "c", arrows: "to",  arrows:{to:{enabled:true}},selfReferenceSize:40  },
  { id: 24, from: 7, to: 7, label: "d", arrows: "to", arrows:{to:{enabled:true}},selfReferenceSize:55 },

  { id: 25, from: 5, to: 5, label: "b", arrows: "to" },
  { id: 26, from: 5, to: 4, label: "c", arrows: "to" },
  { id: 27, from: 5, to: 3, label: "d", arrows: "to" },
  { id: 28, from: 5, to: 2, label: "a", arrows: "to" },

]);

var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};

var options = {
  nodes: {
    shape: 'circle',
    color: {
      border: "#000",
      background: "lightblue",
    },
    font: {
      color: "#000000",
      size: 35
    },
    mass: 1.5,
  },

  edges: {
    color: "lightgrey",
    length: 200,
    width: 2,
    smooth: {
        forceDirection: 'vertical',
        roundness: 0.9,
        enabled: true
},
   font:{
     size: 20,
    
   }
  },
  physics:{
    enabled: true,
        barnesHut: {
            centralGravity: 0.0,
            springLength: 0,
            springConstant: 0.04,
            damping: 1
        },
            solver: 'barnesHut'
           
  },
  
};
var network = new vis.Network(container, data, options); // INICIALIZANDO GRAFO
network.moveTo({
  position: {x:0,y:0},
  scale: 1.0,
  offset: {x:0,y:0}
})
  var dataN = [
    {id: 1, x: 0, y:-500},
    {id: 2, x: 200, y:-400},
    {id: 3, x: -100, y:-300},
    {id: 4, x: -50, y:-150},
    {id: 5, x: 200, y:-250},
    {id: 6, x: 200, y:-500},
    {id: 7, x: -300, y:-150},
    ];
 nodes.update(dataN);

  
//=============================Recorriendo grafo=========================================================
let aristas = [];
let nodos =[];

function RecorriendoGrafo(palabra){

  if(aristas.length!=0 || nodos.length!=0){
    despintandoGrafo();
    nodos.splice(0, nodos.length);
    aristas.splice(0,aristas.length)
  }

  nodos.push(1);

    for(let i=0;i<palabra.length;i++){

            for(let h=1;h<29;h++){

                if(palabra.charAt(i)==edges.get(h).label && i==0){ // guardando la primera arista 
                  aristas.push(h)
                  nodos.push(edges.get(h).to);
                  h=29;

                }

                  else if(palabra.charAt(i)==edges.get(h).label && edges.get(aristas[i-1]).to==edges.get(h).from){
                  aristas.push(h);
                  nodos.push(edges.get(h).to);
              
                  h=29;
                }
              


            }

    }         

}

//===============================Capturando boton confirmar-funcionprincipal==================
 const expresion = /[a-d]/
  let confirmar = document.querySelector(".btn_clic");

      confirmar.addEventListener("click", function () {
        let palabra = document.querySelector(".form-control").value;
        palabra=palabra.replace(/\s+/,"A");
        if(palabra.length==1&&palabra.charAt(0)=='#'){
          PintarNodos(1,"#ff383f");
          nodos.push(1);
          Mensaje();
        }
       
        else if(Mayusculas(palabra)==='0'){

          console.log("ficha ",palabra)

            RecorriendoGrafo(palabra)
            BorrarRepetidos();
            PintarContiempo();
        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error revise',
            Text:'La palabra no es aceptada por el automata',
            showConfirmButton: false,
            timer: 1500
          })
        }
      
      });

      function Mayusculas(words) {

        words = String(words).trim();
      
        const regxs = {
      
          "lower": /^[a-d]+$/,
      
          "upper": /^[A-Z0-9 ]+$/,
      
          "upperLower": /^[A-Za-z0-9 ]+$/
      
        }
      
       
      
        if (regxs.lower.test(words)) return '0';
      
        if (regxs.upper.test(words)) return '1';
      
        if (regxs.upperLower.test(words)) return '2';
      
        return -1;
      
      }
    

//=======================Validando tiempo de pintado===============================

function PintarContiempo(){

  let velocidad=2100-document.querySelector('.form-range').value;
 
      let k=0;
      var inte = setInterval(() => {

        if(k==0){
          PintarNodos(nodos[k],"#ff383f");
      }
   
          PintarRecorrido(aristas[k],"#ff383f");
          PintarNodos(edges.get(aristas[k]).to,"#ff383f");

          if (k == aristas.length-1){ 
            Mensaje();      
            clearInterval(inte);
        }

        k++;
    

      },velocidad)
}
//========================================Mensaje============================
function Mensaje(){
  
  if(nodes.get(nodos[nodos.length-1]).label=="Q5"||nodes.get(nodos[nodos.length-1]).label=="Q6"){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'No aceptada',
      Text:'La palabra no es aceptada por el automata',
      showConfirmButton: false,
      timer: 1500
    })
   
  }else{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Aceptada',
      Text:'La palabra es aceptada por el automata',
      showConfirmButton: false,
      timer: 1500
    })
  }

}

//======================pintando el recorrido============================
      function PintarRecorrido(i,color) {
        
          edges.update({ id: i, color: { color: color } });

      }
      function PintarNodos(i,color) {
        
        nodes.update({ id: i, color:{ border: "#000", background: color }} );

    }


//============================BorrarRepetidos========================
function BorrarRepetidos(){

    console.log(nodos)

    nodos = nodos.filter((item,index)=>{

        return nodos.indexOf(item) === index;

    });

    aristas = aristas.filter((item,index)=>{

        return aristas.indexOf(item) === index;

    });

    console.log(nodos)

}

//==========================Capturando bton borrar======================

  let despintar = document.querySelector(".btn_clic2");

  despintar.addEventListener("click", function () {
      var i = 0;

      var inte = setInterval(() => {

      PintarRecorrido(aristas[i],"lightgrey");

          if (i == aristas.length) clearInterval(inte);

          i++;
         
      }, 1);

      despintandoNodos()
     
});

//=========================Despintando=================================

 function despintandoGrafo(){

    for(let h=1; h<29;h++){

           edges.update({ id: h, color: { color: "lightgrey"} });

    }

    despintandoNodos();

 }


  function despintandoNodos(){

      for(let h=1; h<8;h++){

           nodes.update({ id: h, color:{ border: "#000", background: "lightblue" }} );

      }

  }


//=========================Probar=================================
  function cambiar(id) {
    console.log(document.getElementById(id).id);
    var palabra = document.getElementById(id);
    var contenido = palabra.innerHTML;
    document.querySelector(".form-control").value = contenido
  }