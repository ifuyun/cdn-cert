export const configs = [{
  accessKeyId: '',
  accessKeySecret: '',
  regionId: 'cn-hangzhou',
  domains: [
    {
      domain: 'cdn.example.com',
      certPublicKeyPath: '/path/to/fullchain.pem',
      certPrivateKeyPath: '/path/to/privkey.pem'
    },
    {
      domain: 'static.example.com',
      certPublicKeyPath: '/path/to/fullchain.pem',
      certPrivateKeyPath: '/path/to/privkey.pem'
    }
  ]
}];
