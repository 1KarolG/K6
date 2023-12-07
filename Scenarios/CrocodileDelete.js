import { TestContext } from "../Configuration/TestContext.js";
import { getCrocodilesRequest } from "../Requests/CrocodileReqs.js";
import { deleteCrocodilesRequest } from "../Requests/CrocodieDel.js";

export const options = {
  vus: 1,
  iterations: 1,
};
//shift+alt+F to format code

// create test context
export async function setup() {
  const testContext = new TestContext();
  return testContext;
}

// perform the test
export default function crocodileTest(testContext) {

  // read crocodiles
  let response = getCrocodilesRequest(testContext);
  let json = response.json();

  // delete each crocodile
  json.forEach(obj => {
    deleteCrocodilesRequest(testContext, obj.id);
  });
}