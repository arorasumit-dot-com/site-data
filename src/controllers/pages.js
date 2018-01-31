module.exports.home = (req, res) => {
  res.send({
    title: 'Hi, I am Sumit Arora',
    subTitle: 'a full stack developer at rangle.io',
  });
};

module.exports.education = (req, res) => {
  res.send([
    {
      logo: '',
      college: 'Centennial College',
      degree:
        'Software Engineering Technology (Fast Track), Computer Software Engineering',
      year: '2012 – 2014',
    },
    {
      logo: '',
      college: 'Punjab Technical University',
      degree: 'B Tech., Computer Science',
      year: '2004 – 2008',
    },
  ]);
};

module.exports.experience = (req, res) => {
  res.send([
    {
      title: 'FullStack Developer',
      company: 'rangle.io',
      year: 'May 2014 – Present',
    },
    {
      title: 'FullStack Developer',
      company: 'Atendy',
      year: 'Nov 2012 – Oct 2014',
    },
    {
      title: 'Java Developer ( Co-op )',
      company: 'PointClickCare',
      year: 'May 2013 – Dec 2013',
    },
    {
      title: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions',
      year: 'May 2011 – Aug 2012',
    },
    {
      title: 'Flex Developer',
      company: 'Net Solutions',
      year: 'May 2009 – May 2011',
    },
    {
      title: 'Web Developer',
      company: 'Sarjeevan Knitwears',
      year: 'Jul 2008 – Feb 2009',
    },
  ]);
};

module.exports.spoken = (req, res) => {
  res.send([
    {
      title: 'Build, Measure, and Machine Learn with Angular',
      url: 'https://www.youtube.com/watch?v=P_FSpwfERAg',
      conference: 'NgConf',
      year: '2017',
    },
    {
      title: 'Redux Beacon and Analytics',
      url: 'https://www.youtube.com/watch?v=7qkuXzXp7dA',
      conference: 'NgConf',
      year: '2017',
    },
    {
      title: 'Build, Measure, and Machine Learn with Angular',
      url: 'https://youtu.be/c8p8Zf1m5Jg?t=1937',
      conference: 'Virtual IT Conference presented by ACCES Employment',
      year: '2017',
    },
    {
      title: 'Look Deeply Into Your App with Augury',
      url: 'https://www.youtube.com/watch?v=b1YV9vJKXEA',
      conference: 'NgConf',
      year: '2016',
    },
    {
      title: 'Ng-Conf Newsroom',
      url: 'https://youtu.be/_ubji2Y1ysY?t=5376',
      conference: 'NgConf',
      year: '2016',
    },
    {
      title: 'Augury',
      url: 'https://youtu.be/QWDJNJFgnVM?t=1032',
      conference: 'AngularJS TO',
      year: '2016',
    },
  ]);
};
