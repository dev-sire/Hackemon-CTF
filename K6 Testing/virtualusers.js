import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 75,
  duration: '60s',
};

export default function () {
  const cookies = {
    session: '83b6dcd3-d3d3-4647-84e4-c779d108cbe2.v8q7x0WKNjHNeIKVgq8ppBIhNK4',
  };

  const params = {
    headers: {
      Cookie: `session=${cookies.session}`,
    },
  };

  const res = http.get('http://localhost:8000/challenges', params);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);
}