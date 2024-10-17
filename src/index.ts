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

      for (const domain of config.domains) {
        const cert = readFileSync(domain.certPath, 'utf8');
        const key = readFileSync(domain.certPrivateKeyPath, 'utf8');
        const result = await cdnCert.setCdnDomainSSLCert(client, domain.domain, cert, key);
        console.log(`--${domain.domain}--\n`, Util.toJSONString($tea.toMap(result)));
      }
    }
  } catch (e) {
    console.error(e);
  }
}

updateCerts();
