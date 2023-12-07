import http from "k6/http";
import { check } from "k6";
import { MetricFactory } from "../Utils/CustomMetricsFactory.js";

export function getCrocodilesRequest(testContext) {

  let response = http.get(`${testContext.baseUrl}/my/crocodiles/`, testContext.defaultParams);

  let checkResult = check(response, {
    ["getCrocodile request status is " + 200]: (res) =>
      res.status === 200,
    'response is status 200': (r) => r.status === 200,
    'body size is > 0 bytes': (r) => r.body.length > 0,
    'body size is not empty': (r) => r.body != "",
  });

  MetricFactory.add("getCrocodile", checkResult, response);

  return response;
}