import http from "k6/http";
import { check } from "k6";
import { MetricFactory } from "../Utils/CustomMetricsFactory.js";
import { dataProvider } from "../Utils/DataProvider.js";

export function postCrocodilesRequest(testContext) {

    //   let response = http.post(`${testContext.baseUrl}/my/crocodiles/`, JSON.stringify(dataProvider.crocodileBodyData), testContext.defaultParams)

    let response = http.post(`${testContext.baseUrl}/my/crocodiles/`, JSON.stringify(dataProvider.crocodileBodyData), { tags: { type: 'post' }, headers: testContext.defaultParams.headers });

    const checkResult = check(response, {
        ["postCrocodile request status is " + 201]: (res) =>
            res.status === 201,
    });

    MetricFactory.add("postCrocodile", checkResult, response);

    return response;
}