const searchform = document.getElementById("searchForm");
 const errorDisplay = document.getElementById('error');
searchform.addEventListener("submit",function(event){
     event.preventDefault();
    const fromStation = document.getElementById('from_station').value.trim();
    const toStation = document.getElementById('to_station').value.trim();
    const journeyDate = document.getElementById('journey_date').value;
    errorDisplay.innerText = "",
    errorDisplay.style.display = "none";
    if(!fromStation || !toStation) {
       showError(`Please enter both 'from' and 'To' stations.`)
       return;
    }
    if(fromStation.toLowerCase() === toStation.toLowerCase()){
      showError("Departure and Destination cannot be same.")
      return;
    }
    if(!journeyDate) {
      showError("Please select a valid journey date.");
      return;
    }
    const loading = document.getElementById('loading');
    loading.style.display = "block";
    console.log("Validating... ");
    
    setTimeout(()=>{
      loading.style.display = "none";
      alert("Hold On..,We are Searching for trains...");
    },1500);
   
})
 let showError = (message) => {
       errorDisplay.innerText = message;
       errorDisplay.style.display = "block";
       errorDisplay.style.padding = "10px";
       errorDisplay.style.background = "#fce8e6";
       errorDisplay.style.borderRadius = "4px";
       errorDisplay.style.marginTop = "10px";
    }