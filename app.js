
countriesArrayList=[];

function loadCountries(){
    let countriesList=document.getElementById("countriesList");
    let body="";
    fetch("/countries.json")
    .then(res=>res.json())
    .then(data=>{
        countriesArrayList=data;        
        data.forEach((element,index) => {
            body+=`
                <div class="col"  >
              <div class="card shadow-sm" >
                <img src="${element.flags.png}"
                <div class="card-body">
                  <p class="card-text">
                    ${element.name.official}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="loadModelData(${index})">View More</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            `
        });
        countriesList.innerHTML=body;
    })
}

async function loadModelData(index){
    let modelBody=document.getElementById("model-body");

    modelBody.innerHTML=`
         <div>
          <img src="${countriesArrayList[index].flags.png}">
          <h1>${countriesArrayList[index].name.common}</h1>
          <h3>${countriesArrayList[index].capital}</h3>
          <h3>${countriesArrayList[index].population}</h3>
         </div>
    `
}

loadCountries();


function search(){
  let txtSearch=document.getElementById("txtSearch").value;
  let countriesList=document.getElementById("countriesList");
  let body="";

  fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
  .then(res=>res.json())
  .then((data)=>{
      countriesArrayList=data;     
      data.forEach((element,i)=>{    
                 body+=`
                    <div class="col"   >
                      <div class="card shadow-sm">
                        <img src="${element.flags.png}"
                        <div class="card-body">
                          <p class="card-text">
                            ${element.name.official}
                          </p>
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div class="btn-group">
                              <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="loadModelData(${i})">View More</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
               `
              }) 
            countriesList.innerHTML=body;
      })  
}
