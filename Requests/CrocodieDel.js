import http from "k6/http";
import { check } from "k6";
import { MetricFactory } from "../Utils/CustomMetricsFactory.js";

export function deleteCrocodilesRequest(testContext, identifier) {
    let response = http.del(`${testContext.baseUrl}/my/crocodiles/${identifier}/`, null, testContext.defaultParams);
  
    const checkResult = check(response, {
      ["deleteCrocodile request status is " + 204]: (res) =>
        res.status === 204,
    });
  
    MetricFactory.add("deleteCrocodile", checkResult, response);
  
    return response;
  }