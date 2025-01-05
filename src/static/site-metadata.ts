interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.gxy.plus',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'personal running page',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.gxy.plus',
    },
    {
      name: 'About',
      url: 'https://gxy.plus',
    },
  ],
};

export default data;
