# deep-find

Make sure you write your code in `index.ts`. If you run `npm test` then your ts code will be compiled and tested automatically.

For this kata, you will write a function called deepFind which will accept two parameters: an object/array and a username. This object will contain nested data containing among other things, a username and a fullname. Your function should look to see if that username under the key of `username` is anywhere in the data and return `true` if it is present and `false` if it isn't. The function cannot simply look for the username anywhere. It must come under the username key. 

## examples

```js
{
  manager: {
      id: 3,
      fullname: "Clive Owen",
      username: "clow1"
      region: "Liverpool"
    },
  serial: 2,
  location: "UK"
  staff: [
    {
      id: 3,
      fullname: "Roger White",
      username: "rwhite"
      region: "Liverpool"
    },
    {
      id: 7,
      fullname: "Sarah Green",
      username: "green211"
      region: "Birmingham"
    },{
      id: 18,
      fullname: "Lynn Brown",
      username: "lb1987"
      region: "Blackpool"
    },{
      id: 26,
      fullname: "Steve Grey",
      username: "sgrey"
      region: "Birmingham"
    },
  ]
}
```

If deepfind was passed in this data and the username `green211` it should return `true` because there is the property`{ username: "green211" }`





