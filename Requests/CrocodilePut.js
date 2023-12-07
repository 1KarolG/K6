import http from "k6/http";
import { check } from "k6";
import { MetricFactory } from "../Utils/CustomMetricsFactory.js";
import { dataProvider } from "../Utils/DataProvider.js";

export function putCrocodilesRequest(testContext, identifier, name) {
    let bodyData = dataProvider.crocodileBodyData;
    bodyData.name = name;
  
    let response = http.put(`${testContext.baseUrl}/my/crocodiles/${identifier}/`, JSON.stringify(bodyData), testContext.defaultParams)
  
    const checkResult = check(response,
      {
        ["putCrocodile request status is " + 200]: (res) =>
          res.status === 200,
      });
  
    MetricFactory.add("putCrocodile", checkResult, response);
  
    return response;
  }