import http from "k6/http";
import { check } from "k6";
import { MetricFactory } from "../Utils/CustomMetricsFactory.js";
import { dataProvider } from "../Utils/DataProvider.js";

export function patchCrocodilesRequest(testContext, identifier, name) {
    let bodyData = dataProvider.crocodileBodyData;
    bodyData.name = name;
  
    let response = http.patch(`${testContext.baseUrl}/my/crocodiles/${identifier}/`, JSON.stringify(bodyData), testContext.defaultParams)
  
    const checkResult = check(response,
      {
        ["patchCrocodile request status is " + 200]: (res) =>
          res.status === 200,
      });
  
    MetricFactory.add("patchCrocodile", checkResult, response);
  
    return response;
  }