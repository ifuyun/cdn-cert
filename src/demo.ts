import * as $tea from '@alicloud/tea-typescript';
import Util from '@alicloud/tea-util';
import { configs } from './config';
import { CdnCert } from './core';

export async function demo() {
  const cdnCert = new CdnCert();
  const client = cdnCert.createClient(configs[0].accessKeyId, configs[0].accessKeySecret);

  try {
    const certList = await cdnCert.getCdnCertList(client);
    const certInfo = await cdnCert.getDomainCertInfo(client, 'cdn.ifuyun.com');
    const domainList = await cdnCert.getCdnHttpsDomainList(client);
    const expireCount = await cdnCert.getUserCertExpireCount(client);
    console.log('--------cert list--------\n', Util.toJSONString($tea.toMap(certList)));
    console.log('--------cert info--------\n', Util.toJSONString($tea.toMap(certInfo)));
    console.log('--------domain list--------\n', Util.toJSONString($tea.toMap(domainList)));
    console.log('--------expire count--------\n', Util.toJSONString($tea.toMap(expireCount)));
  } catch (e) {
    console.error(e);
  }
}

demo();
