import { Rate, Trend, Counter } from 'k6/metrics';

class CustomMetricFactory {
  constructor() {
    this.MetricKey =
      [
        "putCrocodile",
        "getCrocodile",
        "postCrocodile",
        "patchCrocodile",
        "deleteCrocodile"
      ];
    this.metrics = new Map();
    this.MetricKey.forEach((key) => 
    {
      this.metrics.set(key, {
        trend: new Trend(`_${key}_duration`),
        rate: new Rate(`_${key}_rate`),
        counter: new Counter(`_${key}_count`),
      });
    });
  }

  add(requestName, result, response) {
    let metric = this.metrics.get(requestName);
    metric.rate.add(result);
    metric.counter.add(result);
    metric.trend.add(response.timings.duration);
  }

}
//is used in init code so it is fine to return an object
export const MetricFactory = new CustomMetricFactory();