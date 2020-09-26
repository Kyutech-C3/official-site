<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Vue.js - Hello world</title>
</head>
<body>

    <div id="app">
        {{ message }}
    </div>

    <script src="./vue.js"></script>
    <script>
  new Vue({
      el: '#app',

      data () {
          return {
              message: 'Hello world!'
          }
      }
  })
    </script>
</body>
</html>