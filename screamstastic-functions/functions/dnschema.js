let db = {
  users: [
    {
      userId: 'jh2345j3h42jhv345',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2022-02-07T01:06:19.701Z',
      imageUrl: 'image/ghghmjgfdfgn/dfgbfgnsfb',
      bio: 'Hello my name is user, nice to meet you',
      website: 'https://new.com',
      location: 'London, UK'
    }
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'This is the scream body',
      createdAt: '2022-01-02T13:23:53.007Z',
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'iukj34h5lkj3245lkj324hlkj',
      body: 'nice one mate!',
      createdAt: '2022-01-02T13:23:53.007Z'
    }
  ]
};

const userDetails = {
  // Redux data
  credentials: {
    userId: 'U345U2345UYG2345UYG2345UY',
    email: 'user@mail.com',
    handle: 'user',
    createdAt: '2022-02-07T01:06:19.701Z',
    imageUrl: 'image/dfhsnsdfgsdfgdf/sdfgergsgdsfg',
    bio: 'Hellow my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'London, UK'
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'kkjbsdfjhs4jh3v4jkh'
    },
    {
      userHandle: 'user',
      screamId: '234u23uyg23u4oyg23'
    }
  ] 
};
