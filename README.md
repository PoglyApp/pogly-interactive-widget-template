# Pogly interactive widget template

This is a barebone template to create interactive widgets for Pogly utilizing TMI.js and React.

## Noteable things

The project url is by default `../example/?channel=`. You need to edit `vite.config.ts` to change the `example`.

## Examples of usage

- [Twitch collection log popup overlay](https://github.com/Dynrothe/twitch-clog-overlay)
- [Twitch word guessing overlay](https://github.com/Dynrothe/twitch-word-guessing-overlay)
- [Twitch chat plays ocarina overlay](https://github.com/Lethalchip/twitch-chat-ocarina)
- [Twitch chat plays snake overlay](https://github.com/Lethalchip/twitch-chat-snake)
- [Twitch chat plays tetris overlay](https://github.com/Lethalchip/twitch-chat-tetris)
- [Twitch chat poll overlay](https://github.com/Lethalchip/twitch-poll-overlay)

# Widget code template

```
{"widgetName":"Widget example","widgetWidth":650,"widgetHeight":800,"headerTag":"","bodyTag":"<iframe src=\"{widget_url}\" allowtransparency=\"true\"></iframe>","styleTag":"* {\n            margin: 0;\n            padding: 0;\n            border: 0;\n            overflow: hidden!important;\n        }\n        html, body {\n            width: 100%;\n            height: 100%;\n            overflow: hidden!important;\n            background-color: rgba(0,0,0,0);\n        }\n        iframe {\n            width: 100%;\n            height: 100%;\n            border: none;\n            overflow: hidden!important;\n            display: block;\n            background-color: rgba(0,0,0,0);\n        }","scriptTag":"","variables":[{"variableName":"channel","variableType":1,"variableValue":"bobross"},{"variableName":"widget_url","variableType":1,"variableValue":"http://localhost:5173/example/?channel={channel}"}]}
```
