// Creator: Grafana k6 Browser Recorder 1.0.1

import { sleep, group } from 'k6'
import http from 'k6/http'

import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

export const options = {}

export default function main() {
  let formData, response

  group('page_2 - https://test-api.k6.io/my/crocodiles/', function () {
    response = http.get('https://test-api.k6.io/my/crocodiles/', {
      headers: {
        referer: 'https://test-api.k6.io/',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/css/bootstrap.min.css', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/css/bootstrap-tweaks.css', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/css/prettify.css', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/css/default.css', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/js/jquery-3.5.1.min.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/js/ajax-form.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/js/csrf.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/js/bootstrap.min.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/js/prettify-min.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/js/default.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test-api.k6.io/static/rest_framework/img/grid.png', {
      headers: {
        referer: 'https://test-api.k6.io/static/rest_framework/css/bootstrap-tweaks.css',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })

  group('page_3 - https://test-api.k6.io/my/crocodiles/12752858/', function () {
    response = http.get('https://test-api.k6.io/my/crocodiles/12752858/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/css/bootstrap.min.css', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/css/bootstrap-tweaks.css', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/css/prettify.css', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/css/default.css', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/js/jquery-3.5.1.min.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/js/ajax-form.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/js/csrf.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/js/bootstrap.min.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/js/prettify-min.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/js/default.js', {
      headers: {
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/img/grid.png', {
      headers: {
        referer: '',
      },
    })

    formData = new FormData()
    formData.boundary = '----WebKitFormBoundaryHt32XYy51lfPK11m'
    formData.append('name', 'TwoCTest')
    formData.append('sex', 'F')
    formData.append('date_of_birth', '2023-12-06')

    response = http.put('https://test-api.k6.io/my/crocodiles/12752858/', formData.body(), {
      headers: {
        accept: 'text/html; q=1.0, */*',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryHt32XYy51lfPK11m',
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'x-csrftoken': 'NBQ2PJdymugPd6Hsob3czjbiJAVQfK8FOeXVWBQADhQ7CbHCUJwfPq7PoKhP6Z6Q',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/img/grid.png', {
      headers: {
        referer: '',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/img/grid.png', {
      headers: {
        referer: '',
      },
    })

    response = http.del('https://test-api.k6.io/my/crocodiles/12752858/', null, {
      headers: {
        accept: 'text/html; q=1.0, */*',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        referer: 'https://test-api.k6.io/my/crocodiles/12752858/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'x-csrftoken': '1IUkVEqt3266x11QOGyMHAqq0glznkuSJNVKlAvN4vOdFfWpomVWVYrxe1NU7CM1',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://test-api.k6.io/static/rest_framework/img/grid.png', {
      headers: {
        referer: '',
      },
    })
  })

  // Automatically added sleep
  sleep(1)
}
