let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map(function(employee){
      if(employee.profession ==="developer"){
        console.log(employee);
      }
    })
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(function(employee){
      if(employee.profession ==="developer"){
        console.log(employee);
      }
    })
  }
  
  function addData() {
    let add = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(add);
    console.log(arr);
  }
  
  function removeAdmin() {
    updatedArr = arr.filter(function(employee){
      return employee.profession !== "admin" 
    });
    console.log(updatedArr);
  }
  
  function concatenateArray() {
    let new_arr = [
      { id: 4, name: "sonia", age: "22", profession: "webdeveloper" },
      { id: 5, name: "arvind", age: "23", profession: "doctor" },
      { id: 6, name: "vishal", age: "25", profession: "police" },
    ];
    let newA = arr.concat(new_arr);
     console.log(newA);
  }