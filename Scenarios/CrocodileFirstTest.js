import { TestContext } from "../Configuration/TestContext.js";
import { postCrocodilesRequest } from "../Requests/CrocodilePost.js";
import { getCrocodilesRequest } from "../Requests/CrocodileReqs.js";
import { deleteCrocodilesRequest } from "../Requests/CrocodieDel.js";
import { putCrocodilesRequest } from "../Requests/CrocodilePut.js";
import { patchCrocodilesRequest } from "../Requests/CrocodilePatch.js";

// export const options = {
//     vus: 2,
//     iterations: 5,
// };

export const options = {
    //summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
    scenarios: {
      crocodile_scenario: {
        // name of the executor to use
        executor: 'shared-iterations',
        // common scenario configuration
        //startTime: '5s',
        gracefulStop: '5s',
        // executor-specific configuration
        vus: 5,
        iterations: 40,
        maxDuration: '300s',
        exec: "crocodileTest",
      },
    }
  };

// create test context
export async function setup() {
    const testContext = new TestContext();
    return testContext;
}

// perform the test
export function crocodileTest(testContext) {

    // read crocodiles
    getCrocodilesRequest(testContext);
    // create crocodiles
    let response = postCrocodilesRequest(testContext);
    // update by put request
    let crocodileId = response.json().id;
    let crocodileNewName = response.json().name + "put";
    response = putCrocodilesRequest(testContext, crocodileId, crocodileNewName);
    console.log(response.json());
    // update by patch request
    let crocodileIdNew = response.json().id;
    let crocodileNewNameNew = response.json().name + "patch";
    response = patchCrocodilesRequest(testContext, crocodileIdNew, crocodileNewNameNew);
    console.log(response.json());
    // delete crocodiles
    deleteCrocodilesRequest(testContext, response.json().id);
}