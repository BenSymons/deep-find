const nested = {
  manager: {
      id: 3,
      fullname: "Clive Owen",
      username: "clow1",
      region: "Liverpool"
    },
  serial: 2,
  location: "UK",
  staff: [
    {
      id: 3,
      fullname: "Roger White",
      username: "rwhite",
      region: "Liverpool"
    },
    {
      id: 7,
      fullname: "Sarah Green",
      username: "green211",
      region: "Birmingham"
    },{
      id: 18,
      fullname: "Lynn Brown",
      username: "lb1987",
      region: "Blackpool"
    },
    {
      id: 26,
      fullname: "Steve Grey",
      username: "sgrey",
      region: "Birmingham"
    },
    {
      id: 33,
      fullname: 'Yura Nidiot',
      username: 'ynidiot',
      region: 'Winchester'
    }
  ]
}

const nestedArr = [
  {
    manager: {
      id: 3,
      fullname: "Clive Owen",
      username: "clow1",
      region: "Liverpool"
    },
  serial: 2,
  location: "UK",
  staff: [
    {
      id: 3,
      fullname: "Roger White",
      username: "rwhite",
      region: "Liverpool"
    },
    {
      id: 7,
      fullname: "Sarah Green",
      username: "green211",
      region: "Birmingham"
    },{
      id: 18,
      fullname: "Lynn Brown",
      username: "lb1987",
      region: "Blackpool"
    },
  ]
  },
  {
    manager: {
      id: 10,
      fullname: "Keren White",
      username: "KW10",
      region: "Manchester"
    },
  serial: 1,
  location: "UK",
  staff: [
    {
      id: 6,
      fullname: "Steve Red",
      username: "stred01",
      region: "London"
    },
    {
      id: 13,
      fullname: "Lily Green",
      username: "greenlil",
      region: "Birmingham"
    },{
      id: 18,
      fullname: "Mike Black",
      username: "mblack33",
      region: "Manchester"
    },
  ]
  },
]

export { nested, nestedArr }