(() => {
  // create-ee-test_create.js
  function create() {
    console.log("creating");
    return "created!";
  }
  function eeCreate() {
    console.log("eeCreate created");
    return "eeCreate created!";
  }
  create();
})();
