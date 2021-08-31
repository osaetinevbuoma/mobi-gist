import IGist from "../../interfaces/IGist";
import { extractFileTypes, sliceGistArray, sortGistForkUser } from "../../services/GistService";

test('test sorting users that forked gist from most recent', () => {
  const gists: IGist[] = [
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2011-10-29T16:24:56Z',
      updated_at: '2015-09-27T20:08:10Z',
      files: null
    },
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2011-11-18T12:56:37Z',
      updated_at: '2015-09-28T03:18:24Z',
      files: null
    },
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2011-11-25T15:07:58Z',
      updated_at: '2015-09-28T05:47:55Z',
      files: null
    },
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2012-02-01T09:28:53Z',
      updated_at: '2015-09-30T03:47:54Z',
      files: null
    }
  ];

  const expectedGists: IGist[] = [
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2012-02-01T09:28:53Z',
      updated_at: '2015-09-30T03:47:54Z',
      files: null
    },
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2011-11-25T15:07:58Z',
      updated_at: '2015-09-28T05:47:55Z',
      files: null
    },
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2011-11-18T12:56:37Z',
      updated_at: '2015-09-28T03:18:24Z',
      files: null
    },
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2011-10-29T16:24:56Z',
      updated_at: '2015-09-27T20:08:10Z',
      files: null
    }
  ];

  expect(sortGistForkUser(gists)).toStrictEqual(expectedGists);
});

test('test slice gist array to size 3', () => {
  const gists: IGist[] = [
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2012-02-01T09:28:53Z',
      updated_at: '2015-09-30T03:47:54Z',
      files: null
    },
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2011-11-25T15:07:58Z',
      updated_at: '2015-09-28T05:47:55Z',
      files: null
    },
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2011-11-18T12:56:37Z',
      updated_at: '2015-09-28T03:18:24Z',
      files: null
    },
    {
      url: '',
      html_url: '',
      id: '',
      description: '',
      forks_url: '',
      created_at: '2011-10-29T16:24:56Z',
      updated_at: '2015-09-27T20:08:10Z',
      files: null
    }
  ];

  expect(sliceGistArray(gists).length).toBe(3);
});

test('test extract file types', () => {
  const files = {
    "chrome_15_mac.js": {
      "filename": "chrome_15_mac.js",
      "type": "application/javascript",
      "language": "JavaScript",
      "raw_url": "https://gist.githubusercontent.com/gr2m/1376394/raw/b3d4a51dbcdb846f930e9e430a2e7304fa8313f6/chrome_15_mac.js",
      "size": 1025
    },
    "firefox_3.6_mac.js": {
      "filename": "firefox_3.6_mac.js",
      "type": "application/javascript",
      "language": "JavaScript",
      "raw_url": "https://gist.githubusercontent.com/gr2m/1376394/raw/e6c8477180a299b70824c7e3f9e309880e5da9e2/firefox_3.6_mac.js",
      "size": 2102
    },
    "firefox_8_mac.js": {
      "filename": "firefox_8_mac.js",
      "type": "application/javascript",
      "language": "JavaScript",
      "raw_url": "https://gist.githubusercontent.com/gr2m/1376394/raw/adddc149d3b0ea1a0664dd163f91907ebafe1e8c/firefox_8_mac.js",
      "size": 2080
    },
    "ie_8_winXP.js": {
      "filename": "ie_8_winXP.js",
      "type": "application/javascript",
      "language": "JavaScript",
      "raw_url": "https://gist.githubusercontent.com/gr2m/1376394/raw/da4cfc77ccd616747323fab93f69dd97e1d61572/ie_8_winXP.js",
      "size": 256
    },
    "ie_9_win7.js": {
      "filename": "ie_9_win7.js",
      "type": "application/javascript",
      "language": "JavaScript",
      "raw_url": "https://gist.githubusercontent.com/gr2m/1376394/raw/da4cfc77ccd616747323fab93f69dd97e1d61572/ie_9_win7.js",
      "size": 256
    },
    "opera_11_mac.js": {
      "filename": "opera_11_mac.js",
      "type": "application/javascript",
      "language": "JavaScript",
      "raw_url": "https://gist.githubusercontent.com/gr2m/1376394/raw/0637a088a01e8ddab3bf3fa98dbe804cbde1a0dc/opera_11_mac.js",
      "size": 2
    },
    "safari_5.1_mac.js": {
      "filename": "safari_5.1_mac.js",
      "type": "application/javascript",
      "language": "JavaScript",
      "raw_url": "https://gist.githubusercontent.com/gr2m/1376394/raw/da4cfc77ccd616747323fab93f69dd97e1d61572/safari_5.1_mac.js",
      "size": 256
    }
  }

  expect(extractFileTypes(files)).toStrictEqual(['JavaScript']);
});
