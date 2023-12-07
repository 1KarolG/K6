import http from "k6/http";
import { check } from "k6";
import { findBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export function getHTMLCrocodilesRequests(testContext) {
    const params =
    {
        headers: {
            'Host': `${testContext.host}`,
            'Authorization': `Basic ${testContext.authorization}`,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-language': 'en-US,en;q=0.5',
            //   'Accept-encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive'
        },
        tags: { ctype: 'html' }
    };

    let responses = http.batch([
        ['GET', `${testContext.baseUrl}/my/crocodiles/`, null, params],
        ['GET', `${testContext.baseUrl}/static/rest_framework/css/bootstrap.min.css`, null, { tags: { ctype: 'css' } }],
        ['GET', `${testContext.baseUrl}/static/rest_framework/js/ajax-form.js`, null, { tags: { ctype: 'js' } }]
    ]);

    const checkResult = check(responses[0], {
        ["getHtmlCrocodile request status is " + 200]: (res) =>
            res.status === 200,
    });

    let csrfToken = findBetween(responses[0].body, 'name="csrfmiddlewaretoken" value="', '">');
    console.log(`csrf token = ${csrfToken}`);
}