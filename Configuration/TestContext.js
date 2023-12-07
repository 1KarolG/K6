export class TestContext {
  constructor() {
    // this.host = "test-api.k6.io";
    // this.baseUrl = `https://${this.host}`;
    // this.authorization ='dGVzdFVzcjI6dGVzdFVzcjI=';
    this.host = `${__ENV.host}`;
    this.baseUrl = `https://${this.host}`;
    this.authorization = `${__ENV.authorization}`;
    this.defaultParams = {
      headers: {
        'Host': `${this.host}`,
        'Authorization': `Basic ${this.authorization}`,
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
    };
  }
}

export default TestContext;


// this.host = `${__ENV.host}`;
// this.baseUrl = `https://${this.host}`;
// this.authorization = `${__ENV.authorization}`;

// SET "authorization=<your code>"
// SET "host=test-api.k6.io"