interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'nadson.dr11@gmail.com',
      name: 'Nadson Dias Ribeiro',
    },
  },
} as IMailConfig;
