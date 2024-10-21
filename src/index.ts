import * as $tea from '@alicloud/tea-typescript';
import Util from '@alicloud/tea-util';
import { readFileSync } from 'node:fs';
import { configs } from './config';
import { CdnCert } from './core';

export async function updateCerts() {
  try {
    const cdnCert = new CdnCert();
    for (const config of configs) {
      const client = cdnCert.createClient(config.accessKeyId, config.accessKeySecret);
      const cert = readFileSync(config.cert.certPublicKeyPath, 'utf8');
      const key = readFileSync(config.cert.certPrivateKeyPath, 'utf8');

      for (const domain of config.cert.cdnDomains) {
        // todo: 为避免重复上传证书，先上传证书，再通过certId、certName进行CDN证书设置
        const result = await cdnCert.setCdnDomainSSLCert(client, domain, cert, key);
        console.log(`--${domain}--\n`, Util.toJSONString($tea.toMap(result)));
      }
    }
  } catch (e) {
    console.error(e);
  }
}

updateCerts();
