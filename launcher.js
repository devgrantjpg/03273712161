
overlay.addEventListener("click", () => {
  overlay.remove();
  document.getElementById("unity-loading-bar").style.display = "block";

  var config = {
    dataUrl: buildUrl + "/buildtestA.data",
    companyName: "DefaultCompany",
    productName: "click",
    productVersion: "0.1.0",

  };
  script.src = loaderUrl;
  script.onload = () => {
    createUnityInstance(canvas, config, (progress)=>{
      document.getElementById("unity-progress-bar-full").style.width = 100*progress+"%";
    }).then((unityInstance)=>{
      document.getElementById("unity-loading-bar").style.display="none";
    }).catch(alert);
  };
  document.body.appendChild(script);
});

